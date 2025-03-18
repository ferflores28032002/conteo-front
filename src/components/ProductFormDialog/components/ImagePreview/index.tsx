import React from "react";

interface ImagePreviewProps {
  imagePreview: string | null;
  handleClick: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imagePreview, handleClick }) => {
  return (
    <div
      className="w-32 h-32 border-dashed border-2 mt-3 border-gray-400 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Vista previa"
          className="w-full h-full object-cover rounded-md"
        />
      ) : (
        <span className="text-gray-500 text-center">Haz clic para subir</span>
      )}
    </div>
  );
};

export default ImagePreview;
