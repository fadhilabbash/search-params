import { PaginationWithLinks } from "@/components/common/pagination-with-links";
import { Search } from "@/components/common/search";
import { getPosts } from "@/service/actions/post.action";

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

const Home = async ({ searchParams }: SearchParamsProps) => {
  const search = await searchParams;
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
      <div>
        <PaginationWithLinks
          page={currentPage}
          pageSize={pagination.per_page}
          totalCount={pagination.total}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 25, 50],
          }}
        />
      </div>
    </div>
  );
};
export default Home;
