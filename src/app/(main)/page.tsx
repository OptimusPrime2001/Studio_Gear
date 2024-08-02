'use client';
import React, { useRef } from 'react';
import LinkButton from '@components/common/link-button/link-button';
import { InfiniteMovingCards } from '@components/ui/infinite-moving-cards';
import { Meteors } from '@components/ui/meteors';
import { listMainProduct, listQuotes, listSupportCustomer } from '@lib/constant';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { animate, ElementOrSelector, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import ArticlesPart from './_modules/articles/articles';
import HomeSlider from './_modules/home-slider/home-slider';
import ListProduct from './_modules/list-product/list-product';
import Newsleetter from './_modules/newsletter/newsletter';
import styles from './page.module.scss';

export default function HomePage() {
  const headingHomeref = useRef<HTMLDivElement>(null);
  const isHeadingHomeInView = useInView(headingHomeref);
  React.useEffect(() => {
    if (isHeadingHomeInView) {
      animate(headingHomeref.current as ElementOrSelector, { x: [-100, 0] }, { duration: 0.5 });
    }
  }, [isHeadingHomeInView]);
  return (
    <main className='iu-d-flexcolumn'>
      <HomeSlider />
      <section className={cn(styles.headingHomeWrapper, 'media_width_sm')}>
        <motion.div
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(poppins.className, 'dark:!text-primary_light')}
        >
          <span>Simply Unique/</span>
          <span>Simply Better.</span>{' '}
        </motion.div>
        <motion.div
          className={cn(inter.className, 'dark:!text-primary_blur')}
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <b className='dark:!text-primary_light'>Ben Beckman</b> is a gift & decorations store based in HCMC, Vietnam.
          Est since 2019.{' '}
        </motion.div>
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
          <motion.section
            whileInView={{
              y: [150, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='relative overflow-hidden bg-primary_dark dark:bg-primary_light'
            key={item.id}
          >
            <item.icon />
            <p className={poppins.className}>{item.title}</p>
            <span>{item.label}</span>
            <Meteors number={20} />
          </motion.section>
        ))}
      </section>
      <section className={cn(styles.bannerBestSeller, inter.className)}>
        <Image alt='image' src='https://ucarecdn.com/69358f7c-7e08-47b9-908e-e27b249f2be8/ImagePlaceholder3.png' fill />
        <motion.section
          viewport={{ once: true }}
          whileInView={{
            x: [150, 0]
          }}
          transition={{ duration: 0.5 }}
          className='banner-content'
        >
          <motion.span
            viewport={{ once: true }}
            whileInView={{
              y: [50, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            SALE UP TO 35% OFF
          </motion.span>
          <motion.h3
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            whileInView={{
              y: [50, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            It’s more affordable than ever to give every room in your home a stylish{' '}
          </motion.p>
          <motion.div
            viewport={{ once: true }}
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
      <div className='w-full'>
        <InfiniteMovingCards pauseOnHover={false} items={listQuotes} direction='left' speed='slow' />
      </div>
      <ArticlesPart />
      <Newsleetter />
    </main>
  );
}
