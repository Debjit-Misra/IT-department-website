import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, size: 'col-span-1 md:col-span-2 row-span-2', url: 'https://picsum.photos/800/800?random=101', title: 'Lab Session' },
  { id: 2, size: 'col-span-1', url: 'https://picsum.photos/400/400?random=102', title: 'Campus' },
  { id: 3, size: 'col-span-1', url: 'https://picsum.photos/400/400?random=103', title: 'Seminar' },
  { id: 4, size: 'col-span-1 row-span-2', url: 'https://picsum.photos/400/800?random=104', title: 'Graduation' },
  { id: 5, size: 'col-span-1 md:col-span-2', url: 'https://picsum.photos/800/400?random=105', title: 'Tech Fest' },
  { id: 6, size: 'col-span-1', url: 'https://picsum.photos/400/400?random=106', title: 'Sports' },
];

const Gallery: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-slate-600 mb-12">Moments captured from our vibrant department life.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative rounded-xl overflow-hidden shadow-md group ${img.size} bg-slate-200`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
