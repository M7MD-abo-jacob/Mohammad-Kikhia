'use client';

import React, { ReactNode, useState } from 'react';

interface Tilt {
  tiltX: number;
  tiltY: number;
  scale: number;
}

const Tilter = ({
  children,
  ...props
}: {
  children: ReactNode;
  props?: any;
}) => {
  const [transform, setTransform] = useState<Tilt>({
    tiltX: 0,
    tiltY: 0,
    scale: 1,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    setTransform({ tiltX: x * 30, tiltY: y * -15, scale: 1.01 });
  };

  const handleMouseLeave = () => {
    setTransform({ tiltX: 0, tiltY: 0, scale: 1 });
  };
  return (
    <div
      {...props}
      className="image"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <div
        style={{
          transform: `perspective(500px) rotateX(${transform.tiltY}deg) rotateY(${transform.tiltX}deg) scale(${transform.scale})`,
          transition: 'all 0s',
          boxShadow: `${transform.tiltX * 2}px ${
            transform.tiltY * -2
          }px 15px rgba(0,0,0,0.3)`,
        }}>
        {children}
      </div>
    </div>
  );
};

export default Tilter;
