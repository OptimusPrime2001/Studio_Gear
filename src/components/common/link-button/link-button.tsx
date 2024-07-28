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
  reverseMode?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, className, currentColor, reverseMode }) => {
  return (
    <Button
      reset
      variant='link'
      className={cn(
        styles.linkButtonWrapper,
        className,
        reverseMode ? 'dark:hover:!border-primary_dark' : 'dark:hover:!border-primary_light'
      )}
    >
      <span
        className={cn(inter.className, reverseMode ? 'dark:text-primary_dark' : 'dark:hover:!border-primary_light')}
      >
        {children}
      </span>
      <ArrowRightIcon currentColor={currentColor} />
    </Button>
  );
};
export default LinkButton;
