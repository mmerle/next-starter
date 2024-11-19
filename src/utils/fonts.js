import cn from 'clsx';
import localFont from 'next/font/local';

const diatypePlus = localFont({
  src: [
    {
      path: '../app/fonts/ABCDiatypePlusVariable.woff2',
      weight: '100 700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-diatype-plus',
  preload: true,
});

export const fonts = { className: cn(diatypePlus.variable) };
