"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Zap, CheckCircle, Loader, Play } from "lucide-react"

const scenes = [
  { id: 1, title: "Hook", status: "completed" },
  { id: 2, title: "Problem Setup", status: "generating" },
  { id: 3, title: "Journey Begins", status: "pending" },
  { id: 4, title: "Transformation", status: "pending" },
  { id: 5, title: "Call to Action", status: "pending" },
]

export function VeoGeneration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentScene, setCurrentScene] = useState(1)
  const [sceneStates, setSceneStates] = useState(scenes)

  useEffect(() => {
    if (!isInView) return

    const timer = setInterval(() => {
      setSceneStates((prev) => {
        const newStates = [...prev]
        const currentIndex = newStates.findIndex((s) => s.status === "generating")

        if (currentIndex !== -1) {
          newStates[currentIndex].status = "completed"
          if (currentIndex + 1 < newStates.length) {
            newStates[currentIndex + 1].status = "generating"
            setCurrentScene(currentIndex + 2)
          }
        }

        return newStates
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [isInView])

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
            Veo 3 Generation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch as AI transforms your scenes into cinematic video clips
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sceneStates.map((scene, index) => (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${scene.status === "generating" ? "ring-2 ring-purple-500" : ""}`}
              >
                <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />

                  {/* Content based on status */}
                  {scene.status === "pending" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Zap className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-400">Waiting...</p>
                      </div>
                    </div>
                  )}

                  {scene.status === "generating" && (
                    <div className="absolute inset-0">
                      {/* Animated particles */}
                      <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-purple-400 rounded-full"
                            animate={{
                              x: [Math.random() * 300, Math.random() * 300],
                              y: [Math.random() * 200, Math.random() * 200],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto"
                          >
                            <Loader className="w-8 h-8 text-white" />
                          </motion.div>
                          <p className="text-white font-semibold">Generating...</p>
                          <div className="w-32 h-1 bg-white/20 rounded-full mt-2 mx-auto overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              animate={{ width: ["0%", "100%"] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {scene.status === "completed" && (
                    <div className="absolute inset-0">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt={scene.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                          data-cursor="button"
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </motion.div>
                      </div>

                      {/* Success indicator */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scene Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">Scene {scene.id}</h3>
                  <p className="text-sm text-gray-400">{scene.title}</p>
                </div>

                {/* Glow effect for active scene */}
                {scene.status === "generating" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Join All Clips Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              data-cursor="button"
            >
              Join All Clips
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
