import React from 'react';
import { CardProps } from '@/interfaces';

export const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      {description && <p className="text-sm mt-1 text-gray-600">{description}</p>}
    </div>
  );
};
