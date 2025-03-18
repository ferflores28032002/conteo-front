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
} from "./components/TaskFormFields";

interface TaskFormDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: SubmitHandler<ProductFormInputs>;
  initialValues?: Partial<ProductFormInputs>;
  isEditing?: boolean;
  errorMessage?: string | null;
}

const TaskFormDialog: React.FC<TaskFormDialogProps> = (props) => {
  const {
    isOpen,
    onOpenChange,
    onSubmit,
    initialValues,
    errorMessage,
    isEditing = false,
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Tarea" : "Agregar Nueva Tarea"} <br />
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
            <DialogFooter>
              <Button
                variant="destructive"
                className="sm:mt-0 mt-2"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">
                {isEditing ? "Actualizar Tarea" : "Agregar Tarea"}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;
