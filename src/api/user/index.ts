import { useApiQuery } from '../../hooks/use-api-query.hook';
import { CacheKeys } from '../../utils/constants';
import { ApiResponseType } from '../api-response.type';
import { MyProfileResponseType } from '../auth/types/my-profile.type';

export function useGetProfile() {
  return useApiQuery<ApiResponseType<MyProfileResponseType>>(
    [CacheKeys.PROFILE],
    '/user/profile',
    {
      onSuccess: () => {},
    },
  );
}
