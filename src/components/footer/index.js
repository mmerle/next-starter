import Link from 'next/link';
import { Fragment } from 'react';

const REPO = 'https://github.com/mmerle/next-starter';
const LINKS = [
  { href: `${REPO}/generate`, label: 'Use this template' },
  { href: REPO, label: 'GitHub' },
];

export function Footer() {
  return (
    <footer>
      <div>
        {LINKS.map((link, index) => (
          <Fragment key={link.href}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Link>

            {index !== LINKS.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>
    </footer>
  );
}
