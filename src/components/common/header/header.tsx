'use client';
import React from 'react';
import Logo from '@common/logo/logo';
import HeartIcon from '@components/icons/heart';
import MenuBars from '@components/icons/menu-bars';
import ShoppingBag from '@components/icons/shopping-bag';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@components/ui/sheet';
import { navigationIcon, navigationLink } from '@lib/constant';
import { cn } from '@lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CountIcon from '../count-icon/count-icon';
import { ModeToggle } from '../mode-toggle/mode-toggle';
import styles from './header.module.scss';

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
            <MenuBars />
          </SheetTrigger>
          <SheetContent datatype='menu_mobile' side='left' className='w-[90%] ipadair:hidden'>
            <SheetHeader className='h-full'>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <section className={styles.menu_mobile}>
                <ul>
                  {navigationLink.map(item => (
                    <li key={item.id}>
                      <Link className={checkMenuActive(item.href)} href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <section className='w-full'>
                  <ul className='w-full'>
                    <li className='iu-d-flexbetween'>
                      <span>Giỏ hàng</span>
                      <CountIcon count={3} iconElement={<ShoppingBag />} />
                    </li>
                    <li className='iu-d-flexbetween'>
                      <span>Mục yêu thích</span>
                      <CountIcon count={3} iconElement={<HeartIcon size='24' />} />
                    </li>
                  </ul>
                </section>
              </section>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Logo />
      </section>
      <ul className='iu-d-flexbetween hidden md:gap-x-6 xl:gap-x-10'>
        {navigationLink.map(item => (
          <li key={item.id}>
            <Link className={checkMenuActive(item.href)} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <section className='iu-d-flexbetween relative cursor-pointer gap-x-4'>
        {navigationIcon.map(navItem => {
          if (navItem.id === 'bag')
            return (
              <div key={navItem.id} className='iu-d-flexbetween gap-x-1'>
                <CountIcon count={3} iconElement={<ShoppingBag />} />
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
