import Link from 'next/link';
import { Fragment } from 'react';
import { navigationQuery } from '~/lib/sanity/queries';
import { sanityFetch } from '~/lib/sanity/live';

export async function Footer() {
  const { data: nav } = await sanityFetch({
    query: navigationQuery,
    params: { navId: 'footer-menu' },
  });

  return (
    <footer>
      <div>
        {nav?.items?.map((item, index) => (
          <Fragment key={item._key}>
            <Link
              href={item.href}
              {...(item.openInNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {item.label}
            </Link>

            {index !== nav?.items?.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>
    </footer>
  );
}
