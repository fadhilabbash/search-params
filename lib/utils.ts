import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname, useSearchParams } from "next/navigation";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const createPageURL = (pageNumber: number | string) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.set("page", pageNumber.toString());
  return `${pathname}?${params.toString()}`;
};
