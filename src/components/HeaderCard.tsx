import { useEffect, useRef, useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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

  const openGitHub = (): void => {
    window.open(resumeData.contact.github, '_blank', 'noopener,noreferrer');
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
    <div className="flex min-h-screen items-center justify-center px-3 py-8 sm:px-4 sm:py-10 md:py-12">
      <div className="w-full max-w-3xl rounded-xl border border-white/20 bg-white/90 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur-md sm:rounded-2xl sm:p-6 md:p-10 lg:p-12">
        <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center space-y-4 text-center sm:space-y-5">
          <div className="flex w-full min-w-0 justify-center">
            <div className="max-w-full overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible [&::-webkit-scrollbar]:hidden">
              <div
                className={`mx-auto inline-flex w-max items-center gap-0.5 whitespace-nowrap rounded-full bg-black px-3 py-2.5 font-mono text-2xl font-semibold leading-none tracking-tight transition-colors duration-300 sm:gap-1 sm:px-6 sm:py-4 sm:text-3xl md:px-8 md:py-5 md:text-4xl lg:text-5xl ${
                  isComplete ? 'text-cyan-300' : 'text-green-400'
                }`}
              >
                <span>&gt;&nbsp;</span>
                <span ref={nameRef} />
                <span className="cursor">_</span>
              </div>
            </div>
          </div>

          <div className="w-full min-w-0 space-y-2.5 sm:space-y-3">
            <p className="text-balance text-base font-medium leading-snug text-gray-900 sm:text-lg md:text-xl lg:text-2xl">
              {headerData.tagline}
            </p>
            <p className="inline-flex items-center justify-center gap-1.5 text-xs text-gray-700 sm:text-sm md:text-base">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-600 sm:h-4 sm:w-4" aria-hidden />
              <span>{resumeData.location.city}</span>
            </p>
            <p className="text-balance text-xs leading-relaxed text-gray-600 sm:text-sm md:text-base">{headerData.meta}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-row flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Download resume PDF"
            title="Download Resume"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700 sm:h-20 sm:w-20"
            onClick={handleDownload}
          >
            <Download className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700 sm:h-20 sm:w-20"
            onClick={openLinkedIn}
          >
            <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Open GitHub profile"
            title="GitHub"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700 sm:h-20 sm:w-20"
            onClick={openGitHub}
          >
            <Github className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Send email"
            title="Email"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700 sm:h-20 sm:w-20"
            onClick={() => {
              window.location.href = `mailto:${resumeData.contact.email}`;
            }}
          >
            <Mail className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
