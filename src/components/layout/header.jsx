import { MainNav } from "@/components/layout/main-nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { mainNav, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-8 lg:top-7">
      <div className="relative mx-auto flex max-w-site items-center justify-between gap-6 rounded-card bg-surface/94 py-2.5 pr-3 pl-5 shadow-header backdrop-blur-header lg:pl-7.5">
        <Logo preload />
        <MainNav items={mainNav} className="hidden lg:flex" />
        <Button href={siteConfig.contactHref} className="hidden lg:inline-flex">
          Fale conosco
        </Button>
        <MobileMenu items={mainNav} ctaHref={siteConfig.contactHref} ctaLabel="Fale conosco" className="lg:hidden" />
      </div>
    </header>
  );
}
