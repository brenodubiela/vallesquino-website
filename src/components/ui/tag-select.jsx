"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { fieldControlClasses } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export function TagSelect({
  id,
  options,
  value,
  onChange,
  onBlur,
  placeholder = "Selecione...",
  invalid = false,
  describedBy,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const listId = useId();
  const optionId = (index) => `${listId}-opcao-${index}`;

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  const open = () => {
    setActiveIndex(Math.max(options.indexOf(value), 0));
    setIsOpen(true);
  };

  const select = (option) => {
    onChange(option);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const clear = () => {
    onChange("");
    triggerRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    const last = options.length - 1;
    if (!isOpen && ["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      open();
      return;
    }
    if (!isOpen) {
      if ((event.key === "Backspace" || event.key === "Delete") && value) clear();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, last));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(last);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (activeIndex >= 0) select(options[activeIndex]);
    } else if (event.key === "Escape" || event.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div
        className={cn(
          fieldControlClasses,
          "flex min-h-10.75 items-center gap-2 focus-within:border-primary focus-within:shadow-focus-ring",
          invalid && "border-danger",
        )}
      >
        {value && (
          <span className="inline-flex max-w-[85%] shrink-0 items-center gap-1 rounded-tag border border-tag-border bg-surface p-1 font-sans text-tag text-tag-text">
            <span className="truncate">{value}</span>
            <button
              type="button"
              onClick={clear}
              aria-label={`Remover seleção: ${value}`}
              className="inline-flex size-3 shrink-0 items-center justify-center rounded-pill text-tag-text hover:text-ink focus-visible:shadow-focus-ring focus-visible:outline-none"
            >
              <X aria-hidden="true" className="size-3" />
            </button>
          </span>
        )}
        <button
          ref={triggerRef}
          id={id}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listId}
          aria-labelledby={`${id}-rotulo`}
          aria-activedescendant={isOpen && activeIndex >= 0 ? optionId(activeIndex) : undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onClick={() => (isOpen ? setIsOpen(false) : open())}
          onKeyDown={handleKeyDown}
          onBlur={onBlur}
          className="flex min-w-0 flex-1 items-center justify-between self-stretch text-left focus:outline-none"
        >
          <span className={cn("truncate", value ? "sr-only" : "text-field-placeholder")}>{value || placeholder}</span>
          <span className="ml-auto flex shrink-0 items-center pl-4">
            <ChevronsUpDown aria-hidden="true" className="size-4 text-field-placeholder" />
          </span>
        </button>
      </div>

      <ul
        id={listId}
        role="listbox"
        aria-labelledby={`${id}-rotulo`}
        hidden={!isOpen}
        data-lenis-prevent=""
        className="absolute inset-x-0 top-full z-30 mt-2 max-h-72 overflow-y-auto rounded-card border border-field-border bg-surface p-1 shadow-header"
      >
        {options.map((option, index) => {
          const isSelected = option === value;
          return (
            <li
              key={option}
              id={optionId(index)}
              role="option"
              aria-selected={isSelected}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => select(option)}
              onMouseEnter={() => setActiveIndex(index)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-3 rounded-tag px-3 py-2 font-sans text-field text-ink",
                index === activeIndex && "bg-primary/15",
                isSelected && "font-medium",
              )}
            >
              {option}
              {isSelected && <Check aria-hidden="true" className="size-4 shrink-0 text-primary" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
