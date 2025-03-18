import { useState } from "react";
import Swal from "sweetalert2";

import { Button } from "@/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { useDeleteProduct } from "@/hooks/products/useDeleteProduct";
import { useEditProduct } from "@/hooks/products/useEditProduct";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import TaskFormDialog from "../TaskFormDialog";
import { ProductFormInputs } from "../TaskFormDialog/components/TaskFormFields";
import TaskDetailModal from "./components/TaskDetailModal";

const TaskRowActions = ({ row }: any) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  const deleteTask = useDeleteProduct();
  const updateTask = useEditProduct();

  const handleEditSubmit = (formData: ProductFormInputs) => {
    const payload = {
      ...formData,
      id: row.original.id,
    };

    updateTask.mutate(
      { id: row.original.id, payload },
      {
        onSuccess: () => {
          setIsDialogOpen(false);
          setErrorMessage(null);
        },
        onError: (error) => {
        },
      }
    );
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, ¡elimínalo!",
      cancelButtonText: "No, ¡cancelar!",
      confirmButtonColor: "red",
      cancelButtonColor: "#2563EB",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask.mutate(row.original.id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "Tu tarea ha sido eliminada.",
          icon: "success",
          confirmButtonColor: "#2563EB",
        });
      }
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">
              Opciones de la tarea {row.original.title}
            </span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Opciones</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete}>Eliminar</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDetailModalOpen(true)}>
            Ver Detalle
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <TaskFormDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleEditSubmit}
        errorMessage={errorMessage}
        initialValues={{
          code: row.original.code,
          name: row.original.name,
          description: row.original.description,
          image: row.original.image,
          
        }}
        isEditing={true}
      />
      <TaskDetailModal
        task={row.original}
        isOpen={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
      />
    </>
  );
};

export default TaskRowActions;
