import { format } from "date-fns";
import { es } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Product } from "@/services/products/ListProductService";
import { CalendarIcon, MailIcon, UserIcon } from "lucide-react";

type TaskDetailModalProps = {
  task: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const TaskDetailModal = (props: TaskDetailModalProps) => {
  const { task, isOpen, onOpenChange } = props;
  if (!task) return null;

  const formatDate = (date: string) =>
    format(new Date(date), "PPP", { locale: es });

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {task.name}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500 dark:text-white">
              Descripción
            </h4>
            <p className="text-sm text-gray-700  dark:text-white">
              {task.description}
            </p>
          </div>

          <div className="w-32 h-32  flex items-center justify-center cursor-pointer">
            {task.image ? (
              <img
                src={task.image}
                alt="Vista previa"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-sm text-gray-500 dark:text-white">
                  Sin imagen
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500  dark:text-white">
              Creador
            </h4>
            <div className="flex items-center space-x-2">
              <UserIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700  dark:text-white">
                {task.creator.name}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700  dark:text-white">
                {task.creator.email}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500  dark:text-white">
              Fechas
            </h4>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-gray-400  dark:text-white" />
              <span className="text-sm text-gray-700  dark:text-white">
                Creado: {formatDate(task.createdAt)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-gray-400  dark:text-white" />
              <span className="text-sm text-gray-700  dark:text-white">
                Actualizado: {formatDate(task.updatedAt)}
              </span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;
