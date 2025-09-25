import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.8, 0.2, 0, 1]
      }
    }
  }

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-instrument-serif italic">
                About Us
              </h2>
              <div className="w-20 h-1 bg-white" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. 
              We are passionate about creating exceptional websites and digital experiences that help brands 
              thrive in today's fast-paced digital landscape.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Our team combines creativity with technical expertise to deliver solutions that not only look 
              amazing but also perform exceptionally. We believe in the power of good design and user experience 
              to transform businesses and create meaningful connections with audiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              {['Web Design', 'Development', 'Branding', 'Strategy'].map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center space-y-2"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6, type: "spring" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
