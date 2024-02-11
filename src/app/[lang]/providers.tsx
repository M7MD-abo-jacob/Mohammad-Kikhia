'use client';

// this file provides the whole website with needed data
// it is mainly used for client components
// it helps to keep the layout.tsx cleaner and keep it as a server component
import React, { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import { Trans } from '../../../types';

function Providers({
  children,
  dictionary,
}: {
  children: ReactNode;
  dictionary: Trans;
}) {
  useEffect(() => {
    //  initialize AOS when the app loads
    AOS.init({});
    //   change the title meta tag when the user opens another tab
    if (typeof window !== 'undefined') {
      const title = dictionary.home.common.metadata.title;
      const altTitle = dictionary.home.common.metadata.altTitle;
      const changeTitle = () => {
        if (document.visibilityState === 'visible') {
          document.title = title;
        } else {
          document.title = altTitle;
        }
      };
      window.addEventListener('visibilitychange', changeTitle);
      return () => window.removeEventListener('visibilitychange', changeTitle);
    }
  }, []);

  return <>{children}</>;
}

export default Providers;
