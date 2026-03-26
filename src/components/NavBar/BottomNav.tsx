'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/' },
  { label: 'Feedback', href: '/' },
  {
    label: 'Produtos',
    href: '/',
    dropdown: [
      { label: 'Armas de Fogo', href: '/armas-de-fogo' },
      { label: 'Acessórios', href: '/acessorios' },
    ],
  },
  { label: 'Fale Conosco', href: '/' },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );


  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toogleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  return (
    <div
      className={`w-full bg-white py-6 shadow-sm transition-all duration-500 ${isFixed ? 'fixed-nav fixed left-0 top-0 z-50' : ''
        }`}
    >
      <div className='flex w-full items-center justify-between px-[8%] text-gray-700 lg:px-[16%]'>
        {/* Logo mobile */}
        <Link href='/' className='Audiowide text-3xl font-bold lg:hidden'>
          Top<span className='text-[var(--second)]'>Gun</span>
        </Link>

        {/* Logo desktop quando fixar */}
        {isFixed && (
          <Link
            href='/'
            className='Audiowide text-3xl font-bold hidden lg:block text-[var(--second)]' 
          >
            Top<span className='text-[var(--second)]'>Gun</span>
          </Link>
        )}

        {/* Menu */}
        <nav className='hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2'>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className='group relative'>
                <Link
                  href={link.href}
                  className='GolosText flex items-center gap-1 font-bold text-[var(--black)] transition-colors hover:text-[var(--second)]'
                >
                  {link.label}

                </Link>

                {/* Dropdown */}
                <div className='absolute left-0 top-full hidden min-w-[170px] rounded-lg border border-gray-100 bg-white p-2 shadow-xl group-hover:block gap-10'>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='GolosText block px-4 py-3 font-bold text-[var(--black)] transition-colors hover:bg-[var(--prim-light)] hover:text-[var(--second)]'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className='GolosText flex items-center gap-1 font-bold text-[var(--black)] transition-colors hover:text-[var(--second)]'
              >
                {link.label}


              </Link>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}
