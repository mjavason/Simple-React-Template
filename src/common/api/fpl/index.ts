import { ApiMethods } from '@/common/config/constants'
import { useApiMutation } from '@/common/hooks/api-mutation.hook'
import { useApiQuery } from '@/common/hooks/api-query.hook'
import { QueryKeys } from '@/common/types'
import type { GetUltimateTeamResponseType } from './types/get-ultimate-team'

//   const handleSubmit = async (vals: LoginInputType) => {
//   try {
//     const result = await mutateAsync(vals);
//     console.log('Login result in component:', result);
//     // handle result synchronously
//   } catch (error) {
//     console.error(error);
//   }
// };

export function useGetUltimateTeam() {
  return useApiQuery<GetUltimateTeamResponseType>(
    [QueryKeys.PLAYERS],
    '/ultimate-team',
    undefined,
  )
}

export function useDeleteUser() {
  return useApiMutation<undefined, null>(`/users/:id`, ApiMethods.DELETE, [
    'users',
  ])
}
