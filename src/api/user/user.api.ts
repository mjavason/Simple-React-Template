import { MyProfileResponseType } from '@/api/common/types/my-profile.type';
import { CacheKeys } from '@/common/constants/keys.constants';
import { useApiQuery } from '@/hooks/use-api-query.hook';
import { ApiResponseType } from '../api-response.type';

export function useGetProfile() {
  return useApiQuery<ApiResponseType<MyProfileResponseType>>(
    [CacheKeys.PROFILE],
    '/user/profile',
    {
      onSuccess: () => {},
    },
  );
}
