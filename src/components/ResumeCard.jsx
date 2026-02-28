// src/components/ResumeCard.jsx
import { resumeData } from '../assets/resumeData';
import ResumeLeftPanel from './resume/ResumeLeftPanel';
import ResumeRightPanel from './resume/ResumeRightPanel';

function ResumeCard({ opacity = 1 }) {
  return (
    <div
      className="bg-white shadow-xl p-6 md:p-8 max-w-6xl mx-auto mb-10 transition-opacity duration-300"
      style={{ opacity }}
    >
      <h2 className="text-gray-900 text-8xl font-bold mb-8 text-center">{resumeData.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <ResumeLeftPanel/>

        {/* Right column */}
        <ResumeRightPanel/>
      </div>
    </div>
  );
}

export default ResumeCard;
