'use client';
import React from 'react';
import LinkButton from '@components/common/link-button/link-button';
import ProductCard from '@components/common/product-card/product-card';
import { poppins } from '@lib/fonts';
import { uniqueArray } from '@lib/utils';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './list-product.module.scss';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ListProduct: React.FC = () => {
  return (
    <section className={styles.listProductWrapper}>
      <div className='list-product_title iu-d-flexbetween'>
        <h3 className={poppins.className}>New Arrivals</h3>
        <LinkButton>More Products</LinkButton>
      </div>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={24}
        scrollbar={{
          hide: false,
          draggable: true
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 16
          },
          410: {
            slidesPerView: 2.5,
            spaceBetween: 18
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 24
          },
          1280: {
            slidesPerView: 5.5,
            spaceBetween: 28
          },
          1440: {
            slidesPerView: 6.5,
            spaceBetween: 32
          },
          1536: {
            slidesPerView: 7.5,
            spaceBetween: 36
          }
        }}
        modules={[Scrollbar]}
        className='swipper-product'
      >
        {uniqueArray(10).map(item => (
          <SwiperSlide key={item}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ListProduct;
