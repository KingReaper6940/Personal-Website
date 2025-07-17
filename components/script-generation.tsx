"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Edit3, RefreshCw, Check, Wand2 } from "lucide-react"

const scriptContent = `Scene 1: Hook (0-3s)
"Ever wondered what happens to your coffee bean before it reaches your cup?"

Scene 2: Problem Setup (3-8s)
"Most people think coffee just grows on trees and magically appears in stores..."

Scene 3: Journey Begins (8-15s)
"But the truth is, each bean goes through an incredible 6-month adventure..."

Scene 4: Transformation (15-25s)
"From a tiny seed in the mountains of Colombia, through roasting, grinding..."

Scene 5: Call to Action (25-30s)
"Follow for more coffee secrets! ☕️ #CoffeeLife #BehindTheScenes"`

export function ScriptGeneration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayScript, setDisplayScript] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedScript, setEditedScript] = useState(scriptContent)

  useEffect(() => {
    if (isInView && !isGenerating) {
      setIsGenerating(true)
      let i = 0
      const timer = setInterval(() => {
        if (i < scriptContent.length) {
          setDisplayScript(scriptContent.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
          setIsGenerating(false)
        }
      }, 30)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const regenerateScript = () => {
    setDisplayScript("")
    setIsGenerating(true)
    let i = 0
    const timer = setInterval(() => {
      if (i < scriptContent.length) {
        setDisplayScript(scriptContent.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setIsGenerating(false)
      }
    }, 20)
  }

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
            AI Script Generation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch as GPT crafts your perfect YouTube Shorts script
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Wand2 className="w-4 h-4" />
                <span>GPT-4 Script Generator</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={regenerateScript}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                  data-cursor="button"
                >
                  <RefreshCw className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                  data-cursor="button"
                >
                  <Edit3 className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {isEditing ? (
                <div className="space-y-4">
                  <textarea
                    value={editedScript}
                    onChange={(e) => setEditedScript(e.target.value)}
                    className="w-full h-64 bg-white/5 text-white p-4 rounded-lg border border-white/10 focus:border-purple-500 focus:outline-none resize-none font-mono text-sm"
                    data-cursor="text"
                  />
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsEditing(false)}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      data-cursor="button"
                    >
                      <Check className="w-4 h-4" />
                      <span>Save Changes</span>
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300 leading-relaxed">
                    {displayScript}
                    {isGenerating && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                        className="text-purple-400"
                      >
                        |
                      </motion.span>
                    )}
                  </pre>

                  {/* Scene Markers */}
                  <div className="absolute right-4 top-4 space-y-2">
                    {["Scene 1", "Scene 2", "Scene 3", "Scene 4", "Scene 5"].map((scene, index) => (
                      <motion.div
                        key={scene}
                        initial={{ opacity: 0, x: 20 }}
                        animate={displayScript.includes(scene) ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.5 }}
                        className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-xs text-purple-300"
                      >
                        {scene}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {isGenerating && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
