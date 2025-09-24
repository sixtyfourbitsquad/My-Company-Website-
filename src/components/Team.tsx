import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, MessageSquare } from 'lucide-react';

const founders = [
  {
    name: 'Sadab Alam',
    role: 'Founder & Performance Lead',
    description: 'Drives the strategy behind every high-performing campaign.',
    image: '/team/raushan.png'
  },
  {
    name: 'Raushan',
    role: 'Co-Founder & AdsExpert',
    description: 'Makes the systems behind your success run smoother than ever.',
    image: '/team/sadab-alam.png'
  }
];

const teamMembers = [
  {
    name: 'Md Sam',
    role: 'Dropshipping Ads Expert',
    description: 'Specializes in creating high-converting dropshipping ad campaigns that drive sales and maximize ROI.',
    experience: '4+ years',
    image: '/team/team-member-1.png'
  },
  {
    name: 'Ayubh',
    role: 'Graphic Designer & Video Editor',
    description: 'Creates stunning visuals and compelling video content that captures attention and converts.',
    experience: '3+ years',
    image: '/team/team-member-2.png'
  },
  {
    name: 'Aditya',
    role: 'Website Developer & Landing Page Expert',
    description: 'Builds high-converting websites and landing pages that turn visitors into customers.',
    experience: '4+ years',
    image: '/team/team-member-3.png'
  },
  {
    name: 'Yasir',
    role: 'Media Buyer Specialist Lead Generation',
    description: 'Expert in lead generation strategies and media buying, specializing in high-converting campaigns that drive qualified leads.',
    experience: '2+ years',
    image: '/team/team-member-4.png'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.12, 0.03],
            rotate: [0, 45, 90]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.05, 0.15, 0.05],
            rotate: [90, 45, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
        />

        {/* Connection Lines */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gradient-to-r from-purple-400/30 to-blue-400/30"
        />
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/2 right-1/4 w-24 h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              The Brains Behind the Brand
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built by a team of relentless creators and marketers who believe in smart ads and scalable growth.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
              <p className="text-purple-600 font-semibold mb-3">{founder.role}</p>
              <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                "{founder.description}"
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <motion.a
                  href="https://wa.me/918678830021"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare size={20} className="text-green-600" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/adswadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} className="text-pink-600" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Expert Team</h3>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group text-center flex-shrink-0"
                style={{ minWidth: '200px', maxWidth: '250px' }}
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">{member.name}</h4>
                <p className="text-purple-600 font-semibold mb-1 text-sm">{member.role}</p>
                <p className="text-blue-600 font-medium mb-2 text-xs">{member.experience} Experience</p>
                <p className="text-slate-600 max-w-xs mx-auto leading-relaxed text-xs">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
