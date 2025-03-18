import { UseFormRegister, FieldValues, Path } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

interface NameInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: string;
  name: Path<T>;
}
/**
 * Reusable NameInput component for rendering a name input field
 * with integrated validation and error display.
 *
 * @template T Field values for the form (ensures strong typing for form inputs).
 * @param {UseFormRegister<T>} register - The register function for the form.
 * @param {string | undefined} error - Error message to display if validation fails.
 * @param {Path<T>} name - The name of the field to register.
 * @returns {JSX.Element} The rendered name input field.
 */
const NameInput = <T extends FieldValues>(props: NameInputProps<T>): JSX.Element => {
    const { register, error, name } = props
  return (
    <div className="grid gap-1 py-2">
      <Label htmlFor={name}>Nombre</Label>
      <Input
        {...register(name, {required: "El nombre es requerido"})}
        type="text"
        className={cn({"focus-visible:ring-red-500": !!error})}
        placeholder="Nombre"
        autoComplete="name"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default NameInput;
