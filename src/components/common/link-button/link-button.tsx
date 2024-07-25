import React from 'react';
import ArrowRightIcon from '@components/icons/arrow-right';
import { Button } from '@components/ui/button';
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import styles from './link-button.module.scss';

type LinkButtonProps = {
  children: React.ReactNode;
  className?: string;
  currentColor?: string;
  classNameSpan?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, className, currentColor, classNameSpan }) => {
  return (
    <Button
      reset
      variant='link'
      className={cn(styles.linkButtonWrapper, 'dark:hover:!border-primary_light', className)}
    >
      <span className={cn(inter.className, 'dark:!text-primary_light', classNameSpan)}>{children}</span>
      <ArrowRightIcon currentColor={currentColor} />
    </Button>
  );
};
export default LinkButton;
