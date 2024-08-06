'use client';
import React from 'react';
import { testState } from '@lib/constant';
import Test from './Test';
import Test2 from './Test2';
import styles from './page.module.scss';

const ShopPage: React.FC = () => {
  const [selectedColumn] = React.useState(testState);
  return (
    <section className={styles.shopPageWrapper}>
      <Test selectedColumn={selectedColumn} />
      <Test2 />
    </section>
  );
};

export default ShopPage;
