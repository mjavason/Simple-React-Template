export type ApiResponseType<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type PaginationMetadataType = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number | null;
  previousPage: number | null;
};

export const DefaultPaginationMetadata: PaginationMetadataType = {
  currentPage: 1,
  totalPages: 1,
  totalCount: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  nextPage: null,
  previousPage: null,
};

export type PaginatedApiResponseType<T> = {
  success: boolean;
  message: string;
  data: {
    items: T;
    pagination: PaginationMetadataType;
  };
};
