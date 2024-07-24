import React from 'react';
import ArrowRightIcon from '@components/icons/arrow-right';
import { Button } from '@components/ui/button';
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import styles from './link-button.module.scss';

type LinkButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, className }) => {
  return (
    <Button
      reset
      variant='link'
      className={cn(className, styles.linkButtonWrapper, 'dark:hover:!border-primary_light')}
    >
      <span className={cn(inter.className, 'dark:!text-primary_light')}>{children}</span>
      <ArrowRightIcon />
    </Button>
  );
};
export default LinkButton;
