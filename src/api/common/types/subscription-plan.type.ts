export type SubscriptionPlanType = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  price: number;
  billingCycle: string; // 'monthly' | 'yearly';
  cycleDuration: number; // 3 months, 1 day, etc
  availableSeats: number;
  isPaused: boolean;
  userType: string;
};

export enum SubscriptionPlanBillingCycleEnum {
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export enum SubscriptionPlanUserTypeEnum {
  ALL = "all",
  PARENT = "parent",
  ORGANIZATION = "organization",
}
