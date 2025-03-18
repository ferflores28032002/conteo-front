import React, { useRef, useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import NameInput from "@/components/NameInput";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type ProductFormInputs = {
  code: number;
  name: string;
  description: string;
  image: File | null;
  quantity: number;
};

interface ProductFormFieldsProps {
  initialValues?: Partial<ProductFormInputs>;
}

export const ProductFormFields: React.FC<ProductFormFieldsProps> = ({
  initialValues = {},
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<ProductFormInputs>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initialValues.image) {
      if (typeof initialValues.image === "string") {
        setImagePreview(initialValues.image); // Usar directamente la URL
      } else {
        setImagePreview(URL.createObjectURL(initialValues.image)); // Si es un archivo
      }
    }
  }, [initialValues.image]);

  useEffect(() => {
    Object.entries(initialValues).forEach(([key, value]) => {
      if (value !== undefined) {
        setValue(key as keyof ProductFormInputs, value);
      }
    });
  }, [initialValues, setValue]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      setImagePreview(null);
      setValue("image", null, { shouldValidate: true });
      return;
    }

    const file = files[0];
    const validTypes = ["image/png", "image/jpeg"];

    if (!validTypes.includes(file.type)) {
      alert("Solo se permiten archivos PNG o JPG.");
      return;
    }

    setValue("image", file, { shouldValidate: true });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="mb-6">
        <Label htmlFor="code">Código</Label>
        <Input
          {...register("code", {
            required: "El código es requerido",
            valueAsNumber: true,
          })}
          type="number"
          defaultValue={initialValues.code || ""}
          className={cn({ "focus-visible:ring-red-500": !!errors.code })}
          placeholder="Código"
        />
        {errors.code && (
          <p className="text-sm text-red-500">{errors.code.message}</p>
        )}
      </div>

      <div className="mb-6">
        <NameInput
          name="name"
          register={register}
          error={errors.name?.message}
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="description">Descripción</Label>
        <textarea
          {...register("description", {
            required: "La descripción es requerida",
          })}
          defaultValue={initialValues.description || ""}
          className="w-full p-2 border rounded-md"
          placeholder="Descripción"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="image">Imagen</Label>
        <div
          className="w-32 h-32 border-dashed border-2 border-gray-400 flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Vista previa"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-500">Haz clic para subir</span>
          )}
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        {errors.image && (
          <p className="text-sm text-red-500">{errors.image.message}</p>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="quantity">Cantidad</Label>
        <Input
          {...register("quantity", {
            required: "La cantidad es requerida",
            valueAsNumber: true,
            min: { value: 1, message: "Debe ser al menos 1" },
          })}
          type="number"
          defaultValue={initialValues.quantity || ""}
          className={cn({ "focus-visible:ring-red-500": !!errors.quantity })}
          placeholder="Cantidad"
        />
        {errors.quantity && (
          <p className="text-sm text-red-500">{errors.quantity.message}</p>
        )}
      </div>
    </>
  );
};
