import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap, Search } from "lucide-react";
import hodImage from "../assets/members/hod-image.jpg";
import ahanaImage from "../assets/members/ahana-img.jpg";
import amitImage from "../assets/members/amit-img.jpg";
import ayanImage from "../assets/members/ayan-image.jpg";
import bananiImage from "../assets/members/banani-img.jpg";
import manasijaImage from "../assets/members/manasija-img.jpg";
import susantaImage from "../assets/members/susanta-img.jpg";
import arpitaImage from "../assets/members/arpita-img.jpg";
import tamosaImage from "../assets/members/tamosa-img.jpg";
import mrigankaImage from "../assets/members/mriganka-img.jpg";
import debolinaImage from "../assets/members/debolina-img.jpg";

interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  category: "head" | "professor" | "associate" | "assistant";
  image?: string;
}

const facultyList: FacultyMember[] = [
  {
    name: "Prof. Soumen Paul",
    designation: "Professor & Head",
    qualification: "M.Tech., Ph.D.",
    category: "head",
    image: hodImage,
  },
  {
    name: "Dr. Sk. Sahnawaj",
    designation: "Professor",
    qualification: "M.Sc., MCA, Ph.D.",
    category: "professor",
  },
  {
    name: "Dr. Soumen Kanrar",
    designation: "Professor",
    qualification: "M.Sc. (Maths.), M.Tech. (CS & Data Processing), Ph.D.",
    category: "professor",
  },
  {
    name: "Dr. Ramkrishna Ghosh",
    designation: "Assoc. Professor",
    qualification: "M.Tech., Ph.D.",
    category: "associate",
  },
  {
    name: "Dr. Bidyut Das",
    designation: "Assoc. Professor",
    qualification: "M.Tech., Ph.D.",
    category: "associate",
  },
  {
    name: "Dr. Sumit Kumar Maiti",
    designation: "Assoc. Professor",
    qualification: "M.Sc., MCA, M.Tech.[CSE], Ph.D.",
    category: "associate",
  },
  {
    name: "Dr. Arup Roy",
    designation: "Assoc. Professor",
    qualification: "M.Tech. [CSE], Ph.D.",
    category: "associate",
  },
  {
    name: "Dr. Arun Kumar Sadhu",
    designation: "Assoc. Professor",
    qualification: "M.Tech. (CSE), Ph.D.",
    category: "associate",
  },
  {
    name: "Sri Vijoy Ananda Bhadra",
    designation: "Assoc. Professor of Practice",
    qualification: "B.Tech. (CSE)",
    category: "associate",
  },
  {
    name: "Dr. Banani Ghose",
    designation: "Asst. Professor",
    qualification: "MCA, M.Tech., Ph.D.",
    category: "assistant",
    image: bananiImage,
  },
  {
    name: "Sri Pranab Goswami",
    designation: "Asst. Professor",
    qualification: "M.Tech.",
    category: "assistant",
  },
  {
    name: "Sri Manasija Bhattacharya",
    designation: "Asst. Professor",
    qualification: "M.Tech.",
    category: "assistant",
    image: manasijaImage,
  },
  {
    name: "Mrs. Tamosa Chakraborty",
    designation: "Asst. Professor",
    qualification: "M.Tech.",
    category: "assistant",
    image: tamosaImage,
  },
  {
    name: "Sri Pijush Bairi",
    designation: "Asst. Professor",
    qualification: "M.Tech.",
    category: "assistant",
  },
  {
    name: "Ms. Debolina Ghosh",
    designation: "Asst. Professor",
    qualification: "M.Tech.",
    category: "assistant",
    image: debolinaImage,
  },
  {
    name: "Mrs. Moumita Ghosh",
    designation: "Asst. Professor",
    qualification: "M.Tech.",
    category: "assistant",
  },
  {
    name: "Sri Amit Sur",
    designation: "Asst. Professor",
    qualification: "M.Tech. (IT)",
    category: "assistant",
    image: amitImage,
  },
  {
    name: "Ms. Ahana Guchait",
    designation: "Asst. Professor",
    qualification: "M.Tech. (CSE)",
    category: "assistant",
    image: ahanaImage,
  },
  {
    name: "Sri Ayan Mukherji",
    designation: "Asst. Professor",
    qualification: "M.Tech. (CSE)",
    category: "assistant",
    image: ayanImage,
  },
  {
    name: "Sri Santanu Das",
    designation: "Asst. Professor",
    qualification: "MCA, M.Tech. [CSE]",
    category: "assistant",
  },
  {
    name: "Sri Sankar Karmaker",
    designation: "Asst. Professor",
    qualification: "ME [IT]",
    category: "assistant",
  },
  {
    name: "Sri Mriganka Chakraborty",
    designation: "Asst. Professor",
    qualification: "M.Tech. [VLSI & Microelectronics]",
    category: "assistant",
    image: mrigankaImage,
  },
  {
    name: "Sri Aditya Kumar Pathak",
    designation: "Asst. Professor",
    qualification: "M.Sc. [Computer and Information Sc.], M.Tech. [CSE]",
    category: "assistant",
  },
  {
    name: "Mrs. Ria Mondal",
    designation: "Asst. Professor",
    qualification: "M.Tech. [CSE]",
    category: "assistant",
  },
  {
    name: "Ms. Anindita Panda",
    designation: "Asst. Professor",
    qualification: "M.Sc. (Computer Sc.), M.Tech. (IT)",
    category: "assistant",
  },
  {
    name: "Sri Susanta Banerjee",
    designation: "Asst. Professor",
    qualification: "M.Tech. [IT]",
    category: "assistant",
    image: susantaImage,
  },
  {
    name: "Sri Saheb Santra",
    designation: "Asst. Professor",
    qualification: "M.Tech. [IT]",
    category: "assistant",
  },
  {
    name: "Ms. Arpita Shome",
    designation: "Asst. Professor",
    qualification: "ME [Software Engg.]",
    category: "assistant",
    image: arpitaImage,
  },
  {
    name: "Sri Debjyoti Adhikari",
    designation: "Asst. Professor",
    qualification: "M.Tech. [IT]",
    category: "assistant",
  },
  {
    name: "Sri Samir Biswas",
    designation: "Asst. Professor",
    qualification: "M.Tech. [IT]",
    category: "assistant",
  },
  {
    name: "Ms. Madhuparna Das Hait",
    designation: "Asst. Professor",
    qualification: "M.Tech. [IT]",
    category: "assistant",
  },
  {
    name: "Sri Santosh Das",
    designation: "Asst. Professor",
    qualification: "ME [CSE]",
    category: "assistant",
  },
  {
    name: "Sri Pratik Kalya",
    designation: "Asst. Professor",
    qualification: "M.Tech. (CSE)",
    category: "assistant",
  },
  {
    name: "Ms. Ananya Shee",
    designation: "Asst. Professor",
    qualification: "M.Tech. [Software Engg.]",
    category: "assistant",
  },
];

