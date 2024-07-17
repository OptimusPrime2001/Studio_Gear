import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@components/ui/carousel';
import Image from 'next/image';
import styles from './page-header.module.scss';
type HomeSliderProps = {};

const HomeSlider: React.FC<HomeSliderProps> = props => {
  const listSlider = [
    {
      id: 1,
      img: 'https://ucarecdn.com/fb7e4de7-3533-42f8-b153-fc95a73a15ef/Pasteimage.png'
    },
    {
      id: 2,
      img: 'https://ucarecdn.com/725f3667-bf23-446c-a51b-29b3f53bc700/PasteImage2.png'
    }
  ];
  return (
    <section className={styles.pageHeaderWrapper}>
      <Carousel className='w-full h-full'>
        <CarouselContent className='w-full h-full'>
          {listSlider.map(({ id, img }) => (
            <CarouselItem className='relative' key={id}>
              <Image fill src={img} alt='img_slide' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HomeSlider;
