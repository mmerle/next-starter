import Link from 'next/link';
import s from './navigation.module.css';

const LINKS = [
  { href: '/', label: 'home' },
  { href: '/sanity', label: 'sanity' },
];

export function Navigation() {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
