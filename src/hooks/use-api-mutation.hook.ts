import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { mutateJson } from '../utils/api.util';
import { API_BASE_URL } from '../common/constants/env.constants';

export function useApiMutation<TBodyInput, TOutput>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  invalidate: string[],
  options?: {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: Error) => void;
  },
) {
  const qc = useQueryClient();

  return useMutation<
    TOutput,
    Error,
    {
      body?: TBodyInput;
      params?: Record<string, string>;
      query?: Record<string, string>;
    }
  >({
    mutationFn: (input) =>
      mutateJson<TOutput>(
        `${API_BASE_URL}${url}`,
        input.body,
        method,
        input.params,
        input.query,
      ),

    onSuccess: (data) => {
      invalidate.forEach((key) => {
        qc.invalidateQueries({ queryKey: key });
      });

      if (options?.onSuccess) {
        options.onSuccess(data);
      } else {
        toast.success((data as { message?: string }).message ?? 'Successful');
      }
    },

    onError: (error) => {
      if (options?.onError) {
        options.onError(error);
      } else {
        toast.error(error.message ?? 'An error occurred');
      }
    },
  });
}
