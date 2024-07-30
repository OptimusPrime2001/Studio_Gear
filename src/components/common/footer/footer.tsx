import React from 'react';
import Logo from '@common/logo/logo';
import { listSocialIcon, navigationLink } from '@lib/constant';
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(styles.footerWrapper, inter.className, 'media_width_sm dark:bg-white dark:text-black')}>
      <section className='footer_top'>
        <Logo />
        <span className='line' />
        <span>Gift & Decoration Store</span>
        <ul className='gap-y-4 md:gap-x-10'>
          {navigationLink.map(item => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </section>
      <section className='footer_line' />
      <section className='footer_bottom'>
        <span className='copy_right'>Copyright © 2023 3legant. All rights reserved</span>
        <ul className=''>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
        <div className='list_social'>
          {listSocialIcon.map(item => (
            <Link href={item.href} key={item.id}>
              <item.Component />
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
