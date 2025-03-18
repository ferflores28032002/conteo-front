import React from "react";
import { Label } from "@/components/ui/label";

interface ImageLabelProps {
  htmlFor: string;
}

const ImageLabel: React.FC<ImageLabelProps> = ({ htmlFor }) => {
  return (
    <Label htmlFor={htmlFor} className="text-base font-medium">
      Imagen {""} {""}
      <span className="text-sm text-gray-500">
        (Formato: PNG o JPG) {" "}
        <span className="text-red-500">*</span>
      </span>
    </Label>
  );
};

export default ImageLabel;