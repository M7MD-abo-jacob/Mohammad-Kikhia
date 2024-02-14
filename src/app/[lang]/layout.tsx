import { ReactNode } from 'react';
import { Lemonada } from 'next/font/google';
import { i18nConfig, type Locale } from '@/i18n-config';
import { rtlLanguages } from '@/data/variables';
import { getDictionary } from '@/lib/getDictionary';
import Navbar from '@/components/sections/header/Navbar';
import Footer from '@/components/sections/footer/Footer';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import Providers from './providers';

import '../styles/globals.css';
import 'aos/dist/aos.css';

const lemonada = Lemonada({
  subsets: ['latin', 'arabic'],
  variable: '--lemonada',
  weight: ['400', '500', '600', '700'],
  // display: 'swap',
});

export async function generateStaticParams() {
  const params = await Promise.all(
    i18nConfig.locales.map(async (locale) => {
      const dictionary = await getDictionary(locale, ['home']);
      return { lang: locale, dictionary };
    }),
  );
  return params;
}

interface RootLayoutProps {
  params: { lang: Locale };
  children: ReactNode;
  hero: ReactNode;
  about: ReactNode;
  skills: ReactNode;
  projects: ReactNode;
  contact: ReactNode;
}

async function Root({
  children,
  params,
  about,
  skills,
  projects,
  contact,
}: RootLayoutProps) {
  const dictionary = await getDictionary(params.lang, ['home']);
  if (!dictionary.home) {
    return null;
  }
  return (
    <html
      className={`${lemonada.className} ${lemonada.variable}`}
      lang={params.lang}
      dir={rtlLanguages.includes(params.lang) ? 'rtl' : 'ltr'}>
      <body>
        <Providers dictionary={dictionary}>
          <Navbar
            lang={params.lang}
            t={{
              header: dictionary.home.header,
              nav: dictionary.home.common.nav,
            }}
          />
          <main>
            {children}
            {about}
            {skills}
            {projects}
            {contact}
            <ScrollToTopButton />
          </main>
          <Footer
            lang={params.lang}
            t={{
              footer: dictionary.home.footer,
              nav: dictionary.home.common.nav,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}

export default Root;
