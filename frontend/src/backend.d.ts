import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    name: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    clearSubmissions(): Promise<void>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, message: string): Promise<void>;
}
