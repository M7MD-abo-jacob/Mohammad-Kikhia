'use client';
// this component returns an arrow pointing to the left if the language if written from right to left
// and an arrow pointing right if the language is written from left to right

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
