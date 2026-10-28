import Image from "next/image";
import { cn } from "@/utils/cn";

const networks = {
  whatsapp: { label: "WhatsApp", size: 18 },
  facebook: { label: "Facebook", size: 22 },
  instagram: { label: "Instagram", size: 20 },
};

export function SocialLink({ network, href, className }) {
  const { label, size } = networks[network];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Vallesquino Health no ${label}`}
      className={cn(
        "inline-flex size-9.5 items-center justify-center rounded-pill bg-primary/10 transition-colors duration-200 hover:bg-primary/20 focus-visible:shadow-focus-ring focus-visible:outline-none",
        className,
      )}
    >
      <Image src={`/icons/${network}.svg`} alt="" width={size} height={size} />
    </a>
  );
}
