'use client';

const roles = [
  {
    period: '2023 — Present',
    company: 'China Minsheng Bank',
    title: 'Senior Frontend Engineer',
    location: 'Beijing, China',
    gradFrom: '#5b50f0',
    gradTo: '#7c3aed',
    points: [
      'Led frontend architecture for a large-scale internal platform adopting micro-frontend patterns with Module Federation.',
      'Built and maintained a shared React + TypeScript component library, reducing cross-team duplication.',
      'Established engineering standards: code review, Jest + RTL testing conventions, CI/CD pipelines.',
      'Shipped features on two-week cadences collaborating with product, design, and backend teams.',
    ],
  },
  {
    period: '2020 — 2023',
    company: 'Airdoc Technology',
    title: 'Frontend Engineer',
    location: 'Beijing, China',
    gradFrom: '#0ea5e9',
    gradTo: '#10b981',
    points: [
      'Built complex medical imaging UIs for AI-assisted diagnostic tools with large dataset visualisation.',
      'Improved app performance by 40% via code-splitting, lazy loading, and rendering optimisation.',
      'Translated medical workflows into intuitive interfaces alongside clinicians and researchers.',
      'Led migration from legacy jQuery codebase to modern React + TypeScript architecture.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-violet/15 top-0 left-[-150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo tracking-widest uppercase mb-3 block">
            Career
          </span>
          <h2
            className="font-sans font-800 text-ink tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}
          >
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {roles.map(role => (
            <div
              key={role.company}
              className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-black/[0.05]
                hover:shadow-md hover:border-black/[0.08]
                transition-all duration-300
                grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8"
            >
              {/* Left */}
              <div>
                <div
                  className="h-1 w-12 rounded-full mb-5"
                  style={{ background: `linear-gradient(90deg, ${role.gradFrom}, ${role.gradTo})` }}
                />
                <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">
                  {role.period}
                </p>
                <p className="font-sans font-800 text-ink text-lg leading-tight mb-1">
                  {role.company}
                </p>
                <p
                  className="font-sans font-600 text-sm mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${role.gradFrom}, ${role.gradTo})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {role.title}
                </p>
                <p className="font-mono text-xs text-subtle">{role.location}</p>
              </div>

              {/* Right */}
              <ul className="space-y-3.5 pt-1">
                {role.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span
                      className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: role.gradFrom }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className="mt-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/[0.05]
          grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            <span className="font-mono text-xs text-indigo tracking-widest uppercase mb-4 block">
              Education
            </span>
            <p className="font-sans font-800 text-ink">MEng Software Engineering</p>
            <p className="font-mono text-xs text-subtle mt-1">
              Top-tier Chinese university · 2016–2020
            </p>
          </div>
          <div className="sm:border-l sm:border-black/5 sm:pl-6 flex flex-col justify-center">
            <p className="font-sans font-800 text-ink">BEng Digital Media Technology</p>
            <p className="font-mono text-xs text-subtle mt-1">2016–2020</p>
          </div>
        </div>
      </div>
    </section>
  );
}
