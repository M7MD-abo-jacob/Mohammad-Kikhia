'use client';

import { useRouter } from 'next/navigation';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { rtlLanguages } from '@/data/variables';

const FaChevronCircleEnd = ({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) => {
  const router = useRouter();
  // const locale = uselocale();
  // const locale = router.locale || 'en';
  return rtlLanguages.includes(lang) ? (
    <FaChevronCircleLeft className={className} />
  ) : (
    <FaChevronCircleRight className={className} />
  );
};

export default FaChevronCircleEnd;
