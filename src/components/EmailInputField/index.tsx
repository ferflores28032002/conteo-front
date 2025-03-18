import { UseFormRegister, FieldValues, Path } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { emailValidationRules } from "@/helpers/validators/emailValidator";

import { cn } from "@/lib/utils";

interface EmailInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: string;
  name: Path<T>;
}
/**
 * Reusable EmailInput component for rendering an email input field
 * with integrated validation and error display.
 *
 * @template T Field values for the form (ensures strong typing for form inputs).
 * @param {UseFormRegister<T>} register - The register function for the form.
 * @param {string | undefined} error - Error message to display if validation fails.
 * @param {Path<T>} name - The name of the field to register.
 * @returns {JSX.Element} The rendered email input field.
 */
const EmailInput = <T extends FieldValues>(props: EmailInputProps<T>): JSX.Element => {
  const { register, error, name } = props;

  return (
    <div className="grid gap-1 py-2">
      <Label htmlFor="email">Correo electrónico</Label>
      <Input
        {...register(name, emailValidationRules)}
        className={cn({"focus-visible:ring-red-500": error})}
        placeholder="tucorreo@ejemplo.com"
        type="email"
        autoComplete="email"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default EmailInput;
