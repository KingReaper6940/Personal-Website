"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Download, Share2, Eye } from "lucide-react"

export function VideoPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

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
            Your Masterpiece
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Preview, download, and share your AI-generated video
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Placeholder Video */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Video Preview"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </motion.button>

              {/* Progress Bar */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 rounded-full h-1 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "30%" }}
                    transition={{ duration: isPlaying ? 10 : 0 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </div>

              {/* Video Stats */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>4K • 60fps</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download HD</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Before/After Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Before</h3>
              <div className="aspect-video bg-gray-800 rounded-xl border border-white/10 flex items-center justify-center">
                <span className="text-gray-400">Raw Script</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">After</h3>
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-white/10 flex items-center justify-center">
                <span className="text-white">Cinematic Video</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
