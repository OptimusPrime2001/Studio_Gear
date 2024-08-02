import React from 'react';
import { Minus } from '@components/icons/minus';
import { Plus } from '@components/icons/plus';
import { cn } from '@lib/utils';
import styles from './quantity-selector.module.scss';

type QuantitySelectorProps = {
  className?: string;
  count: number;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ className, count }) => {
  return (
    <div className={cn(styles.quantitySelectorWrapper, className)}>
      <Minus />
      <span>{count}</span>
      <Plus />
    </div>
  );
};

export default QuantitySelector;
