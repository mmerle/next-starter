export default function sitemap() {
  // todo: move routes to helper function (generate from sanity)
  let routes = ['', '/home'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
  }));

  return [...routes];
}
