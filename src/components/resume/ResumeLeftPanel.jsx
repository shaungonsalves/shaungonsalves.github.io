import { resumeData } from '../../assets/resumeData';

function ResumeLeftPanel() {
  return (
    <aside className="md:col-span-1 space-y-6">
      {/* Contact */}
      <section className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-1 border-b border-gray-200">
          Contact
        </h3>
        <p><a href={`mailto:${resumeData.contact.email}`} className="text-blue-600 hover:underline">{resumeData.contact.email}</a></p>
        <p><a href={resumeData.contact.linkedin} className="text-blue-600 hover:underline">
          {resumeData.contact.linkedin.replace(/^https?:\/\/www\./, '').replace(/\/+$/, '')}
        </a></p>  
      </section>

      {/* Technical Skills */}
      <section className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-1 border-b border-gray-200">
          Technical Skills
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-left">Core</h4>
            <p className="text-gray-700 text-left">{resumeData.skills.core.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-left">Database</h4>
            <p className="text-gray-700 text-left">{resumeData.skills.db.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-left">AWS</h4>
            <p className="text-gray-700 text-left">{resumeData.skills.aws.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide text-left">Tools</h4>
            <p className="text-gray-700 text-left">{resumeData.skills.tools.join(', ')}</p>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-1 border-b border-gray-200">
          Academics
        </h3>
        {resumeData.academics.map((edu, idx) => (
          <div key={idx} className="mb-4 last:mb-0">
            <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
            <p className="text-sm text-gray-600">{edu.location}</p>
            <p className="text-gray-800">{edu.degree}</p>
            {edu.details && <p className="text-sm text-gray-600">{edu.details}</p>}
            <p className="text-sm text-gray-500">{edu.date}</p>
          </div>
        ))}
      </section>

      {/* Certificates */}
      <section className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-1 border-b border-gray-200">
          Certificates
        </h3>
        {resumeData.certification.map((cert, idx) => (

          <div key={idx} className="mb-4 last:mb-0">
            <h4 className="font-semibold text-gray-900">{cert.institution}</h4>
            <p className="text-sm text-gray-600">{cert.location}</p>
            <p className="text-gray-800">{cert.certificate}</p>
            {cert.details && <p className="text-sm text-gray-600">{cert.details}</p>}
            <p className="text-sm text-gray-500">{cert.date}</p>
          </div>
        ))}
      </section>
    </aside>
  );
}

export default ResumeLeftPanel;