import React, { useEffect, useRef, useState } from "react";

import { useFormContext } from "react-hook-form";

import NameInput from "@/components/NameInput";
import ImageLabel from "../ImageLabel";
import ImagePreview from "../ImagePreview";
import DescriptionTextarea from "@/components/DescriptionTextarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    formState: { errors },
  } = useFormContext<ProductFormInputs>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initialValues.image) {
      if (typeof initialValues.image === "string") {
        setImagePreview(initialValues.image);
      } else {
        setImagePreview(URL.createObjectURL(initialValues.image));
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
        <DescriptionTextarea
          name="description"
          register={register}
          error={errors.description?.message}
        />
      </div>

      <div className="mb-6">
        <ImageLabel htmlFor="image" />
        <ImagePreview handleClick={handleClick} imagePreview={imagePreview} />
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
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
