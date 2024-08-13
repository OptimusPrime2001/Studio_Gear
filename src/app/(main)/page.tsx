'use client';
import React from 'react';
import LinkButton from '@components/common/link-button/link-button';
import { InfiniteMovingCards } from '@components/ui/infinite-moving-cards';
import { Meteors } from '@components/ui/meteors';
import { listMainProduct, listQuotes, listSupportCustomer } from '@lib/constant';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { useStore } from '@mobx/store';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ArticlesPart from './_modules/articles/articles';
import HomeSlider from './_modules/home-slider/home-slider';
import ListProduct from './_modules/list-product/list-product';
import Newsleetter from './_modules/newsletter/newsletter';
import styles from './page.module.scss';

export default function HomePage() {
  const { breadcrumb } = useStore();
  React.useEffect(() => {
    breadcrumb.resetBreadcrumb();
  }, [breadcrumb]);
  const headingHome = () => (
    <section className={cn(styles.headingHomeWrapper, 'media_width_sm')}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(poppins.className, 'dark:!text-neutral_00')}
      >
        <span>Simply Unique/</span>
        <span>Simply Better.</span>{' '}
      </motion.div>
      <motion.div
        className={cn(inter.className, 'dark:!text-primary_blur')}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <b className='dark:!text-neutral_00'>Ben Beckman</b> is a gift & decorations store based in HCMC, Vietnam. Est
        since 2019.{' '}
      </motion.div>
    </section>
  );
  const mainProduct = () => (
    <section className={cn(styles.mainProduct, 'media_width_sm')}>
      {listMainProduct.map((item, index) => (
        <motion.div
          initial={
            index === 0
              ? {
                  y: 200,
                  opacity: 0
                }
              : {
                  x: 100,
                  opacity: 0
                }
          }
          whileInView={
            index === 0
              ? {
                  y: 0,
                  opacity: 1
                }
              : {
                  x: 0,
                  opacity: 1
                }
          }
          transition={{
            duration: 0.5
          }}
          className='product-card'
          key={item.id}
        >
          <section className='product-content'>
            <h3 className={cn(poppins.className, 'dark:!text-neutral_07')}>{item.label}</h3>
            <LinkButton href='/products' reverseMode>
              Shop Now
            </LinkButton>
          </section>
          <Image
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            fill
            alt={item.label}
            src={item.img}
          />
        </motion.div>
      ))}
    </section>
  );
  const supportCustomer = () => (
    <section className={cn(styles.supportWrapper, 'media_width_sm')}>
      {listSupportCustomer.map((item, index) => (
        <motion.section
          whileInView={{
            y: [150, 0]
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='relative overflow-hidden bg-neutral_07 dark:bg-neutral_00'
          key={item.id}
        >
          <item.icon />
          <p className={poppins.className}>{item.title}</p>
          <span>{item.label}</span>
          <Meteors number={100} />
        </motion.section>
      ))}
    </section>
  );
  const bannerBestSell = () => (
    <section className={cn(styles.bannerBestSeller, inter.className)}>
      <Image
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        alt='image'
        src='https://ucarecdn.com/69358f7c-7e08-47b9-908e-e27b249f2be8/ImagePlaceholder3.png'
        fill
      />
      <motion.section
        whileInView={{
          x: [150, 0]
        }}
        transition={{ duration: 0.5 }}
        className='banner-content'
      >
        <motion.span
          whileInView={{
            y: [50, 0],
            opacity: [0, 1]
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          SALE UP TO 35% OFF
        </motion.span>
        <motion.h3
          whileInView={{
            y: [50, 0],
            opacity: [0, 1]
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={poppins.className}
        >
          HUNDREDS of New lower prices!
        </motion.h3>
        <motion.p
          whileInView={{
            y: [50, 0],
            opacity: [0, 1]
          }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          It’s more affordable than ever to give every room in your home a stylish{' '}
        </motion.p>
        <motion.div
          whileInView={{
            y: [50, 0],
            opacity: [0, 1]
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <LinkButton href='/products' reverseMode>
            Show Now
          </LinkButton>
        </motion.div>
      </motion.section>
    </section>
  );

  return (
    <main className='iu-d-flexcolumn'>
      <HomeSlider />
      {headingHome()}
      {mainProduct()}
      <ListProduct />
      {supportCustomer()}
      {bannerBestSell()}
      <div className='w-full'>
        <InfiniteMovingCards pauseOnHover={false} items={listQuotes} direction='left' speed='slow' />
      </div>
      <ArticlesPart />
      <Newsleetter />
    </main>
  );
}
