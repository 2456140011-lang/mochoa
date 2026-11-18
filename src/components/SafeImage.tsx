import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  aspectClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F4EBDD] via-[#E7C5C0]/40 to-[#D8C9B7] text-[#735748] p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Flower2 className="w-8 h-8 mb-2 text-[#A77B5B]" strokeWidth={1.5} />
        <p className="text-xs font-medium text-[#735748] max-w-[200px] leading-relaxed">
          {alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-cover ${aspectClassName} ${className}`}
    />
  );
};
