import React from 'react';
import styles from './footer.module.scss';
import { clsx } from 'clsx';
import { poppins } from '@lib/fonts';
import { navigationLink } from '@lib/constant';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={clsx(styles.footerWrapper, poppins.className)}>
      <section className='footer_top flex'>
        <span className='logo_footer'>ShopGear</span>
        <span>Gift & Decoration Store</span>
        <ul className='iu-d-flexbetween gap-x-10'>
          {navigationLink.map(item => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </section>
      <section className='footer_bottom iu-d-flexbetween'>
        <span className='copy_right'>Copyright © 2023 3legant. All rights reserved</span>
        <b>Privacy Policy</b>
        <b>Terms of Use</b>
        <div className='list_social iu-d-flexbetween'>
          <Image height={24} width={24} alt='social-media' src='/socialoutlineinstagram.svg' />
          <Image height={24} width={24} alt='social-media' src='/socialoutlinefacebook.svg' />
          <Image height={24} width={24} alt='social-media' src='' />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
