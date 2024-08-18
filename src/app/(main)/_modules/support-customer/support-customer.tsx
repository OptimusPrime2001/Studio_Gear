import React from 'react';
import { Meteors } from '@components/ui/meteors';
import { listSupportCustomer } from '@lib/constant';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import styles from './support-customer.module.scss';

const SupportCustomer: React.FC<{ className: string }> = ({ className }) => {
  return (
    <section className={cn(styles.supportCustomerWrapper, 'media_width_sm', className)}>
      {listSupportCustomer.map((item, index) => (
        <motion.section
          whileInView={{
            y: [150, 0]
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='relative overflow-hidden bg-neutral_07 dark:bg-neutral_00'
          key={item.id}
        >
          <item.icon />
          <p className={poppins.className}>{item.title}</p>
          <span>{item.label}</span>
          <Meteors number={100} />
        </motion.section>
      ))}
    </section>
  );
};

export default SupportCustomer;
