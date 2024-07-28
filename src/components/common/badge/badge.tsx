import React from 'react';
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import styles from './badge.module.scss';

type BadgeProps = {
  label: string | number;
  className?: string | number;
};

const Badge: React.FC<BadgeProps> = ({ label, className }) => {
  return (
    <span className={cn('bg-white text-primary_dark', className, styles.badgeWrapper, inter.className)}>{label}</span>
  );
};

export default Badge;
