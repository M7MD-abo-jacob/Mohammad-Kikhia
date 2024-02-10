'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="top-to-btm">
      <Link href="#home">
        {showTopBtn && <FaAngleUp className="icon-position icon-style" />}
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
