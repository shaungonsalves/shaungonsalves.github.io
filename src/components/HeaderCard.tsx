import { useEffect, useRef, useState } from 'react';
import { Download, Linkedin, Mail, MapPin } from 'lucide-react';
import { resumeData } from '../assets/resumeData';
import { headerData } from '../assets/headerData';
import resumePdf from '../assets/pdf/resume.pdf';

const TYPING_DURATION_MS = 5000;

interface HeaderCardProps {
  startTyping: boolean;
}

function HeaderCard({ startTyping }: HeaderCardProps) {
  const nameRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const originalName = resumeData.name;
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleDownload = (): void => {
    const a = document.createElement('a');
    a.href = resumePdf;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openLinkedIn = (): void => {
    window.open(resumeData.contact.linkedin, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (!startTyping) return undefined;

    const len = originalName.length;
    const msPerChar = len > 0 ? TYPING_DURATION_MS / len : TYPING_DURATION_MS;

    const stopRaf = () => {
      if (rafRef.current !== 0) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const start = performance.now();

    const tick = (now: number): void => {
      const elapsed = now - start;
      const visibleLength = Math.min(len, Math.floor(elapsed / msPerChar));
      const el = nameRef.current;
      if (el) {
        el.textContent = originalName.slice(0, visibleLength);
      }

      if (visibleLength < len) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = 0;
        if (nameRef.current) {
          nameRef.current.textContent = originalName;
        }
        setIsComplete(true);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      stopRaf();
    };
  }, [startTyping, originalName]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-white/20 bg-white/90 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur-md md:p-12">
        <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center space-y-5 text-center">
          <div
            className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-black px-6 py-4 font-mono text-3xl font-semibold leading-none tracking-tight transition-colors duration-300 sm:px-8 sm:py-5 sm:text-4xl md:text-5xl ${
              isComplete ? 'text-cyan-300' : 'text-green-400'
            }`}
          >
            <span>&gt;&nbsp;</span>
            <span ref={nameRef} />
            <span className="cursor">_</span>
          </div>

          <div className="w-full space-y-3">
            <p className="text-xl font-medium leading-snug text-gray-900 md:text-2xl">{headerData.tagline}</p>
            <p className="inline-flex items-center justify-center gap-1.5 text-sm text-gray-700 md:text-base">
              <MapPin className="h-4 w-4 shrink-0 text-gray-600" aria-hidden />
              <span>{resumeData.location.city}</span>
            </p>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">{headerData.meta}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-row flex-wrap justify-center gap-5 sm:gap-6">
          <button
            type="button"
            aria-label="Download resume PDF"
            title="Download Resume"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700"
            onClick={handleDownload}
          >
            <Download className="h-8 w-8" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700"
            onClick={openLinkedIn}
          >
            <Linkedin className="h-8 w-8" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Send email"
            title="Email"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700"
            onClick={() => {
              window.location.href = `mailto:${resumeData.contact.email}`;
            }}
          >
            <Mail className="h-8 w-8" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
