import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsorData = [
    { id: 1, name: "Sponsor 1", tier: "Platinum" },
    { id: 2, name: "Sponsor 2", tier: "Gold" },
    { id: 3, name: "Sponsor 3", tier: "Platinum" },
    { id: 4, name: "Sponsor 4", tier: "Gold" },
    { id: 5, name: "Sponsor 5", tier: "Silver" },
    { id: 6, name: "Sponsor 6", tier: "Silver" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-hack-100 mb-4">Our Trusted Sponsors</h2>
          <motion.div 
            className="h-1 w-24 bg-yellow-400 mx-auto"
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Partnering with industry leaders to drive innovation and create impact
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sponsorData.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="relative overflow-hidden rounded-xl bg-white border"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  background: sponsor.tier === "Platinum" ? "#60A5FA" : 
                             sponsor.tier === "Gold" ? "#FCD34D" : "#9CA3AF"
                }}
              />
              
              <div className="p-8">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <img 
                    src={`/api/placeholder/240/120`}
                    alt={sponsor.name}
                    className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-gray-500">{sponsor.tier} Partner</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Interested in becoming a sponsor?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-hack-100 text-white px-8 py-3 rounded-full font-semibold hover:bg-hack-300 transition-colors duration-300"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;