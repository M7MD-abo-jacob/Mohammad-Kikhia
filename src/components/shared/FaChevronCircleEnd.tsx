'use client';

import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { rtlLanguages } from '@/data/variables';

const FaChevronCircleEnd = ({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) => {
  return rtlLanguages.includes(lang) ? (
    <FaChevronCircleLeft className={className} />
  ) : (
    <FaChevronCircleRight className={className} />
  );
};

export default FaChevronCircleEnd;
