export const CONSENT_KEY = "vallesquino_cookie_consent";
const CONSENT_VERSION = 1;
const CONSENT_EVENT = "vallesquino:consent-change";
const OPEN_PREFERENCES_EVENT = "vallesquino:open-cookie-preferences";

export function getConsentSnapshot() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) ?? "";
  } catch {
    return "";
  }
}

export function parseConsent(raw) {
  if (!raw) return null;
  try {
    const consent = JSON.parse(raw);
    return consent?.version === CONSENT_VERSION ? consent : null;
  } catch {
    return null;
  }
}

export function readConsent() {
  return parseConsent(getConsentSnapshot());
}

export function hasConsent(category) {
  return Boolean(readConsent()?.[category]);
}

export function saveConsent({ analytics, marketing }) {
  const consent = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: Boolean(analytics),
    marketing: Boolean(marketing),
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {}
  window.dispatchEvent(new Event(CONSENT_EVENT));
  return consent;
}

export function subscribeConsent(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

export function onOpenCookiePreferences(callback) {
  window.addEventListener(OPEN_PREFERENCES_EVENT, callback);
  return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, callback);
}
