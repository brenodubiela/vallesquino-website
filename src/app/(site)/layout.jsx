import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { CookieBanner } from "@/components/ui/cookie-banner";

export default function SiteLayout({ children }) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only rounded-card bg-primary px-4 py-3 font-sans text-button text-olive uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <CookieBanner />
      <SmoothScroll />
    </>
  );
}
