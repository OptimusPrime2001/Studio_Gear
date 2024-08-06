'use client';
import React from 'react';
import { testState } from '@lib/constant';
import Test from './Test';
import styles from './page.module.scss';

const ShopPage: React.FC = () => {
  const [selectedColumn, setSelectedColumn] = React.useState(testState);
  return (
    <section className={styles.shopPageWrapper}>
      <Test selectedColumn={selectedColumn} />
    </section>
  );
};

export default ShopPage;
