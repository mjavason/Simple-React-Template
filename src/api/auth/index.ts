import cookie from 'js-cookie';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useApiMutation } from '../../hooks/use-api-mutation.hook';
import { ApiMethods, CookieKeys, Routes } from '../../utils/constants';
import { ApiResponseType } from '../api-response.type';
import { LoginInputType, LoginResponseType } from './types/login.type';

export function useLogin() {
  const navigate = useNavigate();
  const qc = useQueryClient();

  return useApiMutation<LoginInputType, ApiResponseType<LoginResponseType>>(
    '/auth/sign_in',
    ApiMethods.POST,
    [],
    {
      onSuccess: (data) => {
        qc.clear();
        const res = data.data;

        cookie.set(CookieKeys.TOKEN, res.token);
        cookie.set(CookieKeys.USER_TYPE, res.userType);

        navigate(Routes.sections);
      },
    },
  );
}
