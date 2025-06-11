import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Card</title>
      </Head>
      <main>
        <Hero />
        <Projects />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  );
}
