import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className='pt-20 min-h-screen bg-slate-50'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <h1 className='text-4xl font-bold text-center mb-12'>Get in Touch</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info Card */}
          <div className='bg-blue-600 text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-between h-full'>
            <div>
              <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
              <p className='text-blue-100 mb-10'>
                Reach out to us for any queries related to admissions, research,
                or collaboration.
              </p>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='w-6 h-6 mt-1 text-blue-300' />
                  <div>
                    <h3 className='font-semibold text-lg'>Address</h3>
                    <p className='text-blue-100'>
                      ICARE Complex, Hatiberia
                      <br />
                      Haldia, Dist-Purba Medinipore, WB, Pin-721657
                      <br />
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <Mail className='w-6 h-6 text-blue-300' />
                  <div>
                    <h3 className='font-semibold text-lg'>Email</h3>
                    <p className='text-blue-100'>hod_it@hithaldia.in</p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <Phone className='w-6 h-6 text-blue-300' />
                  <div>
                    <h3 className='font-semibold text-lg'>Phone</h3>
                    <p className='text-blue-100'>+91 3224 252900</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-12 h-64 rounded-xl overflow-hidden shadow-inner bg-slate-800'>
              {/* Placeholder for map */}
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.536767702834!2d88.06915831533224!3d22.143714685399587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0d100000001%3A0x1000000000000000!2sHaldia%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                loading='lazy'
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-10 rounded-3xl shadow-xl border border-slate-100'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>
              Send us a Message
            </h2>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700'>
                    First Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all'
                    placeholder='John'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all'
                    placeholder='Doe'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all'
                  placeholder='john@example.com'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700'>
                  Message
                </label>
                <textarea
                  rows={5}
                  className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none'
                  placeholder='How can we help you?'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg flex justify-center items-center gap-2'
              >
                <Send className='w-5 h-5' /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
