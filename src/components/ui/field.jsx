import { cn } from "@/utils/cn";

export function Field({ id, label, required = false, error, className, children }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} id={`${id}-rotulo`} className="font-sans text-field font-medium text-field-label">
        {label}
        {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-erro`} role="alert" className="font-sans text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
