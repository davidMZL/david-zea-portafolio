import { computed, ref, watchEffect } from "vue";
import { es, type Messages } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";
/** Texto con una versión por idioma (para contenido que vive fuera de los diccionarios). */
export type Localized = Record<Locale, string>;

const dictionaries: Record<Locale, Messages> = { es, en };
const STORAGE_KEY = "locale";

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage puede no estar disponible (modo privado, bloqueado)
  }
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

const locale = ref<Locale>(detectLocale());
const t = computed(() => dictionaries[locale.value]);

watchEffect(() => {
  document.documentElement.lang = locale.value;
  try {
    localStorage.setItem(STORAGE_KEY, locale.value);
  } catch {
    // sin persistencia: el idioma se vuelve a detectar en la próxima visita
  }
});

function toggleLocale(): void {
  locale.value = locale.value === "es" ? "en" : "es";
}

/** Resuelve un texto `Localized` al idioma actual. */
function tr(text: Localized): string {
  return text[locale.value];
}

export function useI18n() {
  return { locale, t, tr, toggleLocale };
}
