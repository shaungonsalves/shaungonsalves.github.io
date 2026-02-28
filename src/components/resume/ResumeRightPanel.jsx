import { resumeData } from '../../assets/resumeData';

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderEmphasizedText(text, emphasis = []) {
  if (!emphasis || emphasis.length === 0) return text;
  const pattern = new RegExp(`(${emphasis.map(e => escapeRegExp(e)).join('|')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, i) => (
    emphasis.includes(part) ? (
      <span key={i} className="font-semibold">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  ));
}

function ResumeRightPanel() {
    return (
        <main className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 md:text-left mb-4">Professional Experience</h3>
          {resumeData.experience.map((job, idx) => (
            <section key={idx} className="border border-gray-200 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl text-gray-900 text-left font-medium">{job.company}</h4>
                {job.dates && <span className="text-gray-500">{job.dates}</span>}
              </div>
              <p className="text-gray-700 text-left font-medium">{job.title}</p>
              <p className="text-sm text-left text-gray-600 mb-2">Tech: {job.tech}</p>
              <ul className="list-disc list-outside pl-5 space-y-1 text-gray-800 text-left">
                {job.bullets.map((bullet, i) => {
                  if (typeof bullet === 'string') {
                    return <li key={i}>{bullet}</li>;
                  }
                  const { text, emphasis } = bullet;
                  return (
                    <li key={i}>{renderEmphasizedText(text, emphasis)}</li>
                  );
                })}
              </ul>
            </section>
          ))}
        </main>
    );
}

export default ResumeRightPanel;
