import { Fragment } from "react";
import { cn } from "@/utils/cn";

const headingTones = {
  light: "text-ink",
  dark: "text-on-dark",
};

const leadTones = {
  light: "text-ink",
  dark: "text-on-dark/92",
};

const aligns = {
  left: "text-left",
  center: "text-center mx-auto",
};

export function Heading({ as: Tag = "h2", tone = "light", align = "left", className, children, ...props }) {
  return (
    <Tag className={cn("font-display text-display", headingTones[tone], aligns[align], className)} {...props}>
      {children}
    </Tag>
  );
}

export function Accent({ className, children }) {
  return <span className={cn("text-primary", className)}>{children}</span>;
}

export function Segments({ segments }) {
  return segments.map((segment, index) =>
    segment.accent ? (
      <Accent key={index}>{segment.text}</Accent>
    ) : (
      <Fragment key={index}>{segment.text}</Fragment>
    ),
  );
}

export function Lead({ as: Tag = "p", tone = "light", align = "left", className, children, ...props }) {
  return (
    <Tag className={cn("font-sans text-lead", leadTones[tone], aligns[align], className)} {...props}>
      {children}
    </Tag>
  );
}
