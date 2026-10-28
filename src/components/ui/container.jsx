import { cn } from "@/utils/cn";

export function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cn("mx-auto box-content max-w-site px-4 sm:px-8", className)} {...props}>
      {children}
    </Tag>
  );
}
