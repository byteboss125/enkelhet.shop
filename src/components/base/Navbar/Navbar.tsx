'use client';
import { useUiStore } from '@/store';
import Link from 'next/link';
import { navItems } from './navItems';

export const Navbar = () => {
  const { openSideMenu } = useUiStore();
  return (
    <nav className="py-4 px-2 flex items-center justify-between md:px-4 xl:px-6 border-b border-black">
      <Link href="/" className="font-black text-2xl font-sans md:text-5xl">
        enkelhet
      </Link>
      <ul className="hidden md:flex items-center gap-7">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`/series/${label}`}
              className="hover:underline underline-offset-2"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4 text-sm md:gap-6 md:text-base">
        <li>
          <button>SEARCH</button>
        </li>
        <li>
          <button>CART (0)</button>
        </li>
        <li>
          <button onClick={openSideMenu}>MENU</button>
        </li>
      </ul>
    </nav>
  );
};
