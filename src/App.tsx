import './App.css';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderCard from './components/HeaderCard';
import ResumeCard from './components/ResumeCard';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [startHeaderTyping, setStartHeaderTyping] = useState<boolean>(false);

  useEffect(() => {
    // Header fade‑in on load
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setStartHeaderTyping(true),
      }
    );

    // Resume scroll‑triggered animation
    gsap.fromTo(
      resumeRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: resumeRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={headerRef}>
        <HeaderCard startTyping={startHeaderTyping} />
      </div>
      <div ref={resumeRef}>
        <ResumeCard />
      </div>
    </>
  );
}

export default App;