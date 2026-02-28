import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { resumeData } from '../assets/resumeData';

function HeaderCard({ startTyping }) {   // ← accept prop
  const nameRef = useRef(null);
  const originalName = resumeData.name;
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Only run typing animation when startTyping becomes true
    if (!startTyping) return;

    gsap.to({}, {
      duration: 2,
      ease: "none",
      onUpdate: function() {
        const progress = this.progress();
        const visibleLength = Math.floor(progress * originalName.length);
        nameRef.current.textContent = originalName.substring(0, visibleLength);
      },
      onComplete: () => {
        nameRef.current.textContent = originalName;
        setIsComplete(true);
      }
    });
  }, [startTyping, originalName]);   // ← depends on startTyping

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl text-center shadow-xl">
        <div
          className={`inline-block bg-black rounded-full px-6 py-3 font-mono text-xl md:text-2xl mb-4 transition-colors duration-300 ${
            isComplete ? 'text-cyan-300' : 'text-green-400'
          }`}
        >
          <span>&gt;&nbsp;</span>
          <span ref={nameRef}></span>
          <span className="cursor">_</span>
        </div>

        <p className="text-lg md:text-xl text-gray-800 mb-8">{resumeData.headline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Download PDF
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;