'use client';
import { useState, useEffect } from 'react';
import { NavBar } from '@farihatang/react-ui';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <NavBar theme="light" logoAccent=""></NavBar>

    // <nav
    //   className={`fixed top-12 inset-x-0 z-50 transition-all duration-500 ${
    //     scrolled ? 'py-3 bg-[#f8f7f4]/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
    //   }`}
    // >
    //   <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
    //     <a href="#" className="font-sans font-800 text-lg tracking-tight text-ink">
    //       Fariha<span className="text-indigo">.</span>
    //     </a>

    //     {/* Desktop */}
    //     <ul className="hidden md:flex items-center gap-1">
    //       {links.map(l => (
    //         <li key={l.label}>
    //           <a
    //             href={l.href}
    //             className="font-sans font-500 text-sm px-4 py-2 rounded-full text-muted
    //             hover:bg-black/5 hover:text-ink transition-all duration-200"
    //           >
    //             {l.label}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>

    //     <a
    //       href="#contact"
    //       className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
    //       font-sans font-700 text-sm text-white
    //       bg-gradient-to-r from-indigo to-violet
    //       shadow-lg shadow-indigo/25
    //       hover:shadow-indigo/40 hover:scale-[1.03]
    //       transition-all duration-200"
    //     >
    //       Hire me
    //     </a>

    //     <button
    //       className="md:hidden text-muted hover:text-ink transition-colors"
    //       onClick={() => setOpen(!open)}
    //     >
    //       <svg
    //         width="22"
    //         height="22"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //       >
    //         {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Mobile */}
    //   {open && (
    //     <div className="md:hidden bg-[#f8f7f4]/95 backdrop-blur-md border-t border-black/5 mt-3">
    //       <ul className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
    //         {links.map(l => (
    //           <li key={l.label}>
    //             <a
    //               href={l.href}
    //               onClick={() => setOpen(false)}
    //               className="font-sans font-500 text-base text-muted hover:text-ink transition-colors"
    //             >
    //               {l.label}
    //             </a>
    //           </li>
    //         ))}
    //         <li>
    //           <a
    //             href="#contact"
    //             onClick={() => setOpen(false)}
    //             className="inline-block px-5 py-2.5 rounded-full font-sans font-700 text-sm
    //             text-white bg-gradient-to-r from-indigo to-violet"
    //           >
    //             Hire me
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </nav>
  );
}
