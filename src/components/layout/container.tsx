import { cn } from "@/lib/utils";

/**
 * A simple centered, max-width wrapper with responsive padding.
 * Reuse it to keep page content aligned consistently.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
