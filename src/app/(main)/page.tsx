import ArrowRightIcon from '@components/icons/arrow-right';
import { Button } from '@components/ui/button';
import { listMainProduct } from '@lib/constant';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Image from 'next/image';
import ArticlesPart from './_components/articles/articles';
import Newsleetter from './_components/newsletter/newsletter';
import HomeSlider from './_components/page-header/page-header';
import '@styles/global.scss';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className='flex flex-col items-center justify-between'>
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
              <Button reset variant='link' className='shop-now mt-2 md:mt-3'>
                <span className={cn(inter.className, 'dark:!text-primary_dark')}>Shop now</span>
                <ArrowRightIcon />
              </Button>
            </section>
            <Image fill alt={item.label} src={item.img} />
          </div>
        ))}
      </section>
      <ArticlesPart />
      <Newsleetter />
    </main>
  );
}
