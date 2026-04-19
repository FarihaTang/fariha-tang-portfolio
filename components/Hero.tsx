'use client';
import { useEffect, useState } from 'react';

const stack = [
  'React',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Sass',
  'Less',
  'Tailwind CSS',
  'Redux',
  'Vue',
  'Angular',
  'Next.js',
  'Node.js',
  'Express',
  'NestJS',
  'Cornerstone.js',
  'Micro-frontends',
  'BFF (Backend-for-Frontend)',
  'MVC',
  'Component-driven design',
  'Zustand',
  'React Query',
  'Storybook',
  'Jest',
  'Webpack',
  'Vite',
  'npm / yarn',
  'Git / GitHub',
  'CI / CD',
  'RESTful API',
  'LLM',
  'AI Agent',
  'Prompt engineering',
  // duplicate for seamless marquee loop
  'React',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Sass',
  'Less',
  'Tailwind CSS',
  'Redux',
  'Vue',
  'Angular',
  'Next.js',
  'Node.js',
  'Express',
  'NestJS',
  'Cornerstone.js',
  'Micro-frontends',
  'BFF (Backend-for-Frontend)',
  'MVC',
  'Component-driven design',
  'Zustand',
  'React Query',
  'Storybook',
  'Jest',
  'Webpack',
  'Vite',
  'npm / yarn',
  'Git / GitHub',
  'CI / CD',
  'RESTful API',
  'LLM',
  'AI Agent',
  'Prompt engineering',
];

const stats = [
  { value: '5', suffix: '+yrs', label: 'Experience' },
  { value: '2', suffix: 'industries', label: 'Fintech · Healthtech' },
  { value: '10', suffix: '+', label: 'Technologies' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/FarihaTang',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/farihatang',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 font-mono text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Open to UK roles · Available H2 2026
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo/10 border border-indigo/20 font-mono text-xs text-indigo">
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
        <div className={`mb-6 ${mounted ? 'animate-slide-up delay-200' : 'anim-hidden'}`}>
          <h1
            className="font-sans font-800 leading-[1.15] tracking-tight pl-28"
            style={{
              fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
              background: 'linear-gradient(135deg, #5b50f0 0%, #7c3aed 50%, #f43f5e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Engineer
          </h1>
        </div>

        {/* Two-col body */}
        <div
          className={`grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 mb-12 ${mounted ? 'animate-slide-up delay-300' : 'anim-hidden'}`}
        >
          {/* <span className="text-ink font-600"></span> */}
          {/* Left: description */}
          <div>
            <p className="font-sans text-base text-muted leading-relaxed mb-4 text-justify">
              Frontend Engineer with 5+ years of experience in{' '}
              <span className="text-ink font-600">FinTech & HealthTech</span>. Currently leading an
              enterprise platform at China Minsheng Bank serving{' '}
              <span className="text-ink font-600">30,000+ daily users</span> across{' '}
              <span className="text-ink font-600">25+ integrated applications</span>. Proficient in{' '}
              <span className="text-ink font-600">React</span>,{' '}
              <span className="text-ink font-600">TypeScript</span>, and{' '}
              <span className="text-ink font-600">micro-frontend architecture</span>, with growing
              expertise in <span className="text-ink font-600">AI Agent</span> and{' '}
              <span className="text-ink font-600">LLM integration</span>.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-6 text-justify">
              Beyond engineering, I drive projects from{' '}
              <span className="text-ink font-600">ideation to production</span> — from conceiving
              and incubating an enterprise-wide Service Desk (now handling 1,200+ tickets/month) to
              coordinating <span className="text-ink font-600">cross-team</span> Business Continuity
              programmes across 25+ application teams. I care about{' '}
              <span className="text-ink font-600">scalable architecture</span>,{' '}
              <span className="text-ink font-600">reusable component systems</span>, and building
              things that last.
            </p>

            {/* Social links */}
            {/* <div className="flex items-center gap-3">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-sans text-sm text-muted bg-white border border-black/8 shadow-sm hover:border-indigo/30 hover:text-indigo transition-all duration-200"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div> */}
          </div>

          {/* Right: stats */}
          <div className="flex items-center gap-8 md:justify-end">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p
                  className="font-sans font-bold text-ink"
                  style={{ fontSize: '2.2rem', lineHeight: 1 }}
                >
                  {s.value}
                  {s.suffix && <span className="text-indigo text-xl">{s.suffix}</span>}
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
            className="px-7 py-3.5 rounded-full font-sans font-700 text-sm text-muted bg-white border border-black/8 shadow-sm hover:border-indigo/30 hover:text-indigo hover:shadow-md transition-all duration-200"
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
