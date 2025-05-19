export interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

// interfaces/index.ts

// Placeholder interface for CardProps
export interface CardProps {
  // TODO: Add actual properties like title, image, price, etc.
  // Example:
  // title: string;
  // imageUrl: string;
  // price: number;
}

// Placeholder interface for ButtonProps
export interface ButtonProps {
  // TODO: Define props such as label, onClick handler, and styling
  // Example:
  // label: string;
  // onClick: () => void;
  // variant?: 'primary' | 'secondary';
}
