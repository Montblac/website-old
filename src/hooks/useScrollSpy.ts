'use client';
import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // Find the last section whose top is above the fold threshold
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + scrollY - offset <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
