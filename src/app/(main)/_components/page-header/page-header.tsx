'use client';
import React from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@components/ui/carousel';
import Image from 'next/image';
import styles from './page-header.module.scss';
import { Span } from 'next/dist/trace';
import { cn } from '@lib/utils';
import { listSlider } from '@lib/constant';
type HomeSliderProps = {};

const HomeSlider: React.FC<HomeSliderProps> = props => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const onClickIndexSlider = (id: number) => {
    setCurrent(id);
    api?.scrollTo(id, false);
  };
  return (
    <section className={cn(styles.pageHeaderWrapper, 'media_width_sm')}>
      <Carousel setApi={setApi} className='w-full h-full'>
        <CarouselContent className='w-full h-full m-0'>
          {listSlider.map(({ id, img }) => (
            <CarouselItem className='relative p-0' key={id}>
              <Image priority className='object-cover' fill src={img} alt='img_slide' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-8 bg-white' />
        <CarouselNext className='right-8 bg-white' />
        <section className='iu-d-flexcenter slider-navigation'>
          {listSlider.map(item => (
            <span
              key={item.id}
              onClick={() => onClickIndexSlider(item.id)}
              className={cn('slider-dot', current === item.id ? 'slide-active' : '')}
            />
          ))}
        </section>
      </Carousel>
    </section>
  );
};

export default HomeSlider;
