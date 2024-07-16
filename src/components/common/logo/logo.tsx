import { poppins } from '@lib/fonts';
import Link from 'next/link';
import React from 'react';
import styles from './logo.module.scss';
import { cn } from '@lib/utils';

const Logo = () => {
  return (
    <Link className={cn('iu-d-flexcenter', poppins.className, styles.logo)} href='/'>
      Ben Beckman
    </Link>
  );
};

export default Logo;
