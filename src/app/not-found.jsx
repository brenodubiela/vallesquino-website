import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { Logo } from "@/components/ui/logo";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-canvas px-4 py-section">
      <div className="flex max-w-195 flex-col items-center gap-6 text-center">
        <Logo />
        <Eyebrow>Erro 404</Eyebrow>
        <Heading as="h1" align="center">
          Esta página <Accent>não foi encontrada</Accent>
        </Heading>
        <Lead align="center">
          O endereço pode ter mudado ou não existir mais. Volte para o início e continue navegando.
        </Lead>
        <Button href="/">Voltar para o início</Button>
      </div>
    </main>
  );
}
