'use client';
import React, { useState, useEffect } from 'react';

interface LoaderProps {
  finishLoading: () => void;
}

const Loader = ({ finishLoading }: LoaderProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHiding, setIsHiding]       = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setIsAnimating(true), 50);
    const t2 = setTimeout(() => setIsHiding(true), 2800);
    const t3 = setTimeout(() => {
      document.body.style.overflow = '';
      finishLoading();
    }, 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); document.body.style.overflow = ''; };
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 z-[99] flex items-center justify-center bg-nord-0 transition-opacity duration-300 ${isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className={`w-24 h-24 ${isAnimating ? 'loader-animate' : ''}`}>
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-full h-full text-nord-10"
          role="img"
          aria-label="Loading"
        >
          <g id="logo-letter">
            <text
              x="51" y="67"
              textAnchor="middle"
              fill="currentColor"
              fontSize="50px"
              fontFamily="Lucida Sans Unicode, Lucida Grande, sans-serif"
            >S</text>
          </g>
          <path
            id="hex-path"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M 50,5 L 11,27 L 11,72 L 50,95 L 89,73 L 89,28 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
