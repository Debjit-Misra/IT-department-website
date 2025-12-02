import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Lock, Cpu, FileText } from 'lucide-react';

const domains = [
  { icon: <Database />, title: "Data Science & Mining", desc: "Extracting insights from large datasets." },
  { icon: <Cloud />, title: "Cloud Computing", desc: "Scalable infrastructure and distributed systems." },
  { icon: <Lock />, title: "Cyber Security", desc: "Network defense and cryptography." },
  { icon: <Cpu />, title: "Internet of Things", desc: "Smart devices and embedded systems." },
];

const Research: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
         {/* <div className="absolute inset-0 bg-blue-600/10" /> */}
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <h1 className="text-4xl font-bold mb-4">Research & Innovation</h1>
           <p className="text-slate-300 max-w-2xl">Pushing the boundaries of technology through rigorous inquiry and development.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Domains */}
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Research Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {domains.map((d, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{d.title}</h3>
              <p className="text-slate-600 text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Current Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-slate-200">
                 <img src={`https://picsum.photos/300/300?random=${20+i}`} alt="Project" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-2/3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Ongoing</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">AI-Driven Traffic Management System</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Developing smart algorithms to optimize traffic flow in urban areas using IoT sensors and real-time data analysis.
                </p>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View Details &rarr;</button>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Recent Publications</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-start">
                 <span className="font-mono text-blue-500 font-bold mr-4 text-lg">0{i}</span>
                 <div>
                   <h4 className="font-semibold text-slate-900">Efficient Deep Learning Models for Medical Imaging</h4>
                   <p className="text-sm text-slate-500">Published in IEEE Transactions, 2024 • Authors: Dr. Smith, Prof. Doe</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Research;
