'use client';

import { sections } from '@/data/variables';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Trans } from '../../../../types';

type Props = { t: Trans; setHidden: Function };

export default function NavMenu({ t, setHidden }: Props) {
  const [visibleSection, setVisibleSection] = useState('home');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navbarHeight = 75;
      const checkVisible = (elm: HTMLElement) => {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight,
        );
        return !(
          rect.bottom < navbarHeight || rect.top - viewHeight >= navbarHeight
        );
      };

      const sectionIds = sections;
      const handleScroll = () => {
        for (let id of sectionIds) {
          const element = document.getElementById(id);
          if (!!element) {
            if (checkVisible(element)) {
              setVisibleSection(id);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <ul onClick={(e) => e.stopPropagation()}>
      {sections.map((item, i) => (
        <li
          key={item}
          data-aos="zoom-out-down"
          data-aos-delay={i * 100}
          onClick={() => setHidden(true)}>
          <Link
            href={`#${item}`}
            className={item === visibleSection ? 'active' : ''}>
            {t.nav[item]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
