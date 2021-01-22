/** @format */

import React, { ReactElement } from 'react';

type ChevronLeftProps = {
  size: number;
  color: string;
  className: string;
  onClick: () => void;
};

const ChevronLeft = ({
  size = 24,
  color = '#000000',
  className,
  onClick
}: ChevronLeftProps): ReactElement => (
  <div className={className} onClick={onClick}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M15 18l-6-6 6-6' />
    </svg>
  </div>
);

export default ChevronLeft;
