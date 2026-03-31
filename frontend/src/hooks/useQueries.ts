import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, message }: { name: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(name, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['submissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
