import React from 'react';
import Image from 'next/image';
import { featuredProjects, projects } from '@/content/data';
import { IconGitHub, IconExternal, IconFolder } from '@/components/icons/index';

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <h2 className="font-mono text-xs tracking-widest uppercase text-nord-10 mb-8 lg:sr-only">
        Projects
      </h2>

      {/* Featured projects */}
      <div className="space-y-16 mb-16">
        {featuredProjects.map((project, i) => (
          <div key={i} className="group relative">
            {/* Image — fades on hover over card */}
            <div className="relative rounded overflow-hidden mb-4 border border-nord-3 group-hover:border-nord-10/40 transition-colors duration-300">
              <Image
                src={project.cover}
                alt={project.title}
                width={700}
                height={438}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-nord-10/10 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            <div>
              <p className="font-mono text-xs text-nord-10 mb-1">Featured Project</p>
              <h3 className="text-xl font-semibold text-nord-7 mb-3 group-hover:text-nord-10 transition-colors duration-200">
                {project.external || project.github ? (
                  <a
                    href={project.external || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-nord-10 transition-colors"
                  >
                    {project.title}
                  </a>
                ) : project.title}
              </h3>
              <p className="text-nord-5 text-sm leading-relaxed mb-4">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <li key={t} className="font-mono text-xs text-nord-8 bg-nord-10/10 px-2 py-1 rounded">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 items-center">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-nord-4 hover:text-nord-10 transition-colors duration-200">
                    <IconGitHub className="w-5 h-5" />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-nord-4 hover:text-nord-10 transition-colors duration-200">
                    <IconExternal className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other projects grid */}
      <h3 className="text-nord-7 font-semibold text-lg mb-6">Other Noteworthy Projects</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.filter(p => p.showInProjects !== false).map((project, i) => (
          <div
            key={i}
            className="group relative flex flex-col bg-nord-2 rounded-lg p-6 border border-nord-3 hover:border-nord-10/40 hover:-translate-y-1 transition-all duration-200"
          >
            {/* Top row */}
            <div className="flex justify-between items-start mb-5">
              <IconFolder className="w-9 h-9 text-nord-10" />
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-nord-4 hover:text-nord-10 transition-colors duration-200">
                    <IconGitHub className="w-4 h-4" />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External" className="text-nord-4 hover:text-nord-10 transition-colors duration-200">
                    <IconExternal className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-nord-7 font-semibold mb-2 group-hover:text-nord-10 transition-colors duration-200">
              {project.title}
            </h4>
            <p className="text-nord-5 text-sm leading-relaxed flex-1">{project.description}</p>

            <ul className="flex flex-wrap gap-2 mt-4">
              {project.tech.map(t => (
                <li key={t} className="font-mono text-xs text-nord-4">{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
