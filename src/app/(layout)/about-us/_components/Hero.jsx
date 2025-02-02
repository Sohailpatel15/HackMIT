import { motion } from "framer-motion"
import Card from "./Card"
import { Title } from "../../home1/_components/CustomText"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* About Us Section */}
      <motion.section variants={itemVariants} className="py-20 text-center">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <Title content="About Us" />
          <motion.div
            className="w-24 h-1 bg-yellow-400 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ width: "7rem", backgroundColor: "#FFD335" }}
          ></motion.div>
        </motion.div>
      </motion.section>

      {/* Inspiration Section */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto px-4 pb-16 text-center">
        <motion.h2
          className="text-3xl font-semibold text-hack-300 mb-4"
          whileHover={{ color: "#FFD335", scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Our Inspiration
        </motion.h2>

        {/* Card Section (Restricted Size) */}
        <motion.div className="mt-8 flex justify-center" variants={itemVariants}>
          <motion.div
            className="w-full max-w-sm"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Card />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default Hero

