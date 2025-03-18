import React, { useEffect } from "react";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  ProductFormFields,
  ProductFormInputs,
} from "./components/ProductFormFields";

interface ProductFormDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: SubmitHandler<ProductFormInputs>;
  initialValues?: Partial<ProductFormInputs>;
  isEditing?: boolean;
  errorMessage?: string | null;
  isLoading?: boolean;
}

const ProductFormDialog: React.FC<ProductFormDialogProps> = (props) => {
  const {
    isOpen,
    onOpenChange,
    onSubmit,
    initialValues,
    errorMessage,
    isEditing = false,
    isLoading,
  } = props;

  const methods = useForm<ProductFormInputs>();

  useEffect(() => {
    if (initialValues) {
      methods.reset(initialValues);
    } else if (!isOpen) {
      methods.reset();
    }
  }, [initialValues, methods, isOpen]);

  const handleFormSubmit: SubmitHandler<ProductFormInputs> = (data) => {
    onSubmit(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] sm:max-h-[90vh] overflow-y-auto w-full  rounded-lg">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Producto" : "Agregar Nuevo Producto"} <br />
            {errorMessage && (
              <span className="mt-2 text-sm text-red-500 font-medium">
                {errorMessage}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <ProductFormFields initialValues={initialValues} />
            {errorMessage && (
              <span className="mt-2 text-sm text-red-500 font-medium">
                {errorMessage}
              </span>
            )}
            <DialogFooter>
              <Button
                variant="destructive"
                type="button"
                className="sm:mt-0 mt-2"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" isLoading={isLoading}>
                {isEditing ? "Actualizar Producto" : "Agregar Producto"}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormDialog;
