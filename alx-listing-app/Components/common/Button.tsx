import React from 'react';
import { ButtonProps } from '@/interfaces';

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  const baseClass = "rounded px-4 py-2 font-semibold transition";
  const variantClass =
    variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" :
    "bg-gray-300 text-black hover:bg-gray-400";

  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass}`}>
      {text}
    </button>
  );
};
