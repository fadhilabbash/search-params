"use server";

import { ApiResponse, Post } from "@/lib/types";
import { ENDPOINTS } from "../endpoints";
import apiClient from "../api-client";


// export async function getPosts(search: string, page: number = 1) {
//     const params = new URLSearchParams({ page: page.toString(), search });
//     const url = `http://127.0.0.1:8000/api/posts?${params.toString()}`;
//     // Fetch the data
//     const response = await fetch(url);
  
//     // Handle the response
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }
  
//     return await response.json();
//   }
  

  export const getPosts = async (
    page: number = 1,
    search: string = "",
  ): Promise<ApiResponse<Post>> => {
    const params = new URLSearchParams({ page: page.toString(), search });
    const endpoint = `${ENDPOINTS.posts}?${params.toString()}`;
    const response = await apiClient<Post>(endpoint);
    return response;
  };