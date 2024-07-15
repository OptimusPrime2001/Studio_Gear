'use client';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';
import { navigationIcon, navigationLink } from '@lib/constant';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { inter } from '@lib/fonts';
import Logo from '@common/logo/logo';

const Header = () => {
  const pathname = usePathname();
  const checkMenuActive = (label: string) => {
    return pathname === label ? 'menu_active' : 'menu_link';
  };
  return (
    <header className={clsx(styles.headerWrapper, 'iu-d-flexbetween')}>
      <section className='iu-d-flexcenter gap-x-2'>
        <Button className='border-none shadow-none gap-x2 md:hidden flex' variant='outline' size='icon'>
          <Image src='/menuoutlinemenulinehorizontal.svg' alt='menu-icon' height={24} width={24} />
        </Button>

        <Logo />
      </section>
      <ul className='iu-d-flexbetween xl:gap-x-10 md:gap-x-6 md:flex hidden'>
        {navigationLink.map(item => (
          <li key={item.id}>
            <Link className={checkMenuActive(item.href)} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <section className='iu-d-flexbetween gap-x-4 cursor-pointer relative '>
        {navigationIcon.map(item => {
          if (item.label === 'Bag')
            return (
              <div key={item.id} className='iu-d-flexbetween gap-x-1'>
                <Image width={24} height={24} key={item.id} src={item.svg} alt={item.label} />
                <span className={clsx('index_ellipseParent iu-d-flexcenter', inter.className)}>3</span>
              </div>
            );
          else return <Image width={24} height={24} key={item.id} src={item.svg} alt={item.label} />;
        })}
      </section>
    </header>
  );
};

export default Header;
