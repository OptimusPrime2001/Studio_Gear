import React from 'react';
import LinkButton from '@components/common/link-button/link-button';
import { listArticles } from '@lib/constant';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './articles.module.scss';

const ArticlesPart = () => {
  return (
    <section className={cn(styles.articleWrapper, 'media_width_sm')}>
      <motion.div
        whileInView={{ y: [150, 0] }}
        transition={{ duration: 0.5 }}
        className='iu-d-flexbetween article-title'
      >
        <h3 className={poppins.className}>Articles</h3>
        <LinkButton href='/products'>More Articles</LinkButton>
      </motion.div>
      <div className='iu-d-flexbetween article-content'>
        {listArticles.map(item => (
          <motion.div
            whileInView={{ y: [150, 0] }}
            transition={{ duration: 0.5 }}
            className='relative w-full flex-1'
            key={item.id}
          >
            <Image
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='!relative !h-auto object-cover'
              alt={item.label}
              fill
              src={item.img}
            />
            <p className={poppins.className}>{item.label}</p>
            <span className='block'>
              <LinkButton href='/products'>Read More</LinkButton>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default ArticlesPart;
