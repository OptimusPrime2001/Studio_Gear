import '@styles/global.scss';
import Newsleetter from './_components/newsletter/newsletter';
import HomeSlider from './_components/page-header/page-header';

export default function HomePage() {
  return (
    <main className='flex  flex-col items-center justify-between'>
      <HomeSlider />
      <Newsleetter />
    </main>
  );
}
