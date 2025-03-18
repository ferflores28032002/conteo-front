/**
 * Validation rules for email fields in forms.
 * Includes required validation, email format, and prevention of disposable email addresses.
 */

export const emailValidationRules = {
    /**
     * Ensures the email field is not left empty.
     */
    required: "El correo electrónico es requerido",
  
    /**
     * Validates the email against a regex pattern to ensure proper format.
     */
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      message: "Formato de correo electrónico inválido",
    },
  
    /**
     * Validates that the email is not from a list of known disposable email domains.
     */
    validate: {
      notDisposable: (value: string) =>
        !/^(?=.*@(?:10minutemail\.com|guerrillamail\.com|mailinator\.com))/.test(
          value
        ) || "No se permiten correos electrónicos temporales",
    },
  };
  