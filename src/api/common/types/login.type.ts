import type { UserTypeEnum } from './my-profile.type';

export type LoginInputType = {
  email: string;
  password: string;
  userType: UserTypeEnum;
};

export type LoginResponseType = {
  email: string;
  isEmailVerified: boolean;
  uuid: string;
  token: string;
  refreshToken: string;
  isExpressRegistration: boolean;
  userType: string;
  hasActiveSubscription: boolean;
};
