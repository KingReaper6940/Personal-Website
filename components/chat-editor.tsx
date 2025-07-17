"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Edit3, Check, X } from "lucide-react"

const chatMessages = [
  {
    type: "user",
    content: "Create a video about sustainable technology",
    timestamp: "2:34 PM",
  },
  {
    type: "ai",
    content: "I'll create a compelling narrative about sustainable technology. Here's the generated script:",
    timestamp: "2:34 PM",
  },
  {
    type: "script",
    content:
      "Scene 1: Solar panels gleaming in morning light...\nScene 2: Wind turbines spinning gracefully...\nScene 3: Electric vehicles charging silently...",
    editable: true,
    timestamp: "2:35 PM",
  },
]

export function ChatEditor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editContent, setEditContent] = useState("")

  const handleEdit = (index: number, content: string) => {
    setEditingIndex(index)
    setEditContent(content)
  }

  const handleSave = () => {
    setEditingIndex(null)
    setEditContent("")
  }

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
            Collaborative AI Editor
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Edit, refine, and perfect your content with intelligent assistance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-gray-400 text-sm font-mono">AI Video Creator v2.0</div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.type === "user" ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-2xl ${message.type === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`p-4 rounded-2xl ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : message.type === "script"
                            ? "bg-white/5 border border-white/10"
                            : "bg-white/5 text-gray-300"
                      }`}
                    >
                      {message.type === "script" && editingIndex === index ? (
                        <div className="space-y-3">
                          <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full bg-black/20 text-white p-3 rounded-lg border border-white/20 focus:border-purple-500 focus:outline-none resize-none"
                            rows={4}
                          />
                          <div className="flex space-x-2">
                            <button
                              onClick={handleSave}
                              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                              <Check className="w-4 h-4" />
                              <span>Save</span>
                            </button>
                            <button
                              onClick={() => setEditingIndex(null)}
                              className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            >
                              <X className="w-4 h-4" />
                              <span>Cancel</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="relative group">
                          <pre className="whitespace-pre-wrap font-mono text-sm">{message.content}</pre>
                          {message.editable && (
                            <button
                              onClick={() => handleEdit(index, message.content)}
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                            >
                              <Edit3 className="w-4 h-4 text-white" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    <div
                      className={`text-xs text-gray-500 mt-1 ${message.type === "user" ? "text-right" : "text-left"}`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Refine your script or ask for changes..."
                  className="flex-1 bg-white/5 text-white placeholder-gray-400 px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
