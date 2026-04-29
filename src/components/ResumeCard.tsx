import { resumeData } from '../assets/resumeData';
import ResumeLeftPanel from './resume/ResumeLeftPanel';
import ResumeRightPanel from './resume/ResumeRightPanel';

function ResumeCard() {
  return (
    <div className="mx-auto mb-10 max-w-6xl bg-white px-3 py-5 shadow-xl sm:px-4 sm:py-6 md:p-8">
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl md:mb-8 md:text-6xl lg:text-8xl">
        {resumeData.name}
      </h2>
      <p className="mx-auto mb-6 max-w-prose px-1 text-center text-sm leading-relaxed text-gray-700 sm:mb-8 sm:text-base md:mb-12 md:text-lg">
        {resumeData.headline}
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        <ResumeLeftPanel />
        <ResumeRightPanel />
      </div>
    </div>
  );
}

export default ResumeCard;
