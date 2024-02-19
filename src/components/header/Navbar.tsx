'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import { FaBars, FaX } from 'react-icons/fa6';
import { Locale } from '@/i18n-config';
import { Trans } from '../../../types';
import NavMenu from './NavMenu';
import LocaleSwitcher from '@/components/header/LocaleSwitcher';

const Navbar = ({ lang, t }: { lang: Locale; t: Trans }) => {
  const [hidden, setHidden] = useState(true);

  const toggleSidePanel = () => {
    setHidden((prev) => !prev);
  };

  return (
    <header>
      <div className="width-container">
        {/* ----------- BRAND ------------ */}
        <Link data-aos="zoom-in" href="#" className="logo">
          <FaReact />
          <span>{t.header.brand.split(' ')[0]}</span>
        </Link>

        {/* ----------- LANGUAGE SELECTOR ------------ */}
        <div className="locale-switcher" data-aos="zoom-out-down">
          <LocaleSwitcher lang={lang} t={t} />
        </div>
        {/* ----------- MAIN NAV ------------ */}
        <div className="menu">
          {/* ----------- SIDE PANEL BUTTON ------------ */}
          <button
            title={hidden ? t.header.open_panel : t.header.close_panel}
            onClick={() => toggleSidePanel()}
            className={hidden ? '' : 'close-btn'}>
            {hidden ? <FaBars /> : <FaX />}
          </button>
        </div>
        {/* ----------- NAV MENU ------------ */}
        <nav
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setHidden(true);
          }}
          className={`navbar ${hidden ? '' : 'nav-toggle'}`}>
          <NavMenu t={t} setHidden={setHidden} />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
