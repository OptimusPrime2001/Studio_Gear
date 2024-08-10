'use client';
import React from 'react';
import BreadcrumbPath from '@common/breadcrumb/breadcrumb';
import { poppins } from '@lib/fonts';
import { breadcrumb } from '@mobx/stores/breadcrumStore';
import styles from './page.module.scss';

const ShopPage = () => {
  React.useEffect(() => {
    breadcrumb.updateBreadcrumb({
      href: 'shop',
      name: 'Shop'
    });
  }, []);

  return (
    <section className={styles.shopPageWrapper}>
      <section className='shop-banner'>
        <BreadcrumbPath />
        <h2 className={poppins.className}>Shop Page</h2>
        <p>Let’s design the place you always imagined.</p>
      </section>
    </section>
  );
};

export default ShopPage;
