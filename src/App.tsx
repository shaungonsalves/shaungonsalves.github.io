import './App.css';
import { useRef, useEffect, useState, useSyncExternalStore } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderCard from './components/HeaderCard';
import ResumeCard from './components/ResumeCard';

gsap.registerPlugin(ScrollTrigger);

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function App() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [startHeaderTyping, setStartHeaderTyping] = useState(false);

  useEffect(() => {
    const headerEl = headerRef.current;
    const resumeEl = resumeRef.current;
    if (!headerEl || !resumeEl) return undefined;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(headerEl, { opacity: 1, y: 0 });
        gsap.set(resumeEl, { opacity: 1, y: 0 });
        setStartHeaderTyping(true);
        return;
      }

      gsap.fromTo(
        headerEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => setStartHeaderTyping(true),
        },
      );

      gsap.fromTo(
        resumeEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: resumeEl,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

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
