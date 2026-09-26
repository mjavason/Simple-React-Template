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
};

export enum ProgrammeTypeEnum {
  MOVIE = 'movie',
  SERIES = 'series',
}

export enum ProgrammeCategoryEnum {
  ECO_HOUSE = 'eco_house',
  HQ = 'hq',
  SPOTLIGHT = 'spotlight',
  HUB_TV = 'hub_tv',
}
