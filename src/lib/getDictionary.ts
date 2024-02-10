import 'server-only';
import type { Locale } from '../i18n-config';

export const getDictionary = async (locale: Locale, files: string[]) => {
  const myDictionaries = {
    // get the files for the selected locale
    [locale]: (file: string) =>
      import(`../dictionaries/${locale}/${file}.json`).then(
        (module) => module.default,
      ),
  };
  const dictionaryPromises = files.map(async (file) => ({
    [file]: await myDictionaries[locale]?.(file),
  }));
  const dictionaries = await Promise.all(dictionaryPromises);
  return Object.assign({}, ...dictionaries);
};
