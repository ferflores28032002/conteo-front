/**
 * Validation rules for password fields in forms.
 * Includes required validation, minimum length, and regex for complexity.
 */
export const passwordValidationRules = {
    /**
     * Ensures the password field is not left empty.
     */
    required: "La contraseña es requerida",
  
    /**
     * Validates the password against a regex pattern to ensure complexity.
     * The password must have at least 8 characters, one uppercase letter, and one number.
     */
    pattern: {
      value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número",
    },
  };
  

  /**
 * Simple validation rules for password fields.
 * Only ensures the password field is not left empty.
 */
export const requiredPasswordValidationRules = {
  /**
   * Ensures the password field is not left empty.
   */
  required: "La contraseña es requerida",
};