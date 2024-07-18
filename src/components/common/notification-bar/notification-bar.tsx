'use client';
import React from 'react';
import ArrowRightIcon from '@components/icons/arrow-right';
import CloseIcon from '@components/icons/close';
import VoucherIcon from '@components/icons/voucher';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './notification-bar.module.scss';

const NotificationBar = () => {
  const [renderVoucher, setRenderVoucher] = React.useState<boolean>(true);
  if (!renderVoucher) return null;
  return (
    <section className={cn(styles.notificationBar, 'iu-d-flexcenter gap-x-3 flex dark:bg-slate-900 relative')}>
      <VoucherIcon />
      <span className='text-center'>Giảm giá 30% trên toàn cửa hàng — Thời gian có hạn! </span>
      <Link className='shop_now' href='/product'>
        <span>Mua ngay</span>
        <ArrowRightIcon />
      </Link>
      <CloseIcon onClick={() => setRenderVoucher(false)} className='md:absolute md:right-4 relative cursor-pointer' />
    </section>
  );
};

export default NotificationBar;
