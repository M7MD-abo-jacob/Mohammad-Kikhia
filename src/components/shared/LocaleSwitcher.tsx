'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale } from '../../i18n-config';
import Image from 'next/image';
import { languages } from '@/data/variables';
import ToggleMenu from './ToggleMenu';
import { FaCaretDown } from 'react-icons/fa';

export default function LocaleSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();
  const setLanguage = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ToggleMenu
      toggleButton={(toggleOpen) => (
        <>
          <button className="lang-button" onClick={toggleOpen}>
            <Image
              src={languages.find((language) => language.locale === lang)!.icon}
              width={16}
              height={12}
              alt={lang}
            />
            <FaCaretDown />
          </button>
        </>
      )}>
      {({ close }) => (
        <div className="lang-menu">
          {languages.map((lng) => (
            <Link
              className={lang === lng.locale ? 'active' : ''}
              key={lng.locale}
              href={redirectedPathName(lng.locale)}
              onClick={() => {
                setLanguage(lng.locale);
              }}>
              <Image src={lng.icon} width={16} height={12} alt={lng.locale} />
              {lng.title}
            </Link>
          ))}
        </div>
      )}
    </ToggleMenu>
  );
}
