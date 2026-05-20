import React from 'react';
import { email } from '@/config';

export default function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-24">
      <h2 className="font-mono text-xs tracking-widest uppercase text-nord-10 mb-8 lg:sr-only">
        Contact
      </h2>

      <div className="max-w-md">
        <p className="font-mono text-xs text-nord-10 tracking-widest uppercase mb-3">
          What&apos;s Next?
        </p>
        <h3 className="text-4xl font-bold text-nord-7 mb-6">Get In Touch</h3>
        <p className="text-nord-5 leading-relaxed mb-8">
          I&apos;m actively seeking new opportunities and would be excited to hear from you. Drop by
          my inbox for any questions or remarks, and I&apos;ll try my best to get back to you.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block font-mono text-sm text-nord-10 border border-nord-10 rounded px-7 py-4 hover:bg-nord-10/10 transition-colors duration-200"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
