import { UseFormRegister, FieldValues, Path } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface DescriptionTextareaProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: string;
  name: Path<T>;
}
/**
 * Reusable DescriptionTextarea component for rendering a textarea field
 * with integrated validation and error display.
 *
 * @template T Field values for the form (ensures strong typing for form inputs).
 * @param {UseFormRegister<T>} register - The register function for the form.
 * @param {string | undefined} error - Error message to display if validation fails.
 * @param {Path<T>} name - The name of the field to register.
 * @returns {JSX.Element} The rendered textarea field.
 */
const DescriptionTextarea = <T extends FieldValues>(props: DescriptionTextareaProps<T>): JSX.Element => {
  const { register, error, name } = props;

  return (
    <div className="grid gap-1 py-2">
      <Label htmlFor={name}>Descripción</Label>
      <Textarea
        {...register(name, { required: "La descripción es obligatoria" })}
        title="Descripción"
        placeholder="Ingresa la descripción de la tarea"
        className={cn({ "focus-visible:ring-red-500": !!error })}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default DescriptionTextarea;
