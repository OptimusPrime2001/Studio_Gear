import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import React from 'react';
import styles from './newsletter.module.scss';
import { inter, poppins } from '@lib/fonts';
import EmailIcon from '@components/icons/email';
type NewsleetterProps = {};

const Newsleetter: React.FC<NewsleetterProps> = props => {
  return (
    <section className={styles.newsletterWrapper}>
      <h2 className={poppins.className}>Join Our Newsletter</h2>
      <p className={inter.className}>Sign up for deals, new products and promotions</p>
      <form className='flex w-full max-w-sm items-center space-x-2' action=''>
        <EmailIcon className='sm:hidden' />
        <Input type='email' placeholder='Email address' />
        <Button type='submit'>Signup</Button>
      </form>
    </section>
  );
};

export default Newsleetter;
