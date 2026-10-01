import { useQueryClient } from 'react-query';
import type { ApiResponseType } from '@/api/api-response.type';
import type {
  LoginInputType,
  LoginResponseType,
} from '../common/types/login.type';
import { ApiMethods } from '@/common/constants/index.constants';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import { getCookie, setCookie } from '@/helpers/cookie.helper';
import { useApiMutation } from '@/hooks/use-api-mutation.hook';
import { useAppNavigate } from '@/hooks/use-app-navigate.hook';

export function useLogin() {
  const navigate = useAppNavigate();
  const qc = useQueryClient();

  return useApiMutation<LoginInputType, ApiResponseType<LoginResponseType>>(
    '/auth/sign_in',
    ApiMethods.POST,
    [],
    {
      onSuccess: (data) => {
        qc.clear();
        const res = data.data;

        setCookie(CookieKeys.AUTH_TOKEN, res.token);
        setCookie(CookieKeys.USER_TYPE, res.userType);

        const redirectRoute =
          getCookie(CookieKeys.REDIRECT_ROUTE) ?? RoutesConst.POSTS;

        navigate(redirectRoute);
      },
    },
  );
}
