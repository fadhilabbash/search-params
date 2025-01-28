export const ENDPOINTS = {

  posts: "/posts",
  createEmployee: "/posts",
  updateEmployee: (id: number | string) => `/posts/${id}`,
  deleteEmployee: (id: number | string) => `/posts/${id}`,
};
