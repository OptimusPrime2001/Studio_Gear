'use client';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';
import { navigationIcon, navigationLink } from '@lib/constant';
import { usePathname } from 'next/navigation';
import { inter } from '@lib/fonts';
import Logo from '@common/logo/logo';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@components/ui/sheet';
import { ModeToggle } from '@common/mode-toggle/ModeToggle';
import MenuIcon from '@components/icons/menu-bars';
import ShoppingBag from '@components/icons/shopping-bag';
import { cn } from '@lib/utils';

const Header = () => {
  const pathname = usePathname();
  const checkMenuActive = (label: string) => {
    return pathname === label ? 'menu_active dark:text-white' : 'menu_link';
  };
  return (
    <header className={cn(styles.headerWrapper, 'iu-d-flexbetween media_width_sm')}>
      <section className='iu-d-flexcenter header-logo gap-x-2'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent datatype='menu_mobile' side='left' className='ipadair:hidden w-[300px]'>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Logo />
      </section>
      <ul className='iu-d-flexbetween xl:gap-x-10 md:gap-x-6 hidden'>
        {navigationLink.map(item => (
          <li key={item.id}>
            <Link className={checkMenuActive(item.href)} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <section className='iu-d-flexbetween gap-x-4 cursor-pointer relative'>
        {navigationIcon.map(navItem => {
          if (navItem.id === 'bag')
            return (
              <div key={navItem.id} className='iu-d-flexbetween gap-x-1'>
                <ShoppingBag />
                <span
                  className={cn('index_ellipseParent iu-d-flexcenter dark:bg-white dark:text-black', inter.className)}
                >
                  3
                </span>
              </div>
            );
          else return <navItem.Component key={navItem.id} className='hidden md:block' />;
        })}
        <ModeToggle />
      </section>
    </header>
  );
};

export default Header;
