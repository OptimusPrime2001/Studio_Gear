'use client';
import React from 'react';
import EmailIcon from '@components/icons/email';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import styles from './newsletter.module.scss';

const Newsleetter: React.FC = () => {
  return (
    <section className={styles.newsletterWrapper}>
      <motion.h2
        whileInView={{ y: [100, 0] }}
        transition={{ duration: 0.5 }}
        className={cn(poppins.className, 'dark:text-black')}
      >
        Join Our Newsletter
      </motion.h2>
      <motion.p
        whileInView={{ y: [100, 0] }}
        transition={{ duration: 0.5 }}
        className={cn(inter.className, 'dark:text-black')}
      >
        Sign up for deals, new products and promotions
      </motion.p>
      <motion.form
        whileInView={{ y: [100, 0] }}
        transition={{ duration: 0.5 }}
        className='flex w-full max-w-md items-center space-x-2'
        action=''
      >
        <EmailIcon className='sm:hidden' />
        <Input className='dark:text-black' type='email' placeholder='Email address' />
        <Button className='bg-neutral_07 text-neutral_01 hover:bg-neutral_05' type='submit'>
          Signup
        </Button>
      </motion.form>
    </section>
  );
};

export default Newsleetter;
