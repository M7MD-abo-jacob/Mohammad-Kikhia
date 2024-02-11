'use client';

import { useState, useEffect } from 'react';

interface TypeAnimationProps {
  sequence: string[];
  className: string;
  wrapper?: string;
  cursor?: boolean;
  repeat?: number;
}

const TypeAnimation: React.FC<TypeAnimationProps> = ({
  sequence,
  className,
  wrapper = 'span',
  cursor = true,
  repeat = Infinity,
}) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      timeoutId = setTimeout(() => {
        setText(text.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((index + 1) % sequence.length);
        }
      }, 30);
    } else if (typeof sequence[index] === 'string') {
      const currentText = sequence[index] as string;
      if (text !== currentText) {
        timeoutId = setTimeout(
          () => setText(currentText.slice(0, text.length + 1)),
          70,
        );
      } else {
        timeoutId = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      timeoutId = setTimeout(() => setIndex((index + 1) % sequence.length), 50);
    }

    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, sequence, text]);

  const Wrapper = wrapper as keyof JSX.IntrinsicElements;

  return (
    <Wrapper className={className}>
      {text}
      {cursor && <span className="cursor" />}
    </Wrapper>
  );
};

export default TypeAnimation;
