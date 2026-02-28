import { resumeData } from '../../assets/resumeData';

function ResumeLeftPanel() {
    return (
        <aside className="md:col-span-1 space-y-6">
          <section className="border border-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>{resumeData.contact.email}</p>
            <p>{resumeData.contact.phone}</p>
          </section>

          <section className="border border-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <div className="space-y-2">
              <div><h4 className="font-medium">Core:</h4><p>{resumeData.skills.core.join(', ')}</p></div>
              <div><h4 className="font-medium">Database:</h4><p>{resumeData.skills.db.join(', ')}</p></div>
              <div><h4 className="font-medium">AWS:</h4><p>{resumeData.skills.aws.join(', ')}</p></div>
              <div><h4 className="font-medium">Tools:</h4><p>{resumeData.skills.tools.join(', ')}</p></div>
            </div>
          </section>

          <section className="border border-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Academics</h3>
            {resumeData.academics.map((edu, idx) => (
              <div key={idx} className="mb-4 last:mb-0">
                <h4 className="font-medium">{edu.institution}</h4>
                <p className="text-sm text-gray-600">{edu.location}</p>
                <p>{edu.degree}</p>
                {edu.details && <p className="text-sm">{edu.details}</p>}
                <p className="text-sm text-gray-500">{edu.date}</p>
              </div>
            ))}
          </section>
        </aside>
    );
}

export default ResumeLeftPanel;
