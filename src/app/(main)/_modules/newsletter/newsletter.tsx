import React from 'react';
import EmailIcon from '@components/icons/email';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { inter, poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import styles from './newsletter.module.scss';

const Newsleetter: React.FC = () => {
  return (
    <section className={styles.newsletterWrapper}>
      <h2 className={cn(poppins.className, 'dark:text-black')}>Join Our Newsletter</h2>
      <p className={cn(inter.className, 'dark:text-black')}>Sign up for deals, new products and promotions</p>
      <form className='flex w-full max-w-md items-center space-x-2' action=''>
        <EmailIcon className='sm:hidden' />
        <Input className='dark:text-black' type='email' placeholder='Email address' />
        <Button type='submit'>Signup</Button>
      </form>
    </section>
  );
};

export default Newsleetter;
