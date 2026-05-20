'use client';
import React, { useState, useCallback } from 'react';
import Loader from '@/components/Loader';
import LeftColumn from '@/components/LeftColumn';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const NAV_SECTIONS = ['about', 'experience', 'projects', 'contact'];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  if (isLoading) return <Loader finishLoading={finishLoading} />;

  return (
    <div className="min-h-screen bg-nord-0">
      {/* Skip to content — accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-nord-2 focus:text-nord-10 focus:rounded font-mono text-sm"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Two-column: sticky left + scrolling right */}
        <div className="lg:flex lg:gap-4">

          {/* ── Left column (sticky on desktop) ── */}
          <LeftColumn sectionIds={NAV_SECTIONS} />

          {/* ── Right column (scrollable content) ── */}
          <main
            id="content"
            className="pt-24 pb-24 lg:pt-24 lg:w-1/2 lg:ml-auto"
            style={{ counterReset: 'section' }}
          >
            <About />
            <Experience />
            <Projects />
            <Contact />

            {/* Footer */}
            <footer className="mt-24 text-nord-4 font-mono text-xs leading-relaxed">
              <p>
                Built by Sam Leyva &mdash; design by{' '}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nord-5 hover:text-nord-10 transition-colors duration-200"
                >
                  Brittany Chiang
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
