'use client';
import React, { useState } from 'react';
import { jobs } from '@/content/data';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <h2 className="font-mono text-xs tracking-widest uppercase text-nord-10 mb-8 lg:sr-only">
        Experience
      </h2>

      {/* Tab list — mobile: horizontal scroll, desktop: vertical */}
      <div className="flex lg:flex-row flex-col gap-0 lg:gap-8">
        {/* Tab buttons */}
        <div
          role="tablist"
          aria-label="Job tabs"
          className="
            flex lg:flex-col
            overflow-x-auto lg:overflow-x-visible
            border-b lg:border-b-0 lg:border-l border-nord-3
            shrink-0 mb-6 lg:mb-0
            -mx-6 px-6 lg:mx-0 lg:px-0
          "
        >
          {jobs.map((job, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeIdx === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              onClick={() => setActiveIdx(i)}
              className={`
                relative shrink-0
                px-4 py-3 lg:px-5
                font-mono text-xs whitespace-nowrap
                text-left transition-all duration-150
                lg:border-l-2 border-b-2 lg:border-b-0 -mb-px lg:mb-0
                focus:outline-none focus-visible:ring-2 focus-visible:ring-nord-10
                ${activeIdx === i
                  ? 'text-nord-10 border-nord-10 bg-nord-10/5'
                  : 'text-nord-4 border-transparent hover:text-nord-6 hover:bg-nord-2/30'
                }
              `}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        <div className="flex-1 min-w-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              hidden={activeIdx !== i}
            >
              <h3 className="text-lg font-semibold text-nord-7 leading-snug mb-1">
                {job.title}
                <span className="text-nord-10">
                  {' '}@{' '}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-nord-8 transition-colors duration-200 border-b border-nord-10/40 hover:border-nord-8"
                  >
                    {job.company}
                  </a>
                </span>
              </h3>
              <p className="font-mono text-xs text-nord-4 mb-5">{job.range}</p>
              <ul className="space-y-3">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-nord-5 text-sm leading-relaxed">
                    <span className="text-nord-10 mt-1 shrink-0">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Resume link */}
      <div className="mt-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-nord-7 border border-nord-10/40 hover:border-nord-10 hover:text-nord-10 rounded px-5 py-3 transition-all duration-200 group"
        >
          View Full Résumé
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
