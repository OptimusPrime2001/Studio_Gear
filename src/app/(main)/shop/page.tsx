'use client';
import React from 'react';
import BreadcrumbPath from '@common/breadcrumb/breadcrumb';
import ProductCard from '@common/product-card/product-card';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import useResponsive, { EnumScreenSize } from '@hooks/useResponsive';
import FilterIcon from '@icons/filter';
import { filterCatogories, filterPriceRange, listSelectDisplay, PriceOptionType } from '@lib/constant';
import { poppins } from '@lib/fonts';
import { accessibleOnClick, cn, uniqueArray } from '@lib/utils';
import { useStore } from '@mobx/store';
import styles from './page.module.scss';

const ShopPage = () => {
  const { currentView, size } = useResponsive();
  const { breadcrumb } = useStore();
  React.useLayoutEffect(() => {
    if (breadcrumb.breadcrumbList.length === 1) {
      breadcrumb.updateBreadcrumb({
        href: 'shop',
        name: 'Shop'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [selectDisplay, setSelectDisplay] = React.useState<number>(0);
  const [selectAll, setSelectAll] = React.useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = React.useState<(typeof filterCatogories)[0]>(filterCatogories[0]);
  const [priceOptions, setPriceOptions] = React.useState<PriceOptionType[]>(filterPriceRange);

  React.useEffect(() => {
    const checkListOption = priceOptions.filter(item => !item.checked);
    if (checkListOption.length > 0) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
  }, [priceOptions]);

  React.useEffect(() => {
    if (size < EnumScreenSize.lg && selectDisplay < 2) {
      setSelectDisplay(state => state + 2);
    }
    if (size >= EnumScreenSize.lg && selectDisplay > 1) {
      setSelectDisplay(state => state - 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView]);
  //Actions
  const handleSelectAll = (isChecked: boolean) => {
    setSelectAll(isChecked);
    setPriceOptions(priceOptions.map(option => ({ ...option, checked: isChecked })));
  };

  const handleCheckboxChange = (isChecked: boolean, optionId: number) => {
    const updatedPriceOptions = priceOptions.map(option =>
      option.id === optionId ? { ...option, checked: isChecked } : option
    );
    setPriceOptions(updatedPriceOptions);
  };

  // Component parts
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
      <div className='display-type lg:!hidden'>
        {listSelectDisplay.slice(2, 4).map(item => (
          <Button
            className={cn(selectDisplay === item.id ? 'selector-active' : '', 'md:hidden')}
            key={item.id}
            onClick={() => setSelectDisplay(item.id)}
            reset
          >
            <item.Component />
          </Button>
        ))}
      </div>
      <div className='filter-categories hidden lg:block'>
        <h3 className='title-category dark:!text-neutral_00'>Thẻ loại</h3>
        <div>
          {filterCatogories.map(item => (
            <span
              {...accessibleOnClick(() => setSelectedCategory(item))}
              className={cn(
                'dark:hover:!border-neutral_00 dark:hover:!text-neutral_00',
                item.id === selectedCategory.id
                  ? '!border-neutral_07 !text-neutral_07 dark:!border-neutral_00 dark:!text-neutral_00'
                  : ''
              )}
              key={item.id}
            >
              {item.category}
            </span>
          ))}
        </div>
      </div>
      <div className='filter-prices hidden lg:block'>
        <h3 className='title-category dark:!text-neutral_00'>Giá</h3>
        <div key={0}>
          <label
            htmlFor='all price'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Tất cả giá
          </label>
          <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} id='all price' />
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
          <SelectTrigger className='w-[180px] dark:!border-neutral_03 dark:!text-neutral_00'>
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
        <div className='display-type !hidden lg:!flex'>
          {listSelectDisplay.slice(0, 2).map(({ id, Component }) => (
            <Button
              className={cn(selectDisplay === id ? 'selector-active' : '')}
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
    <div
      className={cn(
        'main-content_products dark:!text-neutral_00',
        listSelectDisplay.find(item => item.id === selectDisplay)?.class
      )}
    >
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
  const filterTypeMobile = () => (
    <section className={styles.filterTypeMobile}>
      <Select>
        <SelectTrigger className='w-[180px] border-neutral_03 dark:!text-neutral_00'>
          <SelectValue placeholder='Thể loại' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filterCatogories.map(item => (
              <SelectItem key={item.id} value={item.category}>
                {item.category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='w-[180px] border-neutral_03 dark:!text-neutral_00'>
          <SelectValue placeholder='Giá' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filterPriceRange.map(item => (
              <SelectItem key={item.id} value={item.value}>
                {item.price}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
  return (
    <section className={cn(styles.shopPageWrapper, 'media_width_sm')}>
      {bannerShop()}
      <section className='shop-content'>
        {filerType()}
        {filterTypeMobile()}
        <section className='main-content'>
          {mainContentTop()}
          {mainContentProducts()}
          <Button variant='outline' className='see-more dark:!text-neutral_03'>
            Xem thêm
          </Button>
        </section>
      </section>
    </section>
  );
};

export default ShopPage;
