'use client';
import React, { useRef } from 'react';
import LinkButton from '@components/common/link-button/link-button';
import { InfiniteMovingCards } from '@components/ui/infinite-moving-cards';
import { Meteors } from '@components/ui/meteors';
import { listMainProduct, listQuotes, listSupportCustomer } from '@lib/constant';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { animate, ElementOrSelector, useInView } from 'framer-motion';
import Image from 'next/image';
import ArticlesPart from './_modules/articles/articles';
import HomeSlider from './_modules/home-slider/home-slider';
import ListProduct from './_modules/list-product/list-product';
import Newsleetter from './_modules/newsletter/newsletter';
import styles from './page.module.scss';

export default function HomePage() {
  const headingHomeref = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingHomeref);
  React.useEffect(() => {
    if (isInView) {
      animate(headingHomeref.current as ElementOrSelector, { x: [-100, 0] }, { duration: 0.5 });
    }
  }, [isInView]);
  return (
    <main className='iu-d-flexcolumn'>
      <HomeSlider />
      <section className={cn(styles.headingHomeWrapper, 'media_width_sm')}>
        <div ref={headingHomeref} className={cn(poppins.className, 'dark:!text-primary_light')}>
          <span>Simply Unique/</span>
          <span>Simply Better.</span>{' '}
        </div>
        <p className={cn(inter.className, 'dark:!text-primary_blur')}>
          <b className='dark:!text-primary_light'>Ben Beckman</b> is a gift & decorations store based in HCMC, Vietnam.
          Est since 2019.{' '}
        </p>
      </section>
      <section className={cn(styles.mainProduct, 'media_width_sm')}>
        {listMainProduct.map(item => (
          <div className='product-card' key={item.id}>
            <section className='product-content'>
              <h3 className={cn(poppins.className, 'dark:!text-primary_dark')}>{item.label}</h3>
              <LinkButton href='/products' reverseMode>
                Shop Now
              </LinkButton>
            </section>
            <Image priority fill alt={item.label} src={item.img} />
          </div>
        ))}
      </section>
      <ListProduct />
      <section className={cn(styles.supportWrapper, 'media_width_sm')}>
        {listSupportCustomer.map(item => (
          <section className='relative overflow-hidden bg-primary_dark dark:bg-primary_light' key={item.id}>
            <item.icon />
            <p className={poppins.className}>{item.title}</p>
            <span>{item.label}</span>
            <Meteors number={20} />
          </section>
        ))}
      </section>
      <section className={cn(styles.bannerBestSeller, inter.className)}>
        <Image alt='image' src='https://ucarecdn.com/69358f7c-7e08-47b9-908e-e27b249f2be8/ImagePlaceholder3.png' fill />
        <section className='banner-content'>
          <span>SALE UP TO 35% OFF</span>
          <h3 className={poppins.className}>HUNDREDS of New lower prices!</h3>
          <p>It’s more affordable than ever to give every room in your home a stylish </p>
          <LinkButton href='/products' reverseMode>
            Show Now
          </LinkButton>
        </section>
        <section />
      </section>
      <div className='w-full'>
        <InfiniteMovingCards pauseOnHover={false} items={listQuotes} direction='left' speed='slow' />
      </div>
      <ArticlesPart />
      <Newsleetter />
    </main>
  );
}
