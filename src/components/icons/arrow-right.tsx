import React from 'react';

type ArrowRightIconProps = {
  className?: string;
  onClick?: () => void;
};

const ArrowRightIcon: React.FC<ArrowRightIconProps> = props => {
  return (
    <span className={props.className} onClick={props.onClick}>
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.75 9H14.25' stroke='#377DFF' strokeWidth='1.125' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M9.75 13.5L14.25 9'
          stroke='#377DFF'
          strokeWidth='1.125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M9.75 4.5L14.25 9' stroke='#377DFF' strokeWidth='1.125' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </span>
  );
};

export default ArrowRightIcon;
