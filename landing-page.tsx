"use client"

import { CustomCursor } from "./components/custom-cursor"
import { AnimatedBackground } from "./components/animated-background"
import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { WorkflowTiles } from "./components/workflow-tiles"
import { ChatEditor } from "./components/chat-editor"
import { VideoPreview } from "./components/video-preview"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />

      <main>
        <HeroSection />
        <WorkflowTiles />
        <ChatEditor />
        <VideoPreview />
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Micro.AI
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 Micro.AI. Crafted with passion for the future of video creation.
          </div>
        </div>
      </footer>
    </div>
  )
}
