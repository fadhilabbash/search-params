import { getPosts } from "@/service/actions/post.action";
import { columns, Post } from "./columns";
import { DataTable } from "../../components/common/data-table";
import { PaginationWithLinks } from "@/components/common/pagination-with-links";

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
  const res = await getPosts(currentPage, query);

  if (res.type === "error") return null;

  return (
    <div className="container grid grid-cols-1 gap-4 p-4 mx-auto py-8">
      <div>
        <DataTable columns={columns} data={res.data as Post[]} />
      </div>
      <div>
        <PaginationWithLinks
          page={currentPage}
          pageSize={res.pagination ? res.pagination.per_page : 0}
          totalCount={res.pagination ? res.pagination.total : 0}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 25, 50],
          }}
        />
      </div>
    </div>
  );
};
export default Posts;
