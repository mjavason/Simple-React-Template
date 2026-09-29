export interface ChakraDisclosureProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;

  getButtonProps: (props?: any) => any;

  getDisclosureProps: (props?: any) => any;
}

export interface QueryParamsProp {
  page: number;
  limit: number;
  // filter is search
  filter?: string;
  isActive?: 'true';
  isInactive?: 'true';
  sort?: 'asc' | 'desc';
  search?: string;
  status?: 'pending' | 'success' | 'failed';
  category?: string;
}

export type UserType =
  | 'child'
  | 'parent'
  | 'organization'
  | 'par_admin'
  | 'par_super_admin'
  | 'user';

export type ContentType = 'movie' | 'series' | 'pdf' | 'audio';

export type ContentFormat = 'audio' | 'video' | 'pdf';

export type BillingPeriodType =
  'monthly' | 'quarterly' | 'bi-annually' | 'annually';

export interface SubscriptionType {
  title: string;
  desc: string;
  benefits: Array<string>;
  price: string;
  billing_period: BillingPeriodType;

  uid: string;
  is_subscribed?: boolean;
}

export type PaymentGateways = 'Flutterwave' | 'Stripe';

export interface PaginationMetaType {
  totalItems: number;
  count: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
}

export interface TransactionType {
  id: number;
  uuid: string;
  transactionReference: string;
  amount: number;
  description: string;
  discountAmount: number;
  paymentGateway: string;
  currencyCode: string;
  status: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  invoiceNumber: string;
}

export interface PaymentType {
  id: number;
  uuid: string;
  first6Digit: string;
  last4Digit: string;
  issuer: string;
  country: string;
  cardType: string;
  token: string;
  expiry: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export interface UserAuthDataType {
  id: number;
  uuid: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  userType: UserType;
  emailVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  verificationToken: string;
  verificationTokenExpires: string;
  isOnboardingCompleted: boolean;
  controlPin: string;
  subscription: {
    userSubscriptionPlan: {
      isActive: boolean;
      subscriptionPlan: {
        benefits: string; // json
      };
    };
  } | null;
  boughtSubscription: Array<SubscriptionType>;

  views: Array<{
    name: string;
    watched: number;
    uuid: string;
    id: number;
    totalContent: number;
  }>;
}

export interface ParentalControlDataType {
  id: number;
  uuid: string;
  dailyStartTime: string;
  controlPin: string;
  dailyEndTime: string;
  contentCategories: Array<string>;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
export interface OrganizationOwnerDataType {
  id: number;
  uuid: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  userType: UserType;
  emailVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  verificationToken: string;
  verificationTokenExpires: string;
  isOnboardingCompleted: boolean;
  controlPin: string;
  subscription: string;
  parentalControls: ParentalControlDataType;
}

export interface UserAuthOrgDataType {
  id: number;
  uuid: string;
  type: string;
  name: string;
  email: string;
  subscriptionDiscount: string;
  controlPin: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  size: string;
  owner: OrganizationOwnerDataType;
}

export interface ListHookProps {
  currentPage?: number;
  dataToShow?: number;
  searchValue?: string;
  filterBy?: 'active' | 'inactive' | 'all';
}

export interface QuizListQuestionType {
  question: string;
  // question type comes back as a string so JSON parse it
  options: {
    A: {
      answer: string;
      reason: string;
    };
    B: {
      answer: string;
      reason: string;
    };
    C: {
      answer: string;
      reason: string;
    };
    D: {
      answer: string;
      reason: string;
    };
  };
  answer: string;

  id?: number;
  uuid?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface QuizListType {
  name: string;
  content: string | null;
  badge: string | null;
  questions: Array<QuizListQuestionType>;

  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  id?: number;
  uuid?: string;
}
