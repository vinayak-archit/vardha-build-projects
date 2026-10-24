'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  className = '',
  delay = 150,
  style,
  ...props
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-reveal={isVisible ? 'visible' : 'hidden'}
      className={`${className} reveal-section ${isVisible ? 'is-visible' : ''}`.trim()}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  );
};
