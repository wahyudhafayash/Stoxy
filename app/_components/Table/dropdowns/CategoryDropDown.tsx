"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { LuGitPullRequestDraft } from "react-icons/lu";
import { Checkbox } from "@/components/ui/checkbox";

import { Separator } from "@/components/ui/separator";

type Category = {
  value: string;
  label: string;
};

type CategoriesDropDownProps = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const categories: Category[] = [
  { value: "electronics", label: "Electronics" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "books", label: "Books" },
  { value: "toys", label: "Toys" },
  { value: "beauty", label: "Beauty" },
  { value: "sports", label: "Sports" },
  { value: "home-decor", label: "Home Decor" },
  { value: "home-appliances", label: "Home Appliances" },
  { value: "others", label: "Others" },
];

// Converted to rafce (React Arrow Function Component Export)
const CategoriesDropDown: React.FC<CategoriesDropDownProps> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCheckboxChange = (value: string) => {
    setSelectedCategories((prev) => {
      const updatedCategories = prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value];
      return updatedCategories;
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            className="h-10"
            aria-label="Select Categories"
          >
            <LuGitPullRequestDraft />
            Categories
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-56 poppins" side="bottom" align="end">
          <Command className="p-1">
            <CommandInput placeholder="Search Category" />
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No category found.
              </CommandEmpty>
              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem className="h-9" key={category.value}>
                    <Checkbox
                      checked={selectedCategories.includes(category.value)}
                      onChange={() => handleCheckboxChange(category.value)}
                      className="size-4 rounded-[4px]"
                      aria-label={`Select ${category.label}`}
                    />
                    <div className="flex items-center gap-1 p-1 rounded-lg px-3 text-[14px]">
                      {category.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                onClick={clearFilters}
                variant="ghost"
                className="text-[12px] mb-1"
              >
                Clear Filters
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CategoriesDropDown;
