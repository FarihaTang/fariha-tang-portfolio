'use client';
import { useRef, useState, useCallback } from 'react';

interface Project {
  index: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  gradFrom: string;
  gradTo: string;
  bgLight: string;
  iconColor: string;
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Finance Dashboard',
    description:
      'Data-rich analytics dashboard with real-time charts, portfolio tracking, and transaction history. Optimised for performance with virtualised lists and memoized renders.',
    stack: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS', 'React Query'],
    github: '#',
    live: '#',
    gradFrom: '#5b50f0',
    gradTo: '#7c3aed',
    bgLight: '#f5f3ff',
    iconColor: '#5b50f0',
  },
  {
    index: '02',
    title: 'React Component Library',
    description:
      'Production-ready UI library with Storybook docs, full TypeScript types, and accessibility baked in. Covers 40+ components following atomic design principles.',
    stack: ['React', 'TypeScript', 'Storybook', 'Vitest', 'Rollup'],
    github: 'https://github.com/FarihaTang/react-component-library',
    live: 'https://react-component-library-farihatang.vercel.app/',
    gradFrom: '#0ea5e9',
    gradTo: '#10b981',
    bgLight: '#f0fdf4',
    iconColor: '#0ea5e9',
  },
  {
    index: '03',
    title: 'Mini Full-Stack App',
    description:
      'Full-stack app with auth, real-time data, and row-level security. End-to-end TypeScript from Supabase schema to UI — a pattern common in modern fintech products.',
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Zod'],
    github: '#',
    live: '#',
    gradFrom: '#f43f5e',
    gradTo: '#f59e0b',
    bgLight: '#fff7ed',
    iconColor: '#f43f5e',
  },
];

function TiltCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
  );
  const [shadow, setShadow] = useState('0 4px 24px rgba(0,0,0,0.06)');
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotX = (y - 0.5) * -14;
    const rotY = (x - 0.5) * 14;
    setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`);
    setShadow(`${rotY * -1}px ${rotX}px 40px rgba(0,0,0,0.12), 0 20px 60px rgba(0,0,0,0.08)`);
    setShine({ x: x * 100, y: y * 100, opacity: 0.15 });
  }, []);

  const onMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setShadow('0 4px 24px rgba(0,0,0,0.06)');
    setShine(prev => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card relative rounded-2xl bg-white cursor-default"
      style={{ transform, boxShadow: shadow, transition: 'box-shadow 0.3s ease' }}
    >
      {/* Gradient border via outline trick */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.gradFrom}30, ${project.gradTo}30)`,
          padding: '1.5px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Shine layer */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          opacity: shine.opacity,
          transition: 'opacity 0.2s ease',
        }}
      />

      <div className="tilt-card-inner relative z-10 p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-500 text-sm"
            style={{
              background: `linear-gradient(135deg, ${project.gradFrom}, ${project.gradTo})`,
            }}
          >
            {project.index}
          </div>
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full"
            style={{ background: `${project.iconColor}12`, color: project.iconColor }}
          >
            In progress
          </span>
        </div>

        {/* Title */}
        <h3 className="font-sans font-800 text-ink text-xl mb-3 tracking-tight leading-tight">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-muted leading-relaxed mb-6">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map(tech => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            className="flex items-center gap-1.5 font-sans font-600 text-sm text-muted hover:text-ink transition-colors duration-150"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span className="text-black/15">·</span>
          <a
            href={project.live}
            className="flex items-center gap-1.5 font-sans font-700 text-sm px-4 py-2 rounded-full text-white
              transition-all duration-200 hover:scale-[1.04] hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${project.gradFrom}, ${project.gradTo})`,
              boxShadow: `0 4px 14px ${project.gradFrom}40`,
            }}
          >
            Live demo
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="blob w-[600px] h-[400px] bg-indigo/15 top-0 right-[-100px]" />
      <div className="blob w-[400px] h-[400px] bg-amber/15 bottom-0 left-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="font-mono text-xs text-indigo tracking-widest uppercase mb-3 block">
              Selected work
            </span>
            <h2
              className="font-sans font-800 text-ink tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}
            >
              Projects
            </h2>
          </div>
          {/* <p className="font-sans text-sm text-muted max-w-xs leading-relaxed">
            Built H1 2026 as part of UK job search prep. All deployed on Vercel.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <TiltCard key={p.index} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
