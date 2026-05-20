'use client';
import React from 'react';
import Link from 'next/link';
import { IconLogo, IconGitHub, IconLinkedIn } from '@/components/icons/index';
import { useScrollSpy } from '@/hooks';
import { email } from '@/config';

const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

const SOCIAL = [
  { label: 'GitHub',   href: 'https://github.com/montblac',                          Icon: IconGitHub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuel-l-558366112/',       Icon: IconLinkedIn },
];

export default function LeftColumn({ sectionIds }: { sectionIds: string[] }) {
  const activeId = useScrollSpy(sectionIds, 120);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-24 pb-12">
      <div>
        {/* Logo + Name */}
        <div className="mb-4">
          <Link href="/" aria-label="home" className="inline-block mb-6 text-nord-10 hover:text-nord-8 transition-colors duration-200">
            <IconLogo className="w-10 h-10" />
          </Link>
          <h1 className="text-4xl font-bold text-nord-7 tracking-tight leading-none mb-2">
            Sam Leyva
          </h1>
          <h2 className="text-lg font-medium text-nord-6 mb-4">
            Fullstack Software Engineer
          </h2>
          <p className="text-nord-5 text-sm leading-relaxed max-w-xs">
            I build reliable, thoughtful software and love digging into the tech that makes modern systems tick.
          </p>
        </div>

        {/* Nav — desktop only */}
        <nav className="hidden lg:block mt-12" aria-label="On-page sections">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`group flex items-center gap-4 py-2 transition-all duration-200 ${
                      isActive ? 'text-nord-7' : 'text-nord-4 hover:text-nord-6'
                    }`}
                  >
                    {/* Animated line indicator */}
                    <span
                      className={`block h-px transition-all duration-200 ${
                        isActive
                          ? 'w-12 bg-nord-7'
                          : 'w-6 bg-nord-4 group-hover:w-10 group-hover:bg-nord-6'
                      }`}
                    />
                    <span className="font-mono text-xs tracking-widest uppercase">
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom: social + email */}
      <div className="mt-8 lg:mt-0 flex items-center gap-5">
        {SOCIAL.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-nord-4 hover:text-nord-10 transition-colors duration-200"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
        <a
          href={`mailto:${email}`}
          className="font-mono text-xs text-nord-4 hover:text-nord-10 transition-colors duration-200 ml-1"
        >
          {email}
        </a>
      </div>
    </header>
  );
}
