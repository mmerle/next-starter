export default function robots() {
  const domainSegments = process.env.NEXT_PUBLIC_BASE_URL.split('.');
  const isSubdomain = domainSegments.length > 2;
  const isDev = process.env.NODE_ENV === 'dev';

  // disable search engine crawlers on subdomains
  if (isSubdomain || isDev) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: null,
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    host: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  };
}
