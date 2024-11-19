'use client';

import 'lenis/dist/lenis.css';
import { ReactLenis } from '~/lib/lenis';

export function Lenis({ root, options }) {
  const defaultOptions = {
    duration: 0.2,
    lerp: 0.1,
  };

  return (
    <ReactLenis
      root={root}
      options={{
        ...defaultOptions,
        ...options,
        prevent: (node) => {
          return node.nodeName === 'VERCEL-LIVE-FEEDBACK';
        },
      }}
    />
  );
}
