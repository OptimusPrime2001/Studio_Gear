import React from 'react';
import HeartIcon from '@components/icons/heart';
import { Button } from '@components/ui/button';
import styles from './wish-button.module.scss';

type WhishButtonProps = {
  handleClick?: () => void;
};

const WhishButton: React.FC<WhishButtonProps> = ({ handleClick }) => {
  return (
    <Button onClick={handleClick} className={styles.whishButtonWrapper}>
      <HeartIcon />
    </Button>
  );
};

export default WhishButton;
