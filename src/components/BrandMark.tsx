import React from 'react';

interface BrandMarkProps {
  className?: string;
}

/**
 * Custom Mộc hoa emblem:
 * Soft chenille flower stem rising from an open envelope / folded paper silhouette,
 * tied with a small natural twine bow at the base.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'w-14 h-14' }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Biểu tượng Mộc hoa"
    >
      {/* Folded envelope / open paper shape */}
      <path
        d="M16 36L40 50L64 36V62C64 64.2091 62.2091 66 60 66H20C17.7909 66 16 64.2091 16 62V36Z"
        fill="#F4EBDD"
        stroke="#735748"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M16 36L40 22L64 36"
        stroke="#A77B5B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 64L34 47M62 64L46 47"
        stroke="#D8C9B7"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Soft chenille flower stem & leaves */}
      <path
        d="M40 46V20"
        stroke="#735748"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M40 38C34 38 30 34 30 29C35 29 39 33 40 38Z"
        fill="#A6AD91"
        stroke="#735748"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M40 35C46 35 50 31 50 26C45 26 41 30 40 35Z"
        fill="#A6AD91"
        stroke="#735748"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Velvet pink chenille tulip/blossom */}
      <path
        d="M32 20C32 13.5 36 10 40 10C44 10 48 13.5 48 20C48 24.5 44.5 27.5 40 27.5C35.5 27.5 32 24.5 32 20Z"
        fill="#E7C5C0"
        stroke="#735748"
        strokeWidth="1.6"
      />
      <path
        d="M36 12C38.5 16 38.5 22 40 27.5C41.5 22 41.5 16 44 12"
        stroke="#A77B5B"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Small twine bow at the bottom */}
      <path
        d="M32 66C34 62 38 62 40 66C42 62 46 62 48 66C46 69 42 68.5 40 66C38 68.5 34 69 32 66Z"
        fill="#D8C9B7"
        stroke="#735748"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M40 66L35 73M40 66L45 73"
        stroke="#A77B5B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
};
