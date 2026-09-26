export type ExpressRegCodeType = {
  id: string;
  uuid: string;
  code: string;
  seats: number;
  isUsed: boolean;
  createdAt?: Date;
};
