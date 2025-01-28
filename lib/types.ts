export interface Post {
  id: number | string;
  title: string;
  text: string;
}

type Pagination = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

export type SuccessResponse<T> = {
  type: "success";
  message?: string;
  data: T | T[];
  pagination?: Pagination;
};

export type ErrorResponse = {
  type: "error";
  message: string;
  code?: number;
  errors?: Record<string, string[]>;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
