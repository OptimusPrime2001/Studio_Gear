import React from 'react';
import styles from './notification-bar.module.scss';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
const NotificationBar = () => {
  return (
    <section className={clsx(styles.notificationBar, 'iu-d-flexcenter gap-x-3')}>
      <Image alt='voucher' height={24} width={24} src='/ticketpercent.svg' />
      <span>30% off storewide — Limited time! </span>
      <Link className='shop_now' href='/shop'>
        <span>Shop Now</span>
        <Image alt='voucher' height={18} width={18} src='/iconarrowright.svg' />
      </Link>
    </section>
  );
};

export default NotificationBar;
