import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { getJson } from '../utils/api.util';
import { API_BASE_URL } from '../common/constants/env.constants';

export function useApiQuery<TOutput>(
  keys: Array<string>,
  url: string,
  options?: {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: Error) => void;
  },
  enabled: boolean = true,
) {
  return useQuery<TOutput, Error>({
    queryKey: keys,
    queryFn: () => getJson<TOutput>(`${API_BASE_URL}${url}`),

    onSuccess: (data) => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      } else {
        // toast.success((data as { message?: string }).message ?? 'Successful');
      }
    },

    onError: (error) => {
      if (options?.onError) {
        options.onError(error);
      } else {
        toast.error(error.message);
        // toast.error('An unknown error occurred');
      }
    },
    enabled,
    staleTime: 1000 * 60 * 30, // 30 minutes
    cacheTime: 1000 * 60 * 35, // 35 minutes
    refetchOnWindowFocus: false,
  });
}
