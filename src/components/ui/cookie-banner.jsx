"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Switch } from "@/components/ui/switch";
import {
  getConsentSnapshot,
  onOpenCookiePreferences,
  parseConsent,
  readConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";
import { cn } from "@/utils/cn";

const categories = [
  {
    key: "necessary",
    label: "Necessários",
    description: "Garantem o funcionamento do site e guardam a sua escolha sobre cookies. Sempre ativos.",
  },
  {
    key: "analytics",
    label: "Desempenho e análise",
    description: "Ajudam a entender, de forma agregada, como o site é utilizado para melhorá-lo.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Permitem medir campanhas e exibir comunicações mais relevantes em outros canais.",
  },
];

export function CookieBannerPanel({
  titleId,
  showPreferences,
  preferences,
  onPreferencesChange,
  onConfigure,
  onAcceptAll,
  onRejectOptional,
  onSave,
  className,
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-195 flex-col gap-2">
          <p id={titleId} className="font-display text-title text-on-dark">
            Sua privacidade é importante
          </p>
          <p className="font-sans text-body-sm text-on-dark/92">
            Utilizamos cookies e o armazenamento local do navegador para garantir o funcionamento do site e, com a sua
            autorização, entender como ele é utilizado. Saiba mais na{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        {!showPreferences && (
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button variant="outline" onClick={onConfigure} aria-expanded={false}>
              Configurar
            </Button>
            <Button onClick={onAcceptAll}>Aceitar todos</Button>
          </div>
        )}
      </div>

      {showPreferences && (
        <div className="flex flex-col gap-6 border-t border-border-on-dark pt-6">
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Switch
                key={category.key}
                id={`${titleId}-${category.key}`}
                label={category.label}
                description={category.description}
                checked={category.key === "necessary" ? true : preferences[category.key]}
                disabled={category.key === "necessary"}
                onChange={(checked) => onPreferencesChange({ ...preferences, [category.key]: checked })}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <Button variant="ghost" onClick={onRejectOptional}>
              Rejeitar opcionais
            </Button>
            <Button variant="outline" onClick={onSave}>
              Salvar preferências
            </Button>
            <Button onClick={onAcceptAll}>Aceitar todos</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function CookieBanner() {
  const raw = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => null);
  const [isReopened, setIsReopened] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });
  const [isClosing, setIsClosing] = useState(false);
  const titleId = useId();

  useEffect(
    () =>
      onOpenCookiePreferences(() => {
        const current = readConsent();
        setPreferences({ analytics: Boolean(current?.analytics), marketing: Boolean(current?.marketing) });
        setShowPreferences(true);
        setIsReopened(true);
      }),
    [],
  );

  const isVisible = raw !== null && (parseConsent(raw) === null || isReopened);

  const decide = (choice) => {
    setIsClosing(true);
    window.setTimeout(() => {
      saveConsent(choice);
      setIsReopened(false);
      setShowPreferences(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      data-lenis-prevent=""
      className={cn(
        "cookie-banner fixed inset-x-0 bottom-0 z-50 max-h-svh w-full overflow-y-auto border-t border-border-on-dark bg-surface-dark py-6 shadow-header transition-[translate,opacity] duration-300",
        isClosing && "translate-y-full opacity-0",
      )}
    >
      <Container>
        <CookieBannerPanel
          titleId={titleId}
          showPreferences={showPreferences}
          preferences={preferences}
          onPreferencesChange={setPreferences}
          onConfigure={() => setShowPreferences(true)}
          onAcceptAll={() => decide({ analytics: true, marketing: true })}
          onRejectOptional={() => decide({ analytics: false, marketing: false })}
          onSave={() => decide(preferences)}
        />
      </Container>
    </div>
  );
}
