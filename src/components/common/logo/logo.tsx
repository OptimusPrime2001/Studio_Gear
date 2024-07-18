import React from 'react';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link className={cn('iu-d-flexcenter', poppins.className, styles.logo)} href='/'>
      Ben Beckman
    </Link>
  );
};

export default Logo;
