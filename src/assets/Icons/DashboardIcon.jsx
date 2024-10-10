import * as React from 'react';

export const DashboardIcon = ({ width, height, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width || 24}
    height={height || 24}
    viewBox='0 0 24 24'
    color='currentColor'
    {...props}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    >
      <path d='M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z' />
      <path d='M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21' />
    </g>
  </svg>
);
