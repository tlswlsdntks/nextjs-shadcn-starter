import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
}

export function Button({ className }: ButtonProps) {
  return (
    <div className={cn("", className)}>
    </div>
  );
}
