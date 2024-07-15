import { poppins } from '@lib/fonts';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link className={clsx('iu-d-flexcenter', poppins.className, styles.logo)} href='/'>
      ShopGear
    </Link>
  );
};

export default Logo;
