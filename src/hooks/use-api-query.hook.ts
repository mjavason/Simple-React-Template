import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { API_BASE_URL } from '../common/constants/env.constants';
import { getJson } from '../utils/api.util';

type ApiQueryOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

const useApiQueryConfig = <T>(options?: ApiQueryOptions<T>) => ({
  onSuccess: options?.onSuccess,

  onError: (error: Error) =>
    options?.onError ? options.onError(error) : toast.error(error.message),

  staleTime: 30 * 60 * 1000,
  cacheTime: 35 * 60 * 1000,
  refetchOnWindowFocus: false,
});

export function useApiQuery<TOutput>(
  keys: string[],
  url: string,
  options?: ApiQueryOptions<TOutput>,
  enabled = true,
) {
  return useQuery<TOutput, Error>({
    queryKey: keys,
    queryFn: () => getJson<TOutput>(`${API_BASE_URL}${url}`),
    ...useApiQueryConfig(options),
    enabled,
  });
}

type ApiEndpoint<TOutput> = {
  key: string;
  url: string;

  // Used for compile-time type inference.
  __output?: TOutput;
};

type ApiResults<T extends readonly ApiEndpoint<unknown>[]> = {
  [K in keyof T]: T[K] extends ApiEndpoint<infer R> ? R : never;
};

export function useApiQueries<T extends readonly ApiEndpoint<unknown>[]>(
  endpoints: T,
  options?: ApiQueryOptions<ApiResults<T>>,
  enabled = true,
) {
  return useQuery<ApiResults<T>, Error>({
    queryKey: endpoints.map(({ key }) => key),

    queryFn: async () => {
      const results = await Promise.all(
        endpoints.map(({ url }) => getJson<unknown>(`${API_BASE_URL}${url}`)),
      );

      return results as ApiResults<T>;
    },

    ...useApiQueryConfig(options),
    enabled,
  });
}
