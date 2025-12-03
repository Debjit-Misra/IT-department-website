import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.jpg";
import heroImg2 from "../assets/hero-img2.jpg";
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import hodImage from "../assets/hod-image.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home: React.FC = () => {
  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center pt-30 lg:pt-20 bg-linear-to-br from-blue-50 via-white to-blue-50'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-60' />
          <div className='absolute top-40 -left-20 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-3xl opacity-60' />
        </div>

        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide'>
              Welcome to Innovation
            </div>
            <h1 className='text-4xl lg:text-6xl font-bold text-slate-900 leading-tight'>
              Information Technology{" "}
              <span className='text-blue-600'>Department</span>
            </h1>
            <p className='text-lg text-slate-600 leading-relaxed max-w-lg'>
              Shaping the future with innovation, research, and excellence at
              Haldia Institute of Technology. Join us in building the digital
              tomorrow.
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <Link to='/academics'>
                <button className='px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all font-medium flex items-center'>
                  Explore Academics <ArrowRight className='ml-2 w-4 h-4' />
                </button>
              </Link>
              <Link to='/members'>
                <button className='px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-medium'>
                  Meet Our Members
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500'>
              <img
                src={heroImg}
                alt='IT Department Students'
                className='w-full h-[500px] object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-8'>
                <div className='text-white'>
                  {/* <p className='font-bold text-xl'>State-of-the-Art Labs</p>
                  <p className='text-sm text-slate-200'>
                    Equipped for modern research
                  </p> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          >
            <motion.div variants={fadeInUp}>
              <img
                src={heroImg2}
                alt='About Department'
                className='rounded-2xl shadow-xl'
              />
            </motion.div>
            <motion.div variants={fadeInUp} className='space-y-6'>
              <h2 className='text-3xl font-bold text-slate-900'>
                A Legacy of Excellence
              </h2>
              <p className='text-slate-600 text-lg'>
                Established with a vision to create technically competent
                professionals, our department focuses on holistic development
                through a rigorous curriculum and active industry-academia
                interaction.
              </p>
              <ul className='space-y-3'>
                {[
                  "Accredited by NBA",
                  "State-of-the-art Infrastructure",
                  "High Placement Records",
                  "Active Research Environment",
                ].map((item, i) => (
                  <li key={i} className='flex items-center text-slate-700'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3' />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to='/about'
                className='inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors'
              >
                Read more about our vision &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Preview */}
      <section className='py-24 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Department Highlights
            </h2>
            <p className='text-slate-600'>
              Discover what makes our department unique and vibrant.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <FeatureCard
              icon={<Lightbulb className='w-8 h-8 text-amber-500' />}
              title='Research'
              description='Cutting-edge research in AI, IoT, and Data Science.'
              link='/research'
            />
            <FeatureCard
              icon={<BookOpen className='w-8 h-8 text-blue-500' />}
              title='Academics'
              description='Comprehensive curriculum designed for industry readiness.'
              link='/academics'
            />
            <FeatureCard
              icon={<Globe className='w-8 h-8 text-emerald-500' />}
              title='Student Life'
              description='Vibrant student chapters, hackathons, and cultural events.'
              link='/students-chapter'
            />
          </div>
        </div>
      </section>

      {/* <section className='py-24 bg-blue-600 text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className='max-w-7xl mx-auto px-6 text-center relative z-10'>
          <h2 className='text-3xl font-bold mb-6'>Learn from the Best</h2>
          <p className='text-blue-100 text-lg mb-10 max-w-2xl mx-auto'>
            Our faculty members are distinguished researchers and educators
            committed to student success.
          </p>
          <Link to='/members'>
            <button className='px-8 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-colors'>
              Meet Faculty Members
            </button>
          </Link>
        </div>
      </section> */}
      {/* HOD Message & Faculty Teaser */}
      <section className='py-24 bg-white relative overflow-hidden border-t border-slate-100'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* HOD Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative order-2 md:order-1'
            >
              {/* <div className='absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3 translate-x-2 translate-y-2'></div> */}
              <img
                src={hodImage}
                alt='Dr. Soumen Paul, HOD'
                className='relative rounded-2xl shadow-xl w-[80%] md:w-4/5 mx-auto object-cover h-[450px]'
              />
              <div className='absolute bottom-6 left-6 right-6 md:left-12 md:right-12 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 text-center'>
                <p className='font-bold text-slate-900 text-lg'>
                  Dr. Soumen Paul
                </p>
                <p className='text-xs text-blue-600 font-bold uppercase tracking-wider'>
                  Head of Department
                </p>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='space-y-8 order-1 md:order-2'
            >
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
                  Message from the{" "}
                  <span className='text-blue-600'>Head of Department</span>
                </h2>
              </div>

              <div className='relative'>
                <span className='absolute -top-4 -left-2 text-6xl text-blue-200 font-serif leading-none'>
                  "
                </span>
                <blockquote className='text-lg text-slate-600 italic relative z-10 pl-6'>
                  Our mission is not just to teach technology, but to inspire
                  innovation. We are committed to nurturing the next generation
                  of tech leaders who will shape the digital future with ethics,
                  excellence, and resilience.
                </blockquote>
              </div>

              <p className='text-slate-600 leading-relaxed'>
                The Department of Information Technology at HIT is home to a
                dedicated team of faculty members who are experts in their
                respective fields. We provide a supportive environment for
                students to explore, experiment, and excel in cutting-edge
                domains.
              </p>

              <div className='pt-2'>
                <Link to='/members'>
                  <button className='px-8 py-4 bg-slate-900 text-white rounded-xl shadow-xl hover:bg-blue-600 transition-all font-bold flex items-center group'>
                    Meet Our Faculty
                    <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex justify-between items-end mb-10'>
            <div>
              <h2 className='text-3xl font-bold text-slate-900'>Gallery</h2>
              <p className='text-slate-600 mt-2'>
                Explore moments from workshops, labs, student events, and
                project showcases — capturing innovation, collaboration, and
                campus life.
              </p>
            </div>
            <Link
              to='/gallery'
              className='text-blue-600 font-medium hover:underline'
            >
              View Full Gallery
            </Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80'>
            <div className='col-span-2 row-span-2 relative group overflow-hidden rounded-xl'>
              <img
                src={galleryImage1}
                alt='Gallery 1'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>
            <div className='col-span-1 row-span-2 relative group overflow-hidden rounded-xl'>
              <img
                src={galleryImage2}
                alt='Gallery 2'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>
            <div className='col-span-1 row-span-1 relative group overflow-hidden rounded-xl'>
              <img
                src={galleryImage3}
                alt='Gallery 3'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>
            <div className='col-span-1 row-span-1 relative group overflow-hidden rounded-xl bg-blue-50 flex items-center justify-center'>
              <Link
                to='/gallery'
                className='text-blue-600 font-bold hover:scale-105 transition-transform'
              >
                More +
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link} className='block group'>
    <div className='bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform group-hover:-translate-y-1 h-full'>
      <div className='mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors'>
        {title}
      </h3>
      <p className='text-slate-600 leading-relaxed'>{description}</p>
    </div>
  </Link>
);

export default Home;
