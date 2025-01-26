"use client";
import { useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

import Link from "next/link";
import clsx from "clsx";
import { createPageURL } from "@/lib/utils";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PaginationProps {
  pageCount: number;
}

export function PaginationComponent({ pageCount }: Readonly<PaginationProps>) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <Pagination>
      <PaginationContent>
        {/* First Page Button */}
        <PaginationItem>
          <Link
            href={createPageURL(1)}
            className={clsx("p-2 rounded-md", {
              "opacity-50 cursor-not-allowed": currentPage <= 1,
            })}
          >
            <ArrowBigRight />
          </Link>
        </PaginationItem>
        <PaginationItem>
          <Link
            href={createPageURL(currentPage - 1)}
            className={clsx({
              "opacity-50 cursor-not-allowed": currentPage <= 1,
            })}
          >
            <ChevronRight />
          </Link>
        </PaginationItem>
        <PaginationItem>
          {/* <Link href={createPageURL(currentPage)} className="p-2 border rounded-md">{currentPage}</Link> */}
          <span className="p-2 border rounded-md">{currentPage}</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Link
            href={createPageURL(currentPage + 1)}
            className={clsx({
              "opacity-50 cursor-not-allowed": currentPage >= pageCount,
            })}
          >
            <ChevronLeft />
          </Link>
        </PaginationItem>
        <PaginationItem>
          <Link
            href={createPageURL(pageCount)}
            className={clsx("p-2 rounded-md", {
              "opacity-50 cursor-not-allowed": currentPage >= pageCount,
            })}
          >
            <ArrowBigLeft />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
