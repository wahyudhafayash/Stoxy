import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdError } from "react-icons/md";
import { IconSelector } from "../IconSelector";
import { useFormContext } from "react-hook-form";
import { ReactNode } from "react";

interface ProductNameProps {
  onSelectedIcon: (selectedIcon: ReactNode) => void;
}

const ProductName = ({ onSelectedIcon }: ProductNameProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getSelectedIcon = (selectedIcon: ReactNode) => {
    onSelectedIcon(selectedIcon);
  };

  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="product-name" className="text-slate-600">
        Product's Name
      </Label>
      <div className="flex gap-2 items-center">
        <Input
          {...register("productName", { required: "Product name is required" })}
          type="text"
          id="product-name"
          className="h-11 shadow-none"
          placeholder="Laptop..."
        />
        <IconSelector onUpdateIcon={getSelectedIcon} />
      </div>

      {errors.productName && (
        <div className="text-red-500 flex gap-1 items-center text-[13px]">
          <MdError />
          <p>The product name is required</p>
        </div>
      )}
    </div>
  );
};

export default ProductName;
