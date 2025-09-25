import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Web Design',
      description: 'Creating beautiful, user-friendly websites that capture your brand essence and engage your audience.',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Building robust, scalable web applications using the latest technologies and best practices.',
      icon: '💻'
    },
    {
      title: 'Branding',
      description: 'Developing cohesive brand identities that resonate with your target audience and stand out.',
      icon: '🎯'
    },
    {
      title: 'Strategy',
      description: 'Crafting digital strategies that align with your business goals and drive meaningful results.',
      icon: '📈'
    },
    {
      title: 'E-commerce',
      description: 'Building powerful online stores that convert visitors into customers and drive sales.',
      icon: '🛒'
    },
    {
      title: 'Maintenance',
      description: 'Keeping your digital presence running smoothly with ongoing support and updates.',
      icon: '🔧'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.8, 0.2, 0, 1]
      }
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.8, 0.2, 0, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-instrument-serif italic mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.8, 0.2, 0, 1] }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-200"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
