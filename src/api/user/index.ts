import { CacheKeys } from '@/common/constants/keys.constants';
import { useApiQuery } from '../../hooks/use-api-query.hook';
import { ApiResponseType } from '../api-response.type';
import { MyProfileResponseType } from '../common/types/my-profile.type';

export function useGetProfile() {
  return useApiQuery<ApiResponseType<MyProfileResponseType>>(
    [CacheKeys.PROFILE],
    '/user/profile',
    {
      onSuccess: () => {},
    },
  );
}
