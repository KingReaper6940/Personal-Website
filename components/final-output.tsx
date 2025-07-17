"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Download, Share2, RefreshCw, GalleryThumbnailsIcon as Thumbnail, Eye } from "lucide-react"

export function FinalOutput() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Final Output
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your AI-generated YouTube Short is ready to captivate audiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Video Player */}
          <div className="relative group mb-8">
            <div className="relative aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Video Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
              <img
                src="/placeholder.svg?height=800&width=450"
                alt="Final Video"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300"
                data-cursor="button"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </motion.button>

              {/* Video Stats */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>1080p • 30s</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 rounded-full h-1 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "40%" }}
                    transition={{ duration: isPlaying ? 30 : 0 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 -z-10" />
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              data-cursor="button"
            >
              <Download className="w-5 h-5" />
              <span>Download</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              data-cursor="button"
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              data-cursor="button"
            >
              <Thumbnail className="w-5 h-5" />
              <span>Generate Thumbnail</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-purple-600/20 backdrop-blur-sm rounded-xl text-purple-300 font-semibold border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
              data-cursor="button"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Regenerate Entire Workflow</span>
            </motion.button>
          </motion.div>

          {/* Video Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Estimated Views", value: "50K+", color: "text-green-400" },
              { label: "Engagement Rate", value: "8.5%", color: "text-blue-400" },
              { label: "Viral Score", value: "92/100", color: "text-purple-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
