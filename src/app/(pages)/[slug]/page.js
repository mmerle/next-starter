import { sanityFetch } from '~/lib/sanity/live';
import { pagesSlugs, getPageQuery } from '~/lib/sanity/queries';
import { getMetadata } from '~/utils/metadata';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: 'published',
    stega: false,
  });
  return data;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { data: page } = await sanityFetch({ query: getPageQuery, params, stega: false });
  console.log(page);

  return getMetadata({ data: page });
}

export default async function Page(props) {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
  });

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h1>{page.heading}</h1>
      <h2>{page.subheading}</h2>
    </div>
  );
}
