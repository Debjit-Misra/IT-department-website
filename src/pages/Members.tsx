import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface FacultyCardProps {
  name: string;
  role: string;
  spec: string;
  image: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  role,
  spec,
  image,
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className='bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 group'
  >
    <div className='h-64 overflow-hidden relative'>
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4'>
        <a
          href='mailto:faculty@hit.in'
          className='text-white flex items-center gap-2 hover:text-blue-300'
        >
          <Mail className='w-4 h-4' /> Contact
        </a>
      </div>
    </div>
    <div className='p-6 text-center'>
      <h3 className='text-xl font-bold text-slate-900 mb-1'>{name}</h3>
      <p className='text-blue-600 font-medium text-sm mb-3'>{role}</p>
      <p className='text-slate-500 text-xs uppercase tracking-wide'>{spec}</p>
    </div>
  </motion.div>
);

const Members: React.FC = () => {
  return (
    <div className='pt-20'>
      <div className='bg-slate-900 py-16 text-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-4xl font-bold mb-4'>Our Faculty</h1>
          <p className='text-slate-300 max-w-2xl mx-auto'>
            The intellectual pillars of our department, guiding students towards
            excellence.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-20'>
        {/* HOD */}
        <div className='mb-20'>
          <h2 className='text-2xl font-bold border-b pb-4 mb-8 text-slate-800'>
            Head of Department
          </h2>
          <div className='max-w-md mx-auto'>
            <FacultyCard
              name='Dr. S. K. Gupta'
              role='Professor & HOD'
              spec='Artificial Intelligence'
              image='https:/
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               /picsum.photos/400/500?random=50'
            />
          </div>
        </div>

        {/* Professors */}
        <div className='mb-20'>
          <h2 className='text-2xl font-bold border-b pb-4 mb-8 text-slate-800'>
            Professors & Associate Professors
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((i) => (
              <FacultyCard
                key={i}
                name={`Dr. Faculty Member ${i}`}
                role='Associate Professor'
                spec='Cloud Computing'
                image={`https://picsum.photos/400/500?random=${50 + i}`}
              />
            ))}
          </div>
        </div>

        {/* Assistant Professors */}
        <div>
          <h2 className='text-2xl font-bold border-b pb-4 mb-8 text-slate-800'>
            Assistant Professors
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <FacultyCard
                key={i}
                name={`Prof. Assistant ${i}`}
                role='Assistant Professor'
                spec='Web Technologies'
                image={`https://picsum.photos/400/500?random=${60 + i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
