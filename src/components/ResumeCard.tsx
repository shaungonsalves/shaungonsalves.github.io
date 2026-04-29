import { resumeData } from '../assets/resumeData';
import ResumeLeftPanel from './resume/ResumeLeftPanel';
import ResumeRightPanel from './resume/ResumeRightPanel';

function ResumeCard() {
  return (
    <div className="bg-white shadow-xl p-4 md:p-8 max-w-6xl mx-auto mb-10 transition-opacity duration-300">
      <h2 className="text-gray-900 text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 text-center">{resumeData.name}</h2>
      <p className="text-gray-700 text-base md:text-lg mb-8 md:mb-12 text-center">{resumeData.headline}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <ResumeLeftPanel />
        <ResumeRightPanel />
      </div>
    </div>
  );
}

export default ResumeCard;
