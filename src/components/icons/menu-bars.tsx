import React from 'react';

type MenuIconProps = {
  className?: string;
  onClick?: () => void;
};

const MenuBars = (props: MenuIconProps) => {
  const { className, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 8H17M7 12H17M7 16H17' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      </svg>
    </span>
  );
};

export default MenuBars;