interface FacultyCardProps {
  member: FacultyMember;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ member }) => {
  // Logic to strip titles (Dr., Prof., Sri, etc.) to get clean initials
  // e.g., "Dr. Arup Roy" -> "Arup Roy" -> Avatar uses "AR"
  const cleanName = member.name
    .replace(/^(Prof\.|Dr\.|Sri|Smt\.|Mrs\.|Ms\.|Mr\.)\s+/i, "")
    .trim();

  // Generate avatar based on clean name
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    cleanName
  )}&background=random&color=fff&size=256&bold=true`;

  // Use the member's specific image if available, otherwise use the generated avatar
  const displayImage = member.image || avatarUrl;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full'
    >
      <div className='p-6 flex flex-col items-center text-center grow'>
        <div className='w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-blue-50 shadow-sm relative group'>
          <img
            src={displayImage}
            alt={member.name}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
        </div>
        <h3 className='text-lg font-bold text-slate-900 mb-1'>{member.name}</h3>
        <p className='text-blue-600 font-medium text-sm mb-3'>
          {member.designation}
        </p>

        <div className='mt-auto w-full pt-4 border-t border-slate-50'>
          <div className='flex items-start justify-center text-slate-500 text-xs'>
            <GraduationCap className='w-4 h-4 mr-1 shrink-0 text-slate-400' />
            <span>{member.qualification}</span>
          </div>
        </div>
      </div>
      <div className='bg-slate-50 p-3 flex justify-center border-t border-slate-100'>
        <a
          href={`mailto:${cleanName.split(" ")[0].toLowerCase()}@hit.in`}
          className='text-slate-500 hover:text-blue-600 flex items-center text-sm font-medium transition-colors'
        >
          <Mail className='w-4 h-4 mr-2' /> Contact
        </a>
      </div>
    </motion.div>
  );
};

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = facultyList.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.qualification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const heads = filteredList.filter((f) => f.category === "head");
  const professors = filteredList.filter((f) => f.category === "professor");
  const associates = filteredList.filter((f) => f.category === "associate");
  const assistants = filteredList.filter((f) => f.category === "assistant");

  return (
    <div className='pt-20 min-h-screen bg-slate-50/50'>
      {/* Header */}
      <div className='bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 py-16 text-center'>
          <h1 className='text-4xl font-bold text-slate-900 mb-4'>
            Meet Our Faculty
          </h1>
          <p className='text-slate-600 max-w-2xl mx-auto mb-8'>
            The intellectual pillars of our department, dedicated to academic
            excellence and research innovation.
          </p>

          {/* Search Bar */}
          <div className='max-w-md mx-auto relative'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5' />
            <input
              type='text'
              placeholder='Search faculty by name...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-12 pr-4 py-3 rounded-full border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all shadow-sm'
            />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12 space-y-16'>
        {/* Head of Department */}
        {heads.length > 0 && (
          <section>
            <div className='flex items-center space-x-4 mb-8'>
              <h2 className='text-2xl font-bold text-slate-800'>
                Head of Department
              </h2>
              <div className='h-px bg-slate-200 flex-grow'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
              {heads.map((member, index) => (
                <div key={index} className='lg:col-start-2'>
                  <FacultyCard member={member} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Professors */}
        {professors.length > 0 && (
          <section>
            <div className='flex items-center space-x-4 mb-8'>
              <h2 className='text-2xl font-bold text-slate-800'>Professors</h2>
              <div className='h-px bg-slate-200 flex-grow'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {professors.map((member, index) => (
                <FacultyCard key={index} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Associate Professors */}
        {associates.length > 0 && (
          <section>
            <div className='flex items-center space-x-4 mb-8'>
              <h2 className='text-2xl font-bold text-slate-800'>
                Associate Professors
              </h2>
              <div className='h-px bg-slate-200 flex-grow'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {associates.map((member, index) => (
                <FacultyCard key={index} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Assistant Professors */}
        {assistants.length > 0 && (
          <section>
            <div className='flex items-center space-x-4 mb-8'>
              <h2 className='text-2xl font-bold text-slate-800'>
                Assistant Professors
              </h2>
              <div className='h-px bg-slate-200 flex-grow'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {assistants.map((member, index) => (
                <FacultyCard key={index} member={member} />
              ))}
            </div>
          </section>
        )}

        {filteredList.length === 0 && (
          <div className='text-center py-20 text-slate-500'>
            <p className='text-lg'>
              No faculty members found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
