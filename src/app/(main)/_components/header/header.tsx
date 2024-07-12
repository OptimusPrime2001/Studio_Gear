'use client';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';
import { navigationIcon, navigationLink } from '@lib/constant';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { inter, poppins } from '@lib/fonts';

const Header = () => {
  const pathname = usePathname();
  const checkMenuActive = (label: string) => {
    return pathname === label ? 'menu_active' : 'menu_link';
  };
  return (
    <header className={clsx(styles.headerWrapper, 'iu-d-flexbetween')}>
      <Button className='border-none shadow-none gap-x2 md-none' variant='outline' size='icon'>
        <Image src='/menuoutlinemenulinehorizontal.svg' alt='menu-icon' height={24} width={24} />
      </Button>
      <Link className={clsx('logo_link iu-d-flexcenter', poppins.className)} href='/'>
        ShopGea
      </Link>
      <ul className='iu-d-flexbetween gap-x-10'>
        {navigationLink.map(item => (
          <li key={item.id}>
            <Link className={checkMenuActive(item.href)} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <section className='iu-d-flexbetween gap-x-4 cursor-pointer relative'>
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
