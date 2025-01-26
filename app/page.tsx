import { PaginationComponent } from "@/components/pagination-component";
import { Search } from "@/components/search";
import { getPosts } from "@/service/post.action";

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

const Home = async ({ searchParams }: SearchParamsProps) => {
  const search = searchParams;
  const query = search?.query ?? "";
  const currentPage = Number(search?.page) || 1;
  const { type, data, pagination } = await getPosts(query, currentPage);

  if (!data) return null;
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item: any) => (
          <div key={item.id} className="leading-8 text-pink-500 border p-2">
            {item.title || "Video Summary"}
          </div>
        ))}
      </div>
      <div className="text-black">
        <PaginationComponent pageCount={pagination?.last_page} />
      
      </div>
    </div>
  );
};
export default Home;
