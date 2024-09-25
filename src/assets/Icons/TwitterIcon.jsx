import * as React from "react";

export const TwitterIcon = ({ width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "1em"}
    height={height || "1em"}
    viewBox="0 0 48 48"
    color="white"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M5 35.762c1.929 1.067 15.891 9.115 25.82 2.912s9.38-16.89 9.38-21.788c.9-1.884 2.8-2.842 2.8-7.942q-2.799 2.585-5.565 1.76q-2.709-4.131-7.456-3.655c-4.746.477-6.482 5.133-5.971 11.158c-7.318 3.7-13.056-2.683-16.014-7.503c-.988 3.796-1.94 8.354 0 13.395q1.942 5.042 9.331 8.526Q9.835 36.685 5 35.762Z"
    />
  </svg>
);
