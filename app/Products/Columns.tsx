"use client";

import { Column, ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaInbox } from "react-icons/fa";
import ProductDropDown from "./ProductsDropDown";
import { ArrowUpDown } from "lucide-react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Product = {
  id: string;
  name: string;
  supplier: string;
  sku: string;
  category:
    | "Electronics"
    | "Furniture"
    | "Clothing"
    | "Books"
    | "Toys"
    | "Beauty"
    | "Sports"
    | "Home Decor"
    | "Home Appliances"
    | "Others";
  status: "Published" | "Inactive" | "Draft";
  quantityInStock: number;
  price: number;
  icon: ReactNode;
  createdAt: Date;
};

type SortableHeaderProps = {
  column: Column<Product, unknown>;
  label: string;
};

const SortableHeader: React.FC<SortableHeaderProps> = ({ column, label }) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted === "asc"
      ? IoMdArrowUp
      : isSorted === "desc"
      ? IoMdArrowDown
      : ArrowUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="" asChild>
        <div
          className={`flex items-start py-[14px] select-none cursor-pointer p-2 gap-1 ${
            isSorted ? "text-primary" : ""
          }`}
          aria-label={`Sort by ${label}`}
        >
          {label}
          <SortingIcon className=" h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom">
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <IoMdArrowUp className="mr-2 h-4 w-4" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <IoMdArrowDown className="mr-2 h-4 w-4" />
          Desc
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const Icon = row.original.icon; // Access the icon property for each row
      const name = row.original.name;
      return (
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-sm bg-primary/10 text-primary">
            {Icon}
          </div>
          <span>{name}</span>
        </div>
      );
    },
    header: ({ column }) => <SortableHeader column={column} label="Name" />,
  },
  {
    accessorKey: "sku",
    header: ({ column }) => <SortableHeader column={column} label="SKU" />,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <SortableHeader column={column} label="Created At" />
    ),
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return (
        <span>
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => <SortableHeader column={column} label="Price" />,
    cell: ({ getValue }) => `Rp. ${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    filterFn: "multiSelect",
    header: ({ column }) => <SortableHeader column={column} label="Category" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader column={column} label="Status" />,
    filterFn: "multiSelect",
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;
      let icon: ReactNode;

      // Apply color based on status
      switch (status) {
        case "Published":
          colorClass = "text-green-600 bg-green-100";
          icon = <FaCheck className="text-[12px]" />;
          break;
        case "Draft":
          colorClass = "text-gray-600 bg-gray-200";
          icon = <FaInbox />;
          break;
        case "Inactive":
          colorClass = "text-red-600 bg-red-100";
          icon = <IoClose />;
          break;
        default:
          colorClass = "text-gray-600 bg-gray-200";
          icon = <FaInbox />;
      }

      return (
        <span
          className={`px-3 py-[2px] rounded-full font-medium ${colorClass} flex gap-1 items-center w-fit`}
        >
          {icon}
          <span className="text-[13px]"> {status}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "quantityInStock",
    header: ({ column }) => (
      <SortableHeader column={column} label="Quantity In Stock" />
    ),
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => <SortableHeader column={column} label="Supplier" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <ProductDropDown row={row} />;
    },
  },
];
