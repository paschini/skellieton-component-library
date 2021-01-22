/** @format */

import React, { ReactElement } from 'react';

type ChevronRightProps = {
  size: number;
  color: string;
  className: string;
  onClick: () => void;
};

const ChevronRight = ({
  size = 24,
  color = '#000000',
  className,
  onClick
}: ChevronRightProps): ReactElement => (
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
      <path d='M9 18l6-6-6-6' />
    </svg>
  </div>
);
export default ChevronRight;
