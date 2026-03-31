import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(sub1 : ContactSubmission, sub2 : ContactSubmission) : Order.Order {
      Nat.compare(sub1.id, sub2.id);
    };
  };

  let submissions = Map.empty<Nat, ContactSubmission>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, message : Text) : async () {
    if (name.size() == 0 or message.size() == 0) {
      Runtime.trap("Name and message cannot be empty");
    };

    let submission : ContactSubmission = {
      id = nextId;
      name;
      message;
      timestamp = Time.now();
    };

    submissions.add(nextId, submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };

  public shared ({ caller }) func clearSubmissions() : async () {
    submissions.clear();
    nextId := 0;
  };
};
