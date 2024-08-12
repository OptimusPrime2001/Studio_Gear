'use client';
import React from 'react';
import BreadcrumbPath from '@common/breadcrumb/breadcrumb';
import ProductCard from '@common/product-card/product-card';
import FilterIcon from '@components/icons/filter';
import { Checkbox } from '@components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@components/ui/select';
import { filterCatogories, filterPriceRange } from '@lib/constant';
import { poppins } from '@lib/fonts';
import { cn, uniqueArray } from '@lib/utils';
import { breadcrumb } from '@mobx/stores/breadcrumStore';
import styles from './page.module.scss';

const ShopPage = () => {
  React.useLayoutEffect(() => {
    if (breadcrumb.breadcrumbList.length === 1) {
      breadcrumb.updateBreadcrumb({
        href: 'shop',
        name: 'Shop'
      });
    }
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
      <section className='shop-content'>
        {filerType()}
        <section className='main-content'>
          <div className='main-content_top'>
            <h2>Living room</h2>
            <div>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Sắp xếp theo' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='best_seller'>Bán chạy nhất</SelectItem>
                    <SelectItem value='price_highest'>Giá cao nhất</SelectItem>
                    <SelectItem value='price_lowest'>Giá thấp nhất</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className='display-type'></div>
            </div>
          </div>
          <div className='main-content_product'>
            {uniqueArray(10).map(item => (
              <ProductCard
                name='Loveseat Sofa'
                price={299000}
                discount={20}
                rating={3}
                isNew
                href={`/ffffffffff`}
                imgProduct='https://ucarecdn.com/2df20e1d-9205-4395-9666-2027672517fa/imageplaceholder12x.png'
                key={item}
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default ShopPage;
