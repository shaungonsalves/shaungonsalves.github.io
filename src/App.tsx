import './App.css';
import { useRef, useLayoutEffect, useState, useSyncExternalStore } from 'react';
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

  useLayoutEffect(() => {
    const headerEl = headerRef.current;
    const resumeEl = resumeRef.current;
    if (!headerEl || !resumeEl) return undefined;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(headerEl, { opacity: 1, y: 0 });
        gsap.set(resumeEl, { opacity: 1, y: 0, visibility: 'visible' });
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

      /**
       * ScrollTrigger + fromTo defaults to immediateRender: false, so “from” opacity
       * is not applied until the tween runs — the resume paints fully opaque first,
       * so the fade is invisible. Hide synchronously, then reveal on scroll.
       */
      gsap.set(resumeEl, { autoAlpha: 0, y: 56 });

      gsap.to(resumeEl, {
        autoAlpha: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: resumeEl,
          start: 'top 88%',
          once: true,
          invalidateOnRefresh: true,
        },
      });
    });

    const refreshOnLoad = (): void => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', refreshOnLoad);

    return () => {
      window.removeEventListener('load', refreshOnLoad);
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
