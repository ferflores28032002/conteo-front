import React, { useState } from "react";

import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { passwordValidationRules } from "@/helpers/validators/passwordValidator";

interface PasswordInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: string;
  name: Path<T>;
  validationRules?: RegisterOptions<T, Path<T>>;
}

/**
 * Reusable PasswordInput component for rendering a password input field
 * with integrated validation and error display.
 *
 * @template T Field values for the form (ensures strong typing for form inputs).
 * @param {UseFormRegister<T>} register - The register function for the form.
 * @param {string | undefined} error - Error message to display if validation fails.
 * @param {Path<T>} name - The name of the field to register.
 * @returns {JSX.Element} The rendered password input field.
 */

const PasswordInput = <T extends FieldValues>(props: PasswordInputProps<T>): JSX.Element => {
  const { register, error, name, validationRules = passwordValidationRules } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="grid gap-1 py-2">
      <Label htmlFor={name}>Contraseña</Label>
      <div className="relative">
        <Input
          {...register(name, validationRules)} 
          type={showPassword ? "text" : "password"}
          className={cn({ "focus-visible:ring-red-500": error })}
          placeholder="Contraseña"
          autoComplete="current-password"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5 text-gray-500" />
          ) : (
            <Eye className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;
