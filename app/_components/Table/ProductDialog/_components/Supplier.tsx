import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";

const Supplier = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="supplier" className="text-slate-600">
        Supplier's Name
      </Label>
      <Input
        {...register("supplier", { required: "Supplier name is required" })}
        type="text"
        id="supplier"
        className="h-11 shadow-none"
        placeholder="TechWorld..."
      />
      {errors.supplier && (
        <div className="text-red-500 flex gap-1 items-center text-[13px]">
          <MdError />
          <p>
            <>{errors.supplier.message}</>
          </p>
        </div>
      )}
    </div>
  );
};

export default Supplier;
