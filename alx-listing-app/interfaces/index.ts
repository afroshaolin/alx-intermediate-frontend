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
