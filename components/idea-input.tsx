"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Upload, Lightbulb, Send, Youtube } from "lucide-react"

const suggestions = [
  "A day in the life of a coffee bean",
  "How to make viral TikTok dances",
  "Cooking hacks that will blow your mind",
  "The secret life of houseplants",
  "Why cats are actually aliens",
]

export function IdeaInput() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [input, setInput] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <section id="idea-input" ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            What's Your Idea?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Describe your video concept, upload a reference, or share a channel link
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Input */}
          <div className="relative mb-8">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your video idea, sample video, or channel link..."
                className="w-full bg-transparent text-white placeholder-gray-400 text-lg resize-none outline-none min-h-[120px]"
                data-cursor="text"
              />

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                    data-cursor="button"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Upload Video</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                    data-cursor="button"
                  >
                    <Youtube className="w-4 h-4" />
                    <span className="text-sm">Channel Link</span>
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  data-cursor="button"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate</span>
                </motion.button>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowSuggestions(!showSuggestions)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mx-auto mb-6 text-gray-400 hover:text-white transition-colors duration-200"
              data-cursor="button"
            >
              <Lightbulb className="w-5 h-5" />
              <span>Need ideas?</span>
            </motion.button>

            <motion.div
              initial={false}
              animate={{ height: showSuggestions ? "auto" : 0, opacity: showSuggestions ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={showSuggestions ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setInput(suggestion)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
                    data-cursor="button"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
