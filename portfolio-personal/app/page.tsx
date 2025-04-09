'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Hero = dynamic(() => import('@/src/components/ui/Hero'), { ssr: false });
const Skills = dynamic(() => import('@/src/components/ui/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/src/components/ui/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/src/components/ui/Contact'), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
