"use client";

import { useRef } from "react";
import { Calendar } from "lucide-react";
import { fieldControlClasses } from "@/components/ui/input";
import { cn } from "@/utils/cn";

const formatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });

function toLocalInputValue(date) {
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function DateTimeField({
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "Selecione....",
  invalid = false,
  describedBy,
  className,
}) {
  const inputRef = useRef(null);

  const openPicker = () => {
    const input = inputRef.current;
    if (!input) return;
    input.min = toLocalInputValue(new Date());
    try {
      input.showPicker();
    } catch {
      input.focus();
    }
  };

  return (
    <div
      className={cn(
        fieldControlClasses,
        "relative flex h-11 items-center p-0 focus-within:border-primary focus-within:shadow-focus-ring",
        invalid && "border-danger",
        className,
      )}
    >
      <button
        id={id}
        type="button"
        onClick={openPicker}
        onBlur={onBlur}
        aria-describedby={describedBy}
        className="flex h-full w-full items-center gap-2 rounded-card pr-2 pl-3 text-left focus:outline-none"
      >
        <span className="flex shrink-0 items-center pr-2">
          <Calendar aria-hidden="true" className="size-4 text-field-placeholder" />
        </span>
        <span className={cn("truncate", value ? "text-ink" : "text-field-placeholder")}>
          {value ? formatter.format(new Date(value)) : placeholder}
        </span>
      </button>
      <input
        ref={inputRef}
        type="datetime-local"
        name={name}
        step={1800}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
    </div>
  );
}
