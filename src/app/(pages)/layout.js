import '~/styles/global.css';
import { fonts } from '~/utils/fonts';
import { Viewport } from '~/components/viewport';
import { StyleVariables } from '~/utils/style-variables';
import { colors, themes } from '~/styles/config';
import { ThemeProvider } from 'next-themes';
import { Lenis } from '~/components/lenis';
import {
  APP_NAME,
  APP_DEFAULT_TITLE,
  APP_TITLE_TEMPLATE,
  APP_DESCRIPTION,
  APP_BASE_URL,
} from '~/utils/metadata';
import { Navigation } from '~/components/navigation';
import { Footer } from '~/components/footer';

export const metadata = {
  metadataBase:
    process.env.NODE_ENV === 'dev'
      ? new URL(`http://localhost:${process.env.PORT || 3000}`)
      : new URL(APP_BASE_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    type: 'website',
    url: APP_BASE_URL,
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: themes.light.bgColor },
    { media: '(prefers-color-scheme: dark)', color: themes.dark.bgColor },
  ],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en-CA" className={fonts?.className} suppressHydrationWarning>
      <head>
        <StyleVariables colors={colors} themes={themes} defaultTheme="light" />
      </head>
      <body>
        <Lenis root options={{ lerp: 0.2 }} />
        <ThemeProvider disableTransitionOnChange>
          <div className="app">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Viewport />
      </body>
    </html>
  );
}
