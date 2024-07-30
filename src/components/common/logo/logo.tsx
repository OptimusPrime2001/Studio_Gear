import React from 'react';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './logo.module.scss';

const Logo = ({ className = '' }) => {
  return (
    <Link className={cn('iu-d-flexcenter', poppins.className, styles.logo, className)} href='/'>
      Darwin Le
    </Link>
  );
};

export default Logo;
