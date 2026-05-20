import React from 'react';
import Image from 'next/image';

export default function About() {
  const skills = ['C# / .NET', 'TypeScript', 'React / Next.js', 'Docker', 'Python', 'Linux'];

  return (
    <section id="about" className="mb-24 scroll-mt-24">
      <h2 className="font-mono text-xs tracking-widest uppercase text-nord-10 mb-8 lg:sr-only">
        About
      </h2>

      <div className="space-y-4 text-nord-5 leading-relaxed">
        <p>
          Hey! I&apos;m Sam, a software engineer from{' '}
          <span className="text-nord-7 font-medium">Los Angeles, CA</span>. I have a natural
          curiosity for the underlying technologies powering modern systems and a genuine love for
          building things that work well.
        </p>
        <p>
          I&apos;m an avid lover of tech who enjoys programming and would love to contribute to the
          continued development of modern software. Whether it&apos;s architecting a backend service,
          wiring up a frontend experience, or automating the tedious bits in between — I&apos;m
          interested in all of it.
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs text-nord-5">
        {skills.map(skill => (
          <li key={skill} className="flex items-center gap-2">
            <span className="text-nord-10">▹</span>
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-10 max-w-[220px]">
        <div className="relative group rounded overflow-hidden border-2 border-nord-3 hover:border-nord-10 transition-colors duration-300">
          <Image
            src="/me.jpg"
            alt="Sam Leyva"
            width={440}
            height={440}
            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-nord-10/20 group-hover:opacity-0 transition-opacity duration-500 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
