import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Download, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../assets/resumeData';
import { headerData } from '../assets/headerData';
import resumePdf from '../assets/pdf/resume.pdf';

interface HeaderCardProps {
  startTyping: boolean;
  prefersReducedMotion: boolean;
}

function HeaderCard({ startTyping, prefersReducedMotion }: HeaderCardProps) {
  const nameRef = useRef<HTMLSpanElement>(null);
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
    if (!startTyping) return;

    if (prefersReducedMotion) {
      if (nameRef.current) {
        nameRef.current.textContent = originalName;
      }
      setIsComplete(true);
      return;
    }

    gsap.to(
      {},
      {
        duration: 2,
        ease: 'none',
        onUpdate: function onUpdate() {
          const progress = this.progress();
          const visibleLength = Math.floor(progress * originalName.length);
          if (nameRef.current) {
            nameRef.current.textContent = originalName.substring(0, visibleLength);
          }
        },
        onComplete: () => {
          if (nameRef.current) {
            nameRef.current.textContent = originalName;
          }
          setIsComplete(true);
        },
      },
    );
  }, [startTyping, originalName, prefersReducedMotion]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl text-center shadow-xl">
        <div
          className={`inline-block bg-black rounded-full px-6 py-3 font-mono text-xl md:text-2xl mb-4 transition-colors duration-300 ${
            isComplete ? 'text-cyan-300' : 'text-green-400'
          }`}
        >
          <span>&gt;&nbsp;</span>
          <span ref={nameRef} />
          <span className="cursor">_</span>
        </div>

        <p className="text-lg md:text-xl text-gray-800 mb-8">{headerData.headline}</p>
        <div className="flex flex-row gap-4 justify-center">
          <button
            type="button"
            aria-label="Download resume PDF"
            title="Download Resume"
            className="bg-gray-900 text-white w-14 h-14 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
            onClick={handleDownload}
          >
            <Download />
          </button>
          <button
            type="button"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
            className="bg-gray-900 text-white w-14 h-14 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
            onClick={openLinkedIn}
          >
            <Linkedin />
          </button>
          <button
            type="button"
            aria-label="Send email"
            title="Email"
            className="bg-gray-900 text-white w-14 h-14 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
            onClick={() => {
              window.location.href = `mailto:${resumeData.contact.email}`;
            }}
          >
            <Mail />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
