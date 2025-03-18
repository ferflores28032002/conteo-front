import { ColumnDef } from "@tanstack/react-table";

import TaskRowActions from "@/components/TaskRowActions";
import { Product } from "@/services/products/ListProductService";
import Image from "next/image";

export const ProductsColumn: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;
      return (
        <div className="w-[40px] h-[40px] flex justify-center items-center overflow-hidden rounded-md">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Producto"
              width={40}
              height={40}
              className="object-cover rounded-md w-full h-full"
            />
          ) : (
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-gray-200 rounded-md">
              <span className="text-gray-500">Sin Imagen</span>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "code",
    header: "Código",
    cell: ({ row }) => <div className="capitalize">{row.getValue("code")}</div>,
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Descripción",
    cell: ({ row }) => (
      <div
        className="truncate max-w-[200px]"
        title={row.getValue("description")}
      >
        {row.getValue("description")}
      </div>
    ),
  },

  {
    accessorKey: "creator.name",
    header: "Creador",
    cell: ({ row }) => {
      const creator = row.original.creator?.name || "N/A";
      return (
        <div className="truncate max-w-[150px]" title={creator}>
          {creator}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de Creación",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("createdAt")).toLocaleDateString()}</div>
    ),
  },
  {
    id: "Opciones",
    enableHiding: false,
    cell: ({ row }) => <TaskRowActions row={row} />,
  },
];
