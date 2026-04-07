'use client';
import { useEffect, useState } from 'react';

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'Micro-frontends',
  'Tailwind CSS',
  'Zustand',
  'React Query',
  'Storybook',
  'Jest',
  'Webpack',
  'React',
  'TypeScript',
  'Next.js',
  'Micro-frontends',
  'Tailwind CSS',
  'Zustand',
  'React Query',
  'Storybook',
  'Jest',
  'Webpack',
];

const stats = [
  { value: '5', suffix: 'yrs', label: 'Experience' },
  { value: '2', suffix: 'industries', label: 'Fintech · Healthtech' },
  { value: '10', suffix: '+', label: 'Technologies' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-0"
    >
      {/* Gradient blobs */}
      <div className="blob w-[700px] h-[700px] bg-indigo/30 top-[-250px] right-[-200px]" />
      <div className="blob w-[500px] h-[500px] bg-violet/20 bottom-[5%] left-[-150px]" />
      <div className="blob w-[350px] h-[350px] bg-amber/25 top-[30%] right-[5%]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Badge row */}
        {/* <div
          className={`flex flex-wrap items-center gap-3 mb-10 ${mounted ? 'animate-slide-up' : 'anim-hidden'}`}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white shadow-sm border border-black/5
            font-mono text-xs text-muted"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Open to UK roles
          </span>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-indigo/10 border border-indigo/20
            font-mono text-xs text-indigo"
          >
            Skilled Worker Visa sponsorship required
          </span>
        </div> */}

        {/* Headline */}
        <div className={`mb-4 ${mounted ? 'animate-slide-up delay-100' : 'anim-hidden'}`}>
          <h1
            className="font-sans font-800 text-ink leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(3.8rem, 10vw, 8.5rem)' }}
          >
            Frontend
          </h1>
        </div>
        <div className={`mb-12 ${mounted ? 'animate-slide-up delay-200' : 'anim-hidden'}`}>
          <h1
            className="font-sans font-800 leading-[0.92] tracking-tight"
            style={{
              fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
              background: 'linear-gradient(135deg, #5b50f0 0%, #7c3aed 50%, #f43f5e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Engineer.
          </h1>
        </div>

        {/* Two-col body */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-14 ${mounted ? 'animate-slide-up delay-300' : 'anim-hidden'}`}
        >
          <div>
            <p className="font-sans text-lg text-muted leading-relaxed mb-5">
              5 years building production interfaces in{' '}
              <span className="text-ink font-600">fintech and healthtech</span>. Specialising in
              React, TypeScript, and micro-frontend architectures that scale.
            </p>
            <p className="font-sans text-sm text-subtle leading-relaxed">
              Currently leading frontend at{' '}
              <span className="text-ink font-600">China Minsheng Bank</span>. Previously at{' '}
              <span className="text-ink font-600">Airdoc Technology</span>.
            </p>
          </div>
          <div className="flex items-center gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p
                  className="font-sans font-bold text-ink"
                  style={{ fontSize: '2.5rem', lineHeight: 1 }}
                >
                  {s.value}
                  <span className="text-indigo text-2xl">{s.suffix}</span>
                </p>
                <p className="font-mono text-xs text-muted mt-1 tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 ${mounted ? 'animate-slide-up delay-400' : 'anim-hidden'}`}
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full font-sans font-700 text-sm text-white
              bg-gradient-to-r from-indigo to-violet
              shadow-lg shadow-indigo/30
              hover:shadow-indigo/50 hover:scale-[1.03]
              transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full font-sans font-700 text-sm text-muted
              bg-white border border-black/8 shadow-sm
              hover:border-indigo/30 hover:text-indigo hover:shadow-md
              transition-all duration-200"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Marquee tech strip */}
      <div
        className={`relative z-10 mt-20 border-t border-b border-black/6 py-4 bg-white/60 backdrop-blur-sm overflow-hidden ${mounted ? 'animate-fade-in delay-500' : 'anim-hidden'}`}
      >
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs text-muted px-3 py-1 rounded-full bg-black/4 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
