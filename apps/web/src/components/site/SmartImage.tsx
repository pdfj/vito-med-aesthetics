'use client';

import { useState } from 'react';

type Props = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
};

/**
 * Image that gracefully degrades:
 *  - tries `src`
 *  - on error, swaps to `fallbackSrc` (if provided)
 *  - if that also fails (or none given), renders nothing
 * Perfect for local images the client hasn't uploaded yet.
 */
export default function SmartImage({ src, fallbackSrc, alt, className }: Props) {
  const [current, setCurrent] = useState(src);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) {
          setCurrent(fallbackSrc);
        } else {
          setHidden(true);
        }
      }}
    />
  );
}
