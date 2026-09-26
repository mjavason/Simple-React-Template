import { BadgeType } from "./badge.type";

export type ProgrammeType = {
  id: string;
  uuid: string;
  title: string;
  type: string;
  format: string;
  description: string;
  banner: string;
  thumbnail: string;
  trailer: string;
  cast: string[];
  isFeatured: boolean;
  isDeleted: boolean;
  category: string;

  createdAt: Date;
  updatedAt: Date;

  numberOfContents: number; // This field is not stored in the database, but is calculated based on the number of content items associated with the programme.

  badgeId: string | null;
  badge?: BadgeType;
};

export enum ProgrammeTypeEnum {
  MOVIE = "movie",
  SERIES = "series",
}

export enum ProgrammeCategoryEnum {
  HQ = "hq",
  ECO_HOUSE = "eco_house",
  SPOTLIGHT = "spotlight",
  HUB_TV = "hub_tv",
}
