"use server";
// export  async function getPosts(){
//     const data = await fetch('http://127.0.0.1:8000/api/posts')
//     return await data.json()
// }

export async function getPosts(search: string, page: number = 1) {
    const url = new URL("http://127.0.0.1:8000/api/posts");
  
    // Append search, page, and pageSize parameters
    url.searchParams.append("search", search);
    url.searchParams.append("page", page.toString());
   
    // Fetch the data
    const response = await fetch(url.href);
  
    // Handle the response
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
  
    return await response.json();
  }
  