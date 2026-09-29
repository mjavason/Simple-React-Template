export type MyProfileResponseType = {
  id: string;
  uuid: string;
  email: string;
  pictureUrl: string | null;
  isEmailVerified: boolean;
  role: string | null;
  permissions: Array<string>;
  status: string;
  isSuper: boolean;
  is2FAEnabled: boolean;
  hasActiveSubscription: boolean;
  activeSubscription: {
    startDate: string; // ISO timestamp
    endDate: string; // ISO timestamp
    hasExpired: boolean;
    subscriptionPlan: {
      id: string;
      title: string;
      benefits: Array<string>;
    } | null;
  } | null;
  isAutoSubscriptionEnabled: boolean;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // ISO timestamp
  phoneNumber: string | null;
  country: string;
  userType: string;
  gender: string;
  isActive: boolean;
  orgType: string | null;
  orgName: string | null;
  orgSize: string | null;
  parentEmail: string | null;
  parentId: string | null;
  parent: MyProfileResponseType | null; // Recursive type for parent user
  parentalControlStartTime: string | null; // ISO timestamp
  parentalControlEndTime: string | null; // ISO timestamp
  isOnboardingCompleted: boolean;
  isExpressRegistration: boolean;
  controlPin: string;

  // virtual
  age?: string;

  createdAt: Date;
  updatedAt: Date;
};

export enum UserTypeEnum {
  PARENT = 'parent',
  CHILD = 'child',
  ORGANIZATION = 'organization',
  ADMIN = 'admin',
  SUPER = 'super',
}
