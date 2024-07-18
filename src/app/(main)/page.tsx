import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Newsleetter from './_components/newsletter/newsletter';
import HomeSlider from './_components/page-header/page-header';
import '@styles/global.scss';
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <main className='flex  flex-col items-center justify-between'>
      <HomeSlider />
      <section className={cn(styles.headingHomeWrapper,'media_width_sm')}>
        <div className={cn(poppins.className,'dark:text-primary_light')}><span>Simply Unique/</span>
        <span>Simply Better.</span> </div>
        <p className={inter.className}><b>Ben Beckman</b> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
      </section>
      <Newsleetter />
    </main>
  );
}
