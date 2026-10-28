import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/ui/check-list";
import { cn } from "@/utils/cn";

export function ServiceCard({
  image,
  imageAlt,
  imageSizes = "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw",
  imageClassName,
  title,
  titleAs: Title = "h3",
  description,
  items = [],
  cta = { label: "Quero saber mais" },
  id,
  className,
}) {
  return (
    <article id={id} className={cn("flex scroll-mt-32 flex-col items-start gap-8 rounded-card bg-surface-muted p-4", className)}>
      <div className="relative h-47 w-full overflow-hidden rounded-card">
        <Image src={image} alt={imageAlt} fill sizes={imageSizes} className={cn("object-cover", imageClassName)} />
      </div>
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Title className="font-display text-title text-olive">{title}</Title>
          <p className="font-sans text-body text-ink">{description}</p>
        </div>
        {items.length > 0 && <CheckList items={items} />}
      </div>
      <Button href={cta.href}>{cta.label}</Button>
    </article>
  );
}
