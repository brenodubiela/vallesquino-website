import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

const variants = {
  dark: { src: "/brand/logo-dark.svg", width: 164, height: 33 },
  light: { src: "/brand/logo-light.svg", width: 209, height: 42 },
};

export function Logo({ variant = "dark", href = "/", preload = false, className }) {
  const { src, width, height } = variants[variant];
  const image = (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Vallesquino Health"
      preload={preload}
      className="h-auto max-w-full"
    />
  );

  if (!href) return <span className={cn("inline-flex", className)}>{image}</span>;

  return (
    <Link
      href={href}
      aria-label="Vallesquino Health — página inicial"
      className={cn("inline-flex rounded-card focus-visible:shadow-focus-ring focus-visible:outline-none", className)}
    >
      {image}
    </Link>
  );
}
