import React from 'react';
import styles from './page.module.scss';

const ShopPage: React.FC = () => {
  return (
    <section className={styles.shopPageWrapper}>
      <div className='item-a bg-slate-500'>header</div>
      {/* <div className="item-b bg-slate-500">main</div>
      <div className="item-c bg-blue-500">sidebar</div> */}
      <div className='item-d bg-blue-500'>footer</div>
    </section>
  );
};

export default ShopPage;
