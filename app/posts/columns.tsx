"use client";

import { ColumnDef } from "@tanstack/react-table";
// Extend ColumnMeta to include 'displayName'
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    displayName?: string; 
  }
}
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Post = {
  id: string;
  title: string;
};

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "المعرف",
    meta: { displayName: "المعرف" },
  },
  {
    accessorKey: "title",
    header: "العنوان",
    meta: { displayName: "العنوان" },
  },
];
