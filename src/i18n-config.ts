import { defaultLng, languages } from './data/variables';

const locales = languages.map((language) => language.locale);

export const i18nConfig = {
  locales: locales,
  defaultLocale: defaultLng,
  prefixDefault: false,
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
