import { getPosts } from "@/service/post.action";
import { columns } from "./columns";
import { DataTable } from "../../components/common/data-table";
import { PaginationWithLinks } from "@/components/common/pagination-with-links";
import { Search } from "@/components/common/search";

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

const Posts = async ({ searchParams }: SearchParamsProps) => {
  const search = await searchParams;
  const query = search?.query ?? "";
  const currentPage = Number(search?.page) || 1;
  const { type, data, pagination } = await getPosts(query, currentPage);

  if (!data) return null;

  return (
    <div className="container grid grid-cols-1 gap-4 p-4 mx-auto py-8">
      <div>
        <Search />
      </div>
      <div>
        <DataTable columns={columns} data={data} />
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
export default Posts;
