'use client';

import React, { ReactNode, useEffect } from 'react';
import AOS from 'aos';

function AOSProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return <>{children}</>;
}

export default AOSProvider;
