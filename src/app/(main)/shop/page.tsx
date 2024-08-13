'use client';
import React from 'react';
import BreadcrumbPath from '@common/breadcrumb/breadcrumb';
import ProductCard from '@common/product-card/product-card';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import FilterIcon from '@icons/filter';
import { filterCatogories, filterPriceRange, listSelectDisplay, PriceOptionType } from '@lib/constant';
import { poppins } from '@lib/fonts';
import { accessibleOnClick, cn, uniqueArray } from '@lib/utils';
import { breadcrumb } from '@mobx/stores/breadcrumStore';
import styles from './page.module.scss';

enum SelectDisplayType {
  'GridSquare' = 0,
  'Square' = 1,
  'TwoColumn' = 2,
  'TwoRow' = 3
}

const ShopPage = () => {
  React.useLayoutEffect(() => {
    if (breadcrumb.breadcrumbList.length === 1) {
      breadcrumb.updateBreadcrumb({
        href: 'shop',
        name: 'Shop'
      });
    }
  }, []);
  const [selectDisplay, setSelectDisplay] = React.useState<SelectDisplayType>(SelectDisplayType.GridSquare);
  const [selectedCategory, setSelectedCategory] = React.useState<(typeof filterCatogories)[0]>(filterCatogories[0]);
  const [priceOptions, setPriceOptions] = React.useState<PriceOptionType[]>(filterPriceRange);

  const handleSelectAll = (isChecked: boolean) => {
    setPriceOptions(priceOptions.map(option => ({ ...option, isChecked })));
  };

  const handleCheckboxChange = (isChecked: boolean, optionId: number) => {
    const updatedPriceOptions = priceOptions.map(option =>
      option.id === optionId ? { ...option, isChecked } : option
    );
    setPriceOptions(updatedPriceOptions);
  };
  const bannerShop = () => (
    <section className='shop-banner'>
      <BreadcrumbPath />
      <h2 className={poppins.className}>Shop Page</h2>
      <p>Let’s design the place you always imagined.</p>
    </section>
  );
  const filerType = () => (
    <section className='filter-type'>
      <div className='filter-title dark:!text-neutral_00'>
        <FilterIcon />
        <h2>Filter</h2>
      </div>

      <div className='filter-categories'>
        <h3 className='title-category dark:!text-neutral_00'>Thẻ loại</h3>
        <div>
          {filterCatogories.map(item => (
            <span
              {...accessibleOnClick(() => setSelectedCategory(item))}
              className={cn(
                'hover:!border-neutral_00 hover:!text-neutral_00',
                item.id === selectedCategory.id ? '!border-neutral_00 !text-neutral_00' : ''
              )}
              key={item.id}
            >
              {item.category}
            </span>
          ))}
        </div>
      </div>
      <div className='filter-prices'>
        <h3 className='title-category dark:!text-neutral_00'>Giá</h3>
        <div key={0}>
          <label
            htmlFor='all price'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Tất cả giá
          </label>
          <Checkbox onCheckedChange={handleSelectAll} id='all price' />
        </div>
        {priceOptions.map(item => (
          <div key={item.id}>
            <label
              htmlFor={item.price}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {item.price}
            </label>
            <Checkbox
              onCheckedChange={checked => handleCheckboxChange(checked as boolean, item.id)}
              checked={item.checked}
              id={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
  const mainContentTop = () => (
    <div className='main-content_top'>
      <h2 className='dark:!text-neutral_00'>{selectedCategory.category}</h2>
      <div className='content-top_left'>
        <Select>
          <SelectTrigger className='w-[180px] dark:!text-neutral_00'>
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
        <div className='display-type'>
          {listSelectDisplay.map(({ id, Component }) => (
            <Button
              className={cn(selectDisplay === id ? 'selector-active' : '', id < 2 ? 'hidden md:block' : 'md:!hidden')}
              key={id}
              onClick={() => setSelectDisplay(id)}
              reset
            >
              <Component />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
  const mainContentProducts = () => (
    <div className={cn('main-content_products dark:!text-neutral_00', classFormatDisplay[selectDisplay])}>
      {uniqueArray(9).map(item => (
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
  );
  const classFormatDisplay = {
    0: 'grid-square',
    1: 'square',
    2: 'two-columns',
    3: 'two-rows'
  };
  return (
    <section className={cn(styles.shopPageWrapper, 'media_width_sm')}>
      {bannerShop()}
      <section className='shop-content'>
        {filerType()}
        <section className='main-content'>
          {mainContentTop()}
          {mainContentProducts()}
          <Button variant='outline' className='see-more dark:!text-neutral_00'>
            Xem thêm
          </Button>
        </section>
      </section>
    </section>
  );
};

export default ShopPage;
