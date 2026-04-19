'use client';

const facts = [
  { key: 'Location', val: 'Beijing · UK' },
  { key: 'Availability', val: 'H2 2026' },
  { key: 'Based in', val: 'On-site, Hybrid, or Remote' },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="blob w-[700px] h-[500px] bg-indigo/20 bottom-[-200px] right-[-200px]" />
        <div className="blob w-[400px] h-[400px] bg-rose/15 top-0 left-[-100px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main contact card */}
          <div
            className="bg-white rounded-3xl shadow-xl border border-black/[0.04] overflow-hidden
            grid grid-cols-1 md:grid-cols-[1fr_260px]"
          >
            {/* Left */}
            <div className="p-10 md:p-16">
              <span className="font-mono text-xs text-indigo tracking-widest uppercase mb-6 block">
                Get in touch
              </span>
              <h2
                className="font-sans font-800 text-ink tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95 }}
              >
                Let&apos;s work
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #5b50f0 0%, #7c3aed 50%, #f43f5e 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  together.
                </span>
              </h2>
              <p className="font-sans text-base text-muted leading-relaxed max-w-lg mb-10 text-justify">
                Actively seeking frontend or full-stack roles. I’m looking to join collaborative,
                innovative teams at companies that value creativity, user-centered design, and
                meaningful impact. I thrive in environments where learning, mentorship, and clear
                communication are part of the culture. Feel free to reach out — I&apos;d love to
                connect.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:tangfariha@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-sans font-700 text-sm
                    text-white bg-gradient-to-r from-indigo to-violet
                    shadow-lg shadow-indigo/30 hover:shadow-indigo/50
                    hover:scale-[1.03] transition-all duration-200"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                  Email me
                </a>
                {[
                  {
                    label: 'GitHub',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    ),
                    href: 'https://github.com/FarihaTang',
                  },
                  {
                    label: 'LinkedIn',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    href: 'https://www.linkedin.com/in/farihatang',
                  },
                ].map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full font-sans font-600 text-sm
                      text-muted bg-black/4 hover:bg-black/8 hover:text-ink
                      transition-all duration-200"
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div
              className="p-8 md:p-10 md:pt-28"
              style={{
                background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
                borderLeft: '1px solid rgba(91,80,240,0.1)',
              }}
            >
              <span className="font-mono text-xs text-indigo tracking-widest uppercase mb-6 block">
                Open to work
              </span>
              <dl className="space-y-5">
                {facts.map(({ key, val }) => (
                  <div key={key}>
                    <dt className="font-mono text-xs text-indigo/60 uppercase tracking-wider mb-0.5">
                      {key}
                    </dt>
                    <dd className="font-sans font-700 text-ink text-sm">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-6 flex justify-between flex-wrap gap-2 border-t border-black/5">
        <p className="font-mono text-xs text-subtle">
          © 2026 Fariha Tang. Built with Next.js + Tailwind.
        </p>
        {/* <p className="font-mono text-xs text-subtle">Open to remote & hybrid roles.</p> */}
      </footer>
    </>
  );
}
