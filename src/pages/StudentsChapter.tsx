import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users } from 'lucide-react';

const events = [
  { year: '2023', title: 'TechStorm Hackathon', desc: 'A 24-hour coding marathon with over 50 teams.' },
  { year: '2023', title: 'Workshop on Cloud Computing', desc: 'Expert session by AWS certified professionals.' },
  { year: '2022', title: 'Annual Coding Contest', desc: 'Department-wide competitive programming event.' },
  { year: '2022', title: 'IETE Student Forum Setup', desc: 'Inauguration of the new student chapter.' },
];

const StudentsChapter: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-white py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Student's Chapter</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Fostering technical skills and leadership through active participation in global communities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Chapters Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
            <Users className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">ACM Student Chapter</h2>
            <p className="opacity-90 leading-relaxed">
              The Association for Computing Machinery (ACM) chapter organizes guest lectures, coding competitions, and networking events to connect students with the global computing community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 transform hover:-translate-y-1 transition-transform">
            <Users className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">IETE Student Forum</h2>
            <p className="text-slate-600 leading-relaxed">
              The Institution of Electronics and Telecommunication Engineers (IETE) forum focuses on hardware workshops, seminars on emerging tech, and industrial visits.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Activities</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {events.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{event.title}</h3>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{event.year}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentsChapter;
