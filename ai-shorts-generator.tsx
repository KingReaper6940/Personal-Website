"use client"

import { CustomCursor } from "./components/custom-cursor"
import { AnimatedBackground } from "./components/animated-background"
import { HeroSection } from "./components/hero-section"
import { IdeaInput } from "./components/idea-input"
import { ScriptGeneration } from "./components/script-generation"
import { SceneBreakdown } from "./components/scene-breakdown"
import { VeoGeneration } from "./components/veo-generation"
import { AIEditing } from "./components/ai-editing"
import { FinalOutput } from "./components/final-output"

export default function AIShortsGenerator() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />

      <main>
        <HeroSection />
        <IdeaInput />
        <ScriptGeneration />
        <SceneBreakdown />
        <VeoGeneration />
        <AIEditing />
        <FinalOutput />
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0">
              AI Shorts Studio
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors" data-cursor="text">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors" data-cursor="text">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors" data-cursor="text">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 AI Shorts Studio. Powered by GPT + Veo 3. The future of content creation.
          </div>
        </div>
      </footer>
    </div>
  )
}
