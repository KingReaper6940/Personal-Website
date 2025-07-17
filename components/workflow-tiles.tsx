"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Video, Wand2, Download } from "lucide-react"

const workflowSteps = [
  {
    icon: Sparkles,
    title: "Generate Script",
    description: "AI creates compelling narratives from your ideas",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wand2,
    title: "Break into Scenes",
    description: "Intelligent scene segmentation and storyboarding",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Video,
    title: "Veo AI Video",
    description: "State-of-the-art video generation technology",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: Download,
    title: "Final Assembly",
    description: "Professional editing and export ready files",
    color: "from-orange-500 to-red-500",
  },
]

export function WorkflowTiles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Your Creative Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">From concept to creation in four seamless steps</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300`}
                >
                  <step.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Hover effect particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              </div>

              {/* Step number */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
