'use client';
import React from 'react';
import BreadcrumbPath from '@common/breadcrumb/breadcrumb';
import FilterIcon from '@components/icons/filter';
import { Checkbox } from '@components/ui/checkbox';
import { filterCatogories, filterPriceRange } from '@lib/constant';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { breadcrumb } from '@mobx/stores/breadcrumStore';
import styles from './page.module.scss';

const ShopPage = () => {
  React.useLayoutEffect(() => {
    breadcrumb.updateBreadcrumb({
      href: 'shop',
      name: 'Shop'
    });
  }, []);
  const bannerShop = () => (
    <section className='shop-banner'>
      <BreadcrumbPath />
      <h2 className={poppins.className}>Shop Page</h2>
      <p>Let’s design the place you always imagined.</p>
    </section>
  );
  const filerType = () => (
    <section className='filter-type'>
      <div className='filter-title'>
        <FilterIcon />
        <h2>Filter</h2>
      </div>

      <div className='filter-categories'>
        <h3 className='title-category'>Thẻ loại</h3>
        <div>
          {filterCatogories.map(item => (
            <span key={item.id}>{item.category}</span>
          ))}
        </div>
      </div>
      <div className='filter-prices'>
        <h3 className='title-category'>Giá</h3>
        <div key={0}>
          <label
            htmlFor='all price'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Tất cả giá
          </label>
          <Checkbox id='all price' />
        </div>
        {filterPriceRange.map(item => (
          <div key={item.id}>
            <label
              htmlFor={item.price}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {item.price}
            </label>
            <Checkbox id={item.price} />
          </div>
        ))}
      </div>
    </section>
  );
  return (
    <section className={cn(styles.shopPageWrapper, 'media_width_sm')}>
      {bannerShop()}
      <section className='shop-content'>{filerType()}</section>
    </section>
  );
};

export default ShopPage;
