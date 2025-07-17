"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Music, Scissors, Zap, MessageSquare } from "lucide-react"

export function AIEditing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("timeline")

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
            AI Video Editing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fine-tune your masterpiece with intelligent editing tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {[
                { id: "timeline", label: "Timeline", icon: Scissors },
                { id: "music", label: "Music", icon: Music },
                { id: "effects", label: "Effects", icon: Zap },
                { id: "chat", label: "AI Chat", icon: MessageSquare },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  data-cursor="button"
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            {activeTab === "timeline" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Video Timeline</h3>

                {/* Timeline */}
                <div className="space-y-4">
                  {[
                    { name: "Scene 1: Hook", duration: "3s", color: "from-red-500 to-orange-500" },
                    { name: "Scene 2: Problem", duration: "5s", color: "from-blue-500 to-purple-500" },
                    { name: "Scene 3: Journey", duration: "7s", color: "from-green-500 to-teal-500" },
                    { name: "Scene 4: Transform", duration: "10s", color: "from-purple-500 to-pink-500" },
                    { name: "Scene 5: CTA", duration: "5s", color: "from-yellow-500 to-red-500" },
                  ].map((clip, index) => (
                    <motion.div
                      key={clip.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                      data-cursor="button"
                    >
                      <div
                        className={`w-16 h-10 bg-gradient-to-r ${clip.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {clip.duration}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{clip.name}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Scissors className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "music" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Background Music</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Upbeat Pop", "Cinematic", "Lo-fi Chill"].map((genre) => (
                    <div
                      key={genre}
                      className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 text-center group"
                      data-cursor="button"
                    >
                      <Music className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <p className="text-white font-semibold">{genre}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "chat" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">AI Assistant</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl p-4 max-w-md">
                      <p className="text-gray-300">How can I help you edit your video?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 max-w-md">
                      <p className="text-white">Make the transitions smoother</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Ask AI to edit your video..."
                    className="flex-1 bg-white/5 text-white placeholder-gray-400 px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none"
                    data-cursor="text"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300">
                    Send
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Join with AI Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              data-cursor="button"
            >
              Join with AI
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
