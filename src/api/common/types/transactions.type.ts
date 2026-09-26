import { MyProfileType } from "./my-profile.type";
import { SubscriptionPlanType } from "./subscription-plan.type";

export type TransactionsResponseType = {
  id: string;
  invoiceNumber: string;
  transactionReference: string;
  amount: number;
  transactionStatus: string;
  recipientId: string;
  recipient?: MyProfileType | null;
  subscriptionPlanId: string;
  subscriptionPlan?: SubscriptionPlanType | null;
  createdAt?: Date;
  updatedAt?: Date;
  metaData?: Record<string, unknown> | null;
};
