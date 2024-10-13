"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    table.setPageSize(5);
  }, []);

  const goToPage = (pageNumber: number) => {
    table.setPageIndex(pageNumber);
  };

  const currentPage = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  // Custom pagination logic
 const renderPageButtons = () => {
   const buttons = [];

   // Previous button
   buttons.push(
     <button
       key="prev"
       className={`h-8 w-8 rounded-full ${currentPage === 0 ? "cursor-not-allowed text-gray-400" : "bg-primary text-gray-600 hover:bg-blue-100"}`}
       onClick={() => currentPage > 0 && goToPage(currentPage - 1)}
       disabled={currentPage === 0}
       aria-label="Previous Page"
     >
       {"<"}
     </button>,
   );

   // Always show the first page button
//    buttons.push(
//      <button
//        key={1}
//        className={`h-8 w-8 rounded-full ${currentPage === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-blue-100"}`}
//        onClick={() => goToPage(0)}
//        aria-label="Go to Page 1"
//      >
//        1
//      </button>,
//    );

   // Display up to two previous page buttons from the current page
   for (let i = Math.max(1, currentPage - 2); i < currentPage; i++) {
     buttons.push(
       <button
         key={i + 1}
         className={`h-8 w-8 rounded-full ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-blue-100"}`}
         onClick={() => goToPage(i)}
         aria-label={`Go to Page ${i + 1}`}
       >
         {i + 1}
       </button>,
     );
   }

   // Always show the current page button
   buttons.push(
     <button
       key={currentPage + 1}
       className="h-8 w-8 rounded-full bg-blue-500 text-white"
       aria-label={`Current Page ${currentPage + 1}`}
     >
       {currentPage + 1}
     </button>,
   );

   // Show ellipses if there are more than 2 pages available between current and last page
   if (currentPage < pageCount - 3) {
     buttons.push(
       <span key="dots" className="mx-2 text-gray-600">
         ...
       </span>,
     );
   }

   // Last page button
   if (pageCount > 1) {
     buttons.push(
       <button
         key={pageCount}
         className={`h-8 w-8 rounded-full ${currentPage === pageCount - 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-blue-100"}`}
         onClick={() => goToPage(pageCount - 1)}
         aria-label={`Go to Page ${pageCount}`}
       >
         {pageCount}
       </button>,
     );
   }

   // Next button
   buttons.push(
     <button
       key="next"
       className={`h-8 w-8 rounded-full ${currentPage === pageCount - 1 ? "cursor-not-allowed text-gray-400" : "bg-gray-200 text-gray-600 hover:bg-blue-100"}`}
       onClick={() => currentPage < pageCount - 1 && goToPage(currentPage + 1)}
       disabled={currentPage === pageCount - 1}
       aria-label="Next Page"
     >
       {">"}
     </button>,
   );

   return <div className="flex items-center space-x-1">{buttons}</div>;
 };



  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-center space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>

          {/* Render custom page navigation */}
          {/* {renderPageButtons()} */}
          <div className="flex items-center gap-2">
            <button
              className="rounded border p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="w-16 rounded border p-1"
              />
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
