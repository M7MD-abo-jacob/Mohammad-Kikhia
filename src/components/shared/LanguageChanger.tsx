// 'use client';

// import { useRouter, usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/i18nConfig';
// import React, { ChangeEvent, FC, useEffect, useState } from 'react';

// const LanguageChanger: FC = () => {
//   const { i18n } = useTranslation();
//   const [currentLocale, setCurrentLocale] = useState('en');
//   useEffect(() => {
//     setCurrentLocale(i18n.language);
//   }, [i18n]);

//   const { push, refresh } = useRouter();
//   const pathname = usePathname();

//   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value;

//     // set cookie for next-i18n-router
//     document.cookie = `NEXT_LOCALE=${newLocale};path=/`;

//     // redirect to the new locale path
//     if (
//       currentLocale === i18nConfig.defaultLocale &&
//       !i18nConfig.prefixDefault
//     ) {
//       push('/' + newLocale + pathname);
//     } else {
//       push(pathname.replace(`/${currentLocale}`, `/${newLocale}`));
//     }

//     refresh();
//   };

//   return (
//     <select onChange={handleChange} value={currentLocale}>
//       <option value="en">English</option>
//       <option value="ar">Arabic</option>
//     </select>
//   );
// };

// export default LanguageChanger;
