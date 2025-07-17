"use client"

import { motion, useInView, Reorder } from "framer-motion"
import { useRef, useState } from "react"
import { Clock, RefreshCw, GripVertical, Play } from "lucide-react"

const initialScenes = [
  {
    id: "1",
    title: "Hook",
    description: "Coffee bean close-up with dramatic lighting",
    duration: "3s",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Problem Setup",
    description: "Person confused looking at coffee in store",
    duration: "5s",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Journey Begins",
    description: "Coffee plantation in Colombian mountains",
    duration: "7s",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Transformation",
    description: "Montage of roasting and grinding process",
    duration: "10s",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "Call to Action",
    description: "Final coffee cup with text overlay",
    duration: "5s",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
]

export function SceneBreakdown() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scenes, setScenes] = useState(initialScenes)

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
            Scene Breakdown
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Drag to reorder scenes and customize your video flow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Reorder.Group axis="y" values={scenes} onReorder={setScenes} className="space-y-4">
            {scenes.map((scene, index) => (
              <Reorder.Item key={scene.id} value={scene}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-grab active:cursor-grabbing"
                  data-cursor="button"
                >
                  <div className="flex items-center p-6">
                    {/* Drag Handle */}
                    <div className="flex items-center justify-center w-8 h-8 mr-4 text-gray-400 group-hover:text-white transition-colors">
                      <GripVertical className="w-5 h-5" />
                    </div>

                    {/* Scene Number */}
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg mr-6">
                      {index + 1}
                    </div>

                    {/* Thumbnail */}
                    <div className="relative w-32 h-20 bg-gray-800 rounded-lg overflow-hidden mr-6">
                      <img
                        src={scene.thumbnail || "/placeholder.svg"}
                        alt={scene.title}
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{scene.title}</h3>
                      <p className="text-gray-400 mb-2">{scene.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{scene.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        data-cursor="button"
                      >
                        <RefreshCw className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </Reorder.Item>
            ))}
          </Reorder.Group>

          {/* Total Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">Total Duration: 30s</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
