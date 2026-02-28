import { resumeData } from '../../assets/resumeData';

function ResumeRightPanel() {
    return (
        <main className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
          {resumeData.experience.map((job, idx) => (
            <section key={idx} className="border border-gray-200 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium">{job.company}</h4>
                {job.dates && <span className="text-gray-500">{job.dates}</span>}
              </div>
              <p className="text-gray-700 font-medium">{job.title}</p>
              <p className="text-sm text-gray-600 mb-2">Tech: {job.tech}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </section>
          ))}
        </main>
    );
}

export default ResumeRightPanel;
