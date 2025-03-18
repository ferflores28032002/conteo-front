"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

interface NoTasksMessageProps {
  message?: string;
}

const NoTasksMessage: React.FC<NoTasksMessageProps> = ({
  message = "No hay tareas disponibles por el momento. ¿Por qué no agregas una tarea nueva? 😊",
}) => {
  return (
    <div className="flex flex-col mt-5 justify-center items-center gap-3">
      <p className="text-center  text-lg font-semibold text-gray-500">
        {message}
      </p>
      <Link href="/tasks" className={buttonVariants()}>
        Crear una tarea
      </Link>
    </div>
  );
};

export default NoTasksMessage;
