import LinkButton from '@components/common/link-button/link-button';
import { listMainProduct, listSupportCustomer } from '@lib/constant';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Image from 'next/image';
import ArticlesPart from './_components/articles/articles';
import HomeSlider from './_components/home-slider/home-slider';
import ListProduct from './_components/list-product/list-product';
import Newsleetter from './_components/newsletter/newsletter';
import '@styles/global.scss';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className='iu-d-flexcolumn'>
      <HomeSlider />
      <section className={cn(styles.headingHomeWrapper, 'media_width_sm')}>
        <div className={cn(poppins.className, 'dark:!text-primary_light')}>
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
              <LinkButton reverseMode>Shop Now</LinkButton>
            </section>
            <Image priority fill alt={item.label} src={item.img} />
          </div>
        ))}
      </section>
      <ListProduct />
      <section className={cn(styles.supportWrapper, 'media_width_sm')}>
        {listSupportCustomer.map(item => (
          <section key={item.id}>
            <item.icon />
            <p className={poppins.className}>{item.title}</p>
            <span>{item.label}</span>
          </section>
        ))}
      </section>
      <section className={cn(styles.bannerBestSeller, inter.className)}>
        <Image alt='image' src='https://ucarecdn.com/69358f7c-7e08-47b9-908e-e27b249f2be8/ImagePlaceholder3.png' fill />
        <section className='banner-content'>
          <span>SALE UP TO 35% OFF</span>
          <h3 className={poppins.className}>HUNDREDS of New lower prices!</h3>
          <p>It’s more affordable than ever to give every room in your home a stylish </p>
          <LinkButton reverseMode>Show Now</LinkButton>
        </section>
        <section />
      </section>
      <ArticlesPart />
      <Newsleetter />
    </main>
  );
}
