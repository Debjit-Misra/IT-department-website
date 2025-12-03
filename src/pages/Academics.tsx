import React from "react";
import { Book, Monitor, CheckCircle, Download } from "lucide-react";

const Academics: React.FC = () => {
  return (
    <div className='pt-20'>
      <div className='bg-slate-900 text-white py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl font-bold mb-4'>Academics</h1>
          <p className='text-blue-100 text-lg'>
            Empowering students with a robust curriculum designed for the
            future.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-20 space-y-20'>
        {/* Curriculum */}
        <section>
          <div className='flex flex-col md:flex-row gap-12 items-start'>
            <div className='md:w-2/3'>
              <h2 className='text-3xl font-bold text-slate-900 mb-6 flex items-center'>
                <Book className='w-8 h-8 text-blue-600 mr-3' />
                B.Tech in Information Technology
              </h2>
              <p className='text-slate-600 leading-relaxed mb-6'>
                Our 4-year undergraduate program is designed to provide a strong
                foundation in computer science principles while offering
                specialization in modern technologies. The curriculum is
                regularly updated to meet industry standards.
              </p>
              <h3 className='text-xl font-bold mb-4'>Key Learning Outcomes</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-8'>
                {[
                  "Algorithm Design",
                  "Software Engineering",
                  "Database Management",
                  "Network Security",
                  "Machine Learning",
                  "Web Development",
                ].map((item, i) => (
                  <div key={i} className='flex items-center text-slate-700'>
                    <CheckCircle className='w-5 h-5 text-emerald-500 mr-2' />
                    {item}
                  </div>
                ))}
              </div>
              {/* download syllabus */}
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "../public/Proposed-Syllabus_academic_year_2024_25.pdf";
                  link.download = "BTech-IT-Syllabus.pdf";
                  link.click();
                }}
                className='flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer shadow hover:bg-blue-700 transition-colors'
              >
                <Download className='w-4 h-4 mr-2' /> Download Syllabus PDF
              </button>
            </div>
            <div className='md:w-1/3 bg-slate-50 p-6 rounded-2xl border border-slate-200'>
              <h3 className='font-bold text-lg mb-4'>Course Structure</h3>
              <ul className='space-y-3'>
                <li className='p-3 bg-white rounded shadow-sm border border-slate-100'>
                  Year 1: Foundation Sciences
                </li>
                <li className='p-3 bg-white rounded shadow-sm border border-slate-100'>
                  Year 2: Core IT Subjects
                </li>
                <li className='p-3 bg-white rounded shadow-sm border border-slate-100'>
                  Year 3: Advanced Topics & Electives
                </li>
                <li className='p-3 bg-white rounded shadow-sm border border-slate-100'>
                  Year 4: Major Project & Internship
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Labs */}
        <section>
          <h2 className='text-3xl font-bold text-slate-900 mb-10 flex items-center'>
            <Monitor className='w-8 h-8 text-blue-600 mr-3' />
            Laboratories
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                name: "Software Engg Lab",
                desc: "Equipped with latest CASE tools.",
              },
              {
                name: "Networking Lab",
                desc: "Cisco routers and switches for hands-on.",
              },
              {
                name: "AI & ML Lab",
                desc: "High-performance GPUs for training models.",
              },
              { name: "DBMS Lab", desc: "Oracle and MySQL servers." },
              {
                name: "IoT Lab",
                desc: "Sensors, Raspberry Pis, and Arduino kits.",
              },
              {
                name: "Project Lab",
                desc: "Dedicated space for final year projects.",
              },
            ].map((lab, i) => (
              <div
                key={i}
                className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-slate-100'
              >
                <div className='w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 font-bold'>
                  {i + 1}
                </div>
                <h3 className='font-bold text-lg text-slate-900 mb-2'>
                  {lab.name}
                </h3>
                <p className='text-slate-600 text-sm'>{lab.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
