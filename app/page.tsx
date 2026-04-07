import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
