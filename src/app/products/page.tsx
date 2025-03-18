"use client";

import { useState } from "react";

import {
  Button,
  DataTable,
  FeatureMessage,
  Loading,
  MaxWidthWrapper,
} from "@/components/";

import TaskFormDialog from "@/components/TaskFormDialog";

import { ProductsColumn } from "@/helpers/Products/ProductsColumn";
import { useCreateProduct } from "@/hooks/products/useCreateProduct";
import { useListProducts } from "@/hooks/products/useListProducts";
import { useRedirectIfUnauthenticated } from "../../hooks/shared/useRedirectIfUnauthenticated";
import { ProductFormInputs } from "@/components/TaskFormDialog/components/TaskFormFields";

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isCheckingAuth = useRedirectIfUnauthenticated();

  const { data, isLoading } = useListProducts();
  const mutate = useCreateProduct();

  const handleAddTaskSubmit = (formData: ProductFormInputs) => {
    mutate.mutate(formData, {
      onSuccess: () => {
        setIsDialogOpen(false);
      },
      onError: (error) => {
        console.error("Error creating product:", error);
      },
    });
  };

  if (isLoading || isCheckingAuth) {
    return <Loading />;
  }

  return (
    <div>
      <MaxWidthWrapper>
        <FeatureMessage
          subtitle="Organiza a Tu Manera"
          description="Con Conteo, todo es posible. Gestiona tus productos de manera eficiente y sencilla."
          title="Almacena tus Productos"
        />
        <div className="mb-4 flex gap-1 justify-center md:justify-end">
          <Button
            onClick={() => setIsDialogOpen(true)}
            variant="default"
            className="dark:text-white"
          >
            Agregar Producto
          </Button>
        </div>

        <DataTable columns={ProductsColumn} data={data ? data : []} />

        <TaskFormDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={handleAddTaskSubmit}
          isEditing={false}
          errorMessage={errorMessage}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
