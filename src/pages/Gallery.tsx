import React from "react";
import { motion } from "framer-motion";
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import galleryImage4 from "../assets/gallery4.jpg";
import galleryImage5 from "../assets/gallery5.jpg";
import galleryImage6 from "../assets/gallery6.jpg";
import galleryImage7 from "../assets/gallery7.jpg";

const images = [
  // Row 1 & 2 (Left)
  {
    id: 1,
    size: "col-span-2 row-span-2",
    url: galleryImage1,
    title: "",
  },
  // Row 1 (Right)
  {
    id: 2,
    size: "col-span-1",
    url: galleryImage2,
    title: "",
  },
  {
    id: 3,
    size: "col-span-1",
    url: galleryImage3,
    title: "",
  },
  // Row 2 (Right) - Tall image starting at Row 2, Col 3
  {
    id: 4,
    size: "col-span-1 row-span-2",
    url: galleryImage5,
    title: "",
  },
  // Row 2 (Right) - Fills the gap at Row 2, Col 4
  {
    id: 6,
    size: "col-span-1",
    url: galleryImage4,
    title: "",
  },
  // Row 3 (Left) - Wide image
  {
    id: 5,
    size: "col-span-2",
    url: galleryImage6,
    title: "",
  },
  // Row 3 (Right) - Fills the last spot
  {
    id: 7,
    size: "col-span-1",
    url: galleryImage7,
    title: "RTCI Seminar",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className='pt-20 bg-slate-50 min-h-screen'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <h1 className='text-4xl font-bold text-center mb-4'>Gallery</h1>
        <p className='text-center text-slate-600 mb-12'>
          Moments captured from our vibrant department life.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense'>
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
                loading='lazy'
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
