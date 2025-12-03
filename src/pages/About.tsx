import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award,} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className='pt-20'>
      {/* Header */}
      <div className='bg-slate-900 text-white py-20'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            About Us
          </motion.h1>
          <p className='text-blue-100 text-lg max-w-2xl mx-auto'>
            Dedicated to producing world-class IT professionals and researchers.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-20 space-y-24'>
        {/* Vision & Mission */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500'
          >
            <div className='flex items-center mb-6'>
              <Eye className='w-10 h-10 text-blue-500 mr-4' />
              <h2 className='text-2xl font-bold text-slate-900'>Our Vision</h2>
            </div>
            <p className='text-slate-700 leading-relaxed text-lg'>
              To become a front-runner in preparing graduates to be efficient
              problem solvers, researchers, innovators and entrepreneurs, and
              making them competent professionals by enabling them to take up
              any kind of challenges in Information Technology industry or
              research organizations they serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='bg-white p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500'
          >
            <div className='flex items-center mb-6'>
              <Target className='w-10 h-10 text-emerald-500 mr-4' />
              <h2 className='text-2xl font-bold text-slate-900'>Our Mission</h2>
            </div>
            <ul className='space-y-4 text-slate-700'>
              <li className='flex items-start'>
                <span className='w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 shrink-0'></span>
                To offer high-quality undergraduate programs in order to prepare
                our graduates to become leaders in their profession and prepare
                the students and faculty to solve challenging real world
                problems through strong research and development.
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 shrink-0'></span>
                To provide best infrastructure facilities to achieve excellence
                in teaching-learning process and research.
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 shrink-0'></span>
                To enhance the students’ knowledge in the latest technologies by
                organizing and participating in technical programs.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* History */}
        {/* <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='w-full md:w-1/2 bg-red-300'>
            <img
              src={deptGateImage}
              alt='Department History'
              className='rounded-2xl shadow-lg h-full'
            />
          </div>
          <div className='w-full md:w-1/2 space-y-6'>
            <div className='flex items-center space-x-3 text-blue-600'>
              <History className='w-6 h-6' />
              <span className='font-semibold uppercase tracking-wider'>
                Our History
              </span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900'>
              A Journey of Growth
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              Established in the year 2000, the Department of Information
              Technology has grown from a small cohort of students to a vibrant
              community of innovators. Over the last two decades, we have
              continuously upgraded our laboratories, curriculum, and faculty
              strength to keep pace with the rapidly evolving tech landscape.
            </p>
          </div>
        </div> */}

        {/* Achievements Section */}
        <div>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Department Achievements
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { title: "Best Department Award", year: "2023" },
              { title: "100+ Research Papers", year: "Last 5 Years" },
              { title: "50+ Hackathon Wins", year: "Since 2020" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className='bg-white p-8 rounded-xl shadow-lg text-center'
              >
                <Award className='w-12 h-12 text-amber-500 mx-auto mb-4' />
                <h3 className='text-xl font-bold text-slate-900'>
                  {item.title}
                </h3>
                <span className='inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium'>
                  {item.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
