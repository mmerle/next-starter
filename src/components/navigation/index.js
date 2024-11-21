import Link from 'next/link';
import { navigationQuery } from '~/lib/sanity/queries';
import { sanityFetch } from '~/lib/sanity/live';

export async function Navigation() {
  const { data: nav } = await sanityFetch({
    query: navigationQuery,
    params: { navId: 'main-menu' },
  });
  console.log(nav);

  return (
    <nav>
      <ul>
        {nav?.items?.map((item) => (
          <li key={item._key}>
            <Link href={item.page}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
