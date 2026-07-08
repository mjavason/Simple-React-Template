import { useQuery } from '@tanstack/react-query'
import { API_BASE_URL } from '../config/constants'
import { getJson } from '../utils/api.util'

export function useApiQuery<TOutput>(
  keys: string[],
  url: string,
  enabled: boolean = true,
) {
  return useQuery<TOutput, Error>({
    queryKey: keys,
    queryFn: () => getJson<TOutput>(`${API_BASE_URL}${url}`),
    enabled,
  })
}
