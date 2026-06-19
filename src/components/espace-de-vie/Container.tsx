import { ElementType, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export default function Container({ className = "", children, as: Tag = "div" }: ContainerProps) {
  return <Tag className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</Tag>;
}
