import AppData from '../../package.json';
import { themes } from '~/styles/config.js';

export default function manifest() {
  return {
    name: AppData.name,
    short_name: 'Next Starter',
    description: AppData.description,
    start_url: '/',
    display: 'standalone',
    background_color: themes.light.bgColor,
    theme_color: themes.light.bgColor,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
