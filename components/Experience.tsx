'use client';

interface Project {
  name: string;
  period: string;
  points: string[];
}

interface Role {
  period: string;
  company: string;
  title: string;
  location: string;
  gradFrom: string;
  gradTo: string;
  projects?: Project[];
  points?: string[];
}

const roles: Role[] = [
  {
    period: 'May 2023 — Present',
    company: 'Minsheng FinTech Co., Ltd.',
    title: 'Frontend Engineer & Module Lead',
    location: 'Beijing, China',
    gradFrom: '#5b50f0',
    gradTo: '#7c3aed',
    projects: [
      {
        name: 'Unified Employee Channel Platform',
        period: '2024 — Present',
        points: [
          "Led end-to-end frontend delivery from 0 to 1 on a micro-frontend platform integrating 25+ sub-applications, serving 30,000+ daily active users as the bank's primary staff portal.",
          'Achieved sub-2-second First Contentful Paint via code splitting, lazy loading, and asset optimisation across the micro-frontend ecosystem.',
          "Integrated the bank's internal low-code platform to support 35+ workstation layouts; independently delivered 10+ admin configuration modules to production.",
          'Led the build of a cross-application shared component library from 0 to 1, establishing component design standards and documentation targeting reuse across 25+ sub-application teams.',
        ],
      },
      {
        name: 'Enterprise Service Desk',
        period: '2025',
        points: [
          "Conceived and incubated the bank's enterprise-wide Service Desk from platform idea to bank-wide production in 6 months, serving 30,000+ staff.",
          'Architected a real-time chat component integrated with Feishu (Lark) Open API, delivering intelligent Q&A, live agent handoff, and escalation — 1,200+ monthly tickets, 47.63% intelligent resolution rate.',
        ],
      },
      {
        name: 'Business Continuity Programme (BCP)',
        period: '2025',
        points: [
          'Led BCP implementation as platform owner: coordinated 25+ integrated application teams to define emergency response plans and execute full end-to-end disaster-recovery drills across 10+ platform scenarios.',
          'Designed a dual-layer resilience mechanism — high-availability active defence combined with emergency failover — achieving full-chain coverage across all critical business workflows.',
        ],
      },
      {
        name: 'AI Agent Integration',
        period: '2026',
        points: [
          "Building an AI Agent layer to power intelligent business process recommendations and in-platform feature discovery, driving the platform's evolution toward intelligent automation.",
        ],
      },
      {
        name: 'Bank Branch Self-Service Kiosk Platform',
        period: '2023',
        points: [
          'Delivered frontend development covering 8 end-to-end business scenarios including personal information updates and fixed-term deposit account opening and enquiry.',
          'Analysed cross-scenario workflow patterns and architected 5 reusable business sub-flow modules (card insertion / QR scan, PIN entry, facial recognition, and others), each encapsulating an independent component and Model layer — enabling composable scene assembly and lowering the cost of onboarding new business flows.',
        ],
      },
    ],
  },
  {
    period: 'Jul 2020 — Apr 2023',
    company: 'BioMind',
    title: 'Frontend Engineer',
    location: 'Beijing, China',
    gradFrom: '#0ea5e9',
    gradTo: '#10b981',
    points: [
      'Built interactive 2D/3D medical image viewers using Cornerstone.js, supporting real-time AI-assisted annotation and analysis for cardiovascular, pulmonary, and cerebrovascular conditions.',
      'Collaborated with ML engineers to surface AI model outputs — lesion detection, volumetric measurements, segmentation overlays — directly within the clinical viewer interface.',
      'Delivered performance-critical rendering pipelines handling large DICOM datasets on consumer-grade clinical hardware.',
      'Contributed to the full product lifecycle from MVP through multiple production releases in an Agile/Scrum environment.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-violet/15 top-0 left-[-150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
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
              className="bg-white rounded-2xl shadow-sm border border-black/[0.05]
                hover:shadow-md hover:border-black/[0.08]
                transition-all duration-300
                grid grid-cols-1 md:grid-cols-[240px_1fr]"
            >
              {/* Left: company info — sticky on desktop */}
              <div className="p-6 md:p-10 md:border-r border-black/[0.05]">
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

              {/* Right: projects or bullet points */}
              <div className="p-6 md:p-10">
                {role.projects ? (
                  // Project-grouped layout for Minsheng
                  <div className="space-y-7">
                    {role.projects.map((project, pi) => (
                      <div key={pi}>
                        {/* Project header */}
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="font-mono text-xs font-500 px-2.5 py-1 rounded-md"
                            style={{
                              background: `${role.gradFrom}12`,
                              color: role.gradFrom,
                            }}
                          >
                            {project.period}
                          </span>
                          <p className="font-sans font-700 text-sm text-ink">{project.name}</p>
                        </div>
                        {/* Project bullets */}
                        <ul className="space-y-2">
                          {project.points.map((pt, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                              <span
                                className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                                style={{ background: role.gradFrom }}
                              />
                              {pt}
                            </li>
                          ))}
                        </ul>
                        {/* Divider between projects */}
                        {pi < (role.projects?.length ?? 0) - 1 && (
                          <div className="mt-7 border-t border-black/[0.04]" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Simple bullet list for BioMind
                  <ul className="space-y-3.5 pt-1">
                    {role.points?.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span
                          className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: role.gradFrom }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className="mt-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/[0.05]
          grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0"
        >
          <div className="md:border-r border-black/[0.05] pr-0 md:pr-8 mb-6 md:mb-0">
            <span className="font-mono text-xs text-indigo tracking-widest uppercase mb-4 block">
              Education
            </span>
          </div>
          <div className="md:pl-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-sans font-800 text-ink text-sm">MEng Software Engineering</p>
              <p className="font-sans font-600 text-sm text-muted mt-0.5">
                Huazhong University of Science and Technology (HUST)
              </p>
              <p className="font-mono text-xs text-subtle mt-1">985 Institution · 2017–2020</p>
            </div>
            <div className="sm:border-l sm:border-black/5 sm:pl-6">
              <p className="font-sans font-800 text-ink text-sm">BEng Digital Media Technology</p>
              <p className="font-sans font-600 text-sm text-muted mt-0.5">
                Shandong Technology and Business University
              </p>
              <p className="font-mono text-xs text-subtle mt-1">2013–2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
