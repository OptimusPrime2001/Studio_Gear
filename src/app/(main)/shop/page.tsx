'use client';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@components/ui/breadcrumb';
import { poppins } from '@lib/fonts';
import Link from 'next/link';
import styles from './page.module.scss';

const ShopPage: React.FC = () => {
  return (
    <section className={styles.shopPageWrapper}>
      <section className='shop-banner'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className={poppins.className}>Shop Page</h2>
        <p>Let’s design the place you always imagined.</p>
      </section>
    </section>
  );
};

export default ShopPage;
