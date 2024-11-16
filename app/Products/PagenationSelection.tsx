"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { PaginationType } from "./ProductTable";

interface PaginationSelectionProps {
  pagination: PaginationType;
  setPagination: Dispatch<SetStateAction<PaginationType>>;
}

const PaginationSelection: React.FC<PaginationSelectionProps> = ({
  pagination,
  setPagination,
}) => (
  <div className="flex items-center gap-3">
    <div className="text-gray-500 text-sm">Rows per page</div>
    <Select
      value={pagination.pageSize.toString()}
      onValueChange={(value) =>
        setPagination((prev) => ({
          ...prev,
          pageSize: Number(value),
        }))
      }
    >
      <SelectTrigger className="border rounded-md px-2 w-14">
        <SelectValue placeholder={pagination.pageSize.toString()} />
      </SelectTrigger>
      <SelectContent>
        {[4, 6, 8, 10, 15, 20, 30].map((size) => (
          <SelectItem key={size} value={size.toString()}>
            {size}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default PaginationSelection;
