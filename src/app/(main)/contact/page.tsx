import React from 'react';
import LinkButton from '@components/common/link-button/link-button';
import { poppins } from '@lib/fonts';
import Image from 'next/image';
import styles from './contact-page.module.scss';

const ContactPage = () => {
  return (
    <section className={styles.contactPage}>
      <h1 className={poppins.className}>We believe in sustainable decor. We’re passionate about life at home.</h1>
      <p>
        Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which
        can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations,
        faithful to the shapes of each period, with a touch of the present
      </p>
      <div className='contact-image'>
        <Image
          alt='contact-image'
          fill
          src='https://ucarecdn.com/69358f7c-7e08-47b9-908e-e27b249f2be8/ImagePlaceholder3.png'
        />
        <div className='flex-1'>
          <h3>About Us</h3>
          <p>
            3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. Our customer service is always
            prepared to support you 24/7
          </p>
          <LinkButton href='fff'>Shop now</LinkButton>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
