"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  MapPin,
  Calendar,
  Phone,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleEmailClick = () => {
    try {
      // Create a simple mailto link without complex encoding
      const mailtoUrl = "mailto:vrishnviswa.sathyamoorthy@gmail.com"

      // Try to open in a new tab first
      const newWindow = window.open(mailtoUrl, "_blank")

      // If that fails, try current window
      if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
        window.location.href = mailtoUrl
      }
    } catch (error) {
      // Fallback: copy email to clipboard
      handleEmailFallback()
    }
  }

  const handleEmailFallback = () => {
    const email = "vrishnviswa.sathyamoorthy@gmail.com"

    // Try to copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          alert(`📧 Email copied to clipboard!\n\n${email}`)
        })
        .catch(() => {
          alert(`📧 Please email me at:\n\n${email}`)
        })
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        alert(`📧 Email copied to clipboard!\n\n${email}`)
      } catch (err) {
        alert(`📧 Please email me at:\n\n${email}`)
      }
      document.body.removeChild(textArea)
    }
  }

  const downloadResume = () => {
    // Create resume content
    const resumeContent = `
VRISHN VISWA SATHYAMOORTHY
Computer Science Student & AI Innovator

Contact Information:
Email: vrishnviswa.sathyamoorthy@gmail.com
Phone: +1 (914) 879-5242
Location: University Park, USA
GitHub: github.com/KingReaper6940
LinkedIn: linkedin.com/in/vrishn-viswa-sathyamoorthy-5bb930281/

SUMMARY
Driven and entrepreneurial Computer Science undergraduate at Penn State University with dual enrollment in Data Science at IIT Madras. Demonstrated leadership through founding tech initiatives, including an AI Club and a conflict-aid organization. Experienced in software engineering through internships with Electronic Arts and Hewlett Packard. Passionate about machine learning, software development, and ethical AI, with hands-on experience leading real-world projects in game development, home price prediction and mental health tech solutions. Love educating the younger generation about AI and its applications.

EDUCATION
Bachelor of Science in Computer Science
The Pennsylvania State University | 2024 - 2028 (Expected)
University Park, PA

Bachelor of Science in Data Science  
Indian Institute of Technology, Madras | 2024 - 2028 (Expected)

High School Diploma
GEMS Millennium School Sharjah | 2019 - 2024
CBSE Class XII: 84% overall with Centum in Artificial Intelligence
CBSE Class X: 88%

EXPERIENCE
Software Engineer | Electronic Arts | December 2023
- Completed practical software engineering tasks in game development
- Wrote feature proposals for game enhancements
- Created game object classes and improved inventory systems
- Developed character creators and game mechanics

Backend Developer | Hewlett Packard | 2024
- Virtual internship as Backend developer
- Gained experience with JavaScript, SpringBoot and GreenLake

President | AI Club | 2022 - 2024
- Founded and led school's first AI Club
- Facilitated discussions on AI applications, risks, and ethical deployment
- Taught junior students about AI concepts and practical applications

Head Moderator | GMS MUN | 2024
- Organized, hired and led team of 15+ moderators
- Managed committee sessions and delegate coordination

PROJECTS
Aura (Co-founder)
- Award-winning mental health and wellness application
- Winner of University of West London National Science Fair
- Technologies: React, D3.js, Firebase, Material-UI, Chart.js

TrendFlip AI (Co-founder)
- AI-powered e-commerce platform for market trend analysis
- Technologies: Next.js, Python, TensorFlow, PostgreSQL, OpenAI API

Veswo Bot
- Advanced conversational AI assistant with NLP capabilities
- Technologies: Python, NLP, FastAPI, React, MongoDB

Nittany Eats
- Food delivery platform for Penn State students
- Technologies: React Native, Node.js, Express, MongoDB, Stripe API

SKILLS
Programming Languages: JavaScript, Python, Java, TypeScript
Frameworks & Libraries: React, Node.js, Next.js, Express, FastAPI, SpringBoot
Databases & Cloud: MongoDB, PostgreSQL, Firebase, AWS
AI & Machine Learning: TensorFlow, NLP, OpenAI API, LLM Engineering
Game Development: Game Object Design, Inventory Systems, Character Creation
`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Vrishn_Viswa_Sathyamoorthy_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const allExperiences = [
    {
      title: "Software Engineer",
      company: "Electronic Arts",
      date: "December 2023",
      description:
        "Completed practical software engineering tasks including writing feature proposals, creating game object classes, improving inventory systems, and developing character creators. Gained hands-on experience in game development workflows and software architecture.",
    },
    {
      title: "Backend Developer",
      company: "Hewlett Packard",
      date: "2024",
      description:
        "Participated in a Virtual internship with HP where I served as a Backend developer and learned to use JavaScript, SpringBoot and GreenLake.",
    },
    {
      title: "Full Stack Developer & LLM Engineer",
      company: "Personal Projects",
      date: "2022 - Present",
      description:
        "Developed multiple web applications including Aura, Vynn AIO Content, Clone Date AI, Briefly, Hidaya Spirit Guide, TrendFlip AI, Project One, Veswo Bot, and Nittany Eats, focusing on user experience, scalable architecture, and LLM integration for intelligent features. Created professional websites for modern management companies with emphasis on performance optimization and responsive design. Specialized in AI-powered applications including content generation, dating algorithms, summarization tools, and spiritual guidance platforms.",
    },
    {
      title: "President",
      company: "AI Club",
      date: "2022 - 2024",
      description:
        "Founded and led my school's First AI Club, facilitating in-depth discussions on AI's applications, risks, and ethical deployment. Taught junior students about AI concepts, practical applications, and the future of artificial intelligence in various industries.",
    },
    {
      title: "Head Moderator",
      company: "GMS MUN",
      date: "2024",
      description: "Organized, hired and led a team of over 15 moderators in committee sessions.",
    },
  ]

  const allProjects = [
    {
      title: "Aura",
      description:
        "Award-winning mental health and wellness application that won the University of West London National Science Fair. A comprehensive platform that uses advanced data visualization and machine learning to help users track their emotional patterns and provide personalized wellness insights. Features real-time mood tracking, AI-powered recommendations, and comprehensive analytics dashboard for mental health professionals.",
      tech: ["React", "D3.js", "Firebase", "Material-UI", "Chart.js", "Machine Learning"],
      github: "https://github.com/KingReaper6940/aura",
      status: "Co-founder",
      award: "University of West London National Science Fair Winner",
    },
    {
      title: "Vynn AIO Content",
      description:
        "All-in-one content creation platform powered by AI that generates, optimizes, and manages digital content across multiple formats. Streamlines content workflows for creators and businesses with intelligent automation and comprehensive content management tools.",
      tech: ["Next.js", "Python", "OpenAI API", "TypeScript", "TailwindCSS", "PostgreSQL"],
      github: "https://github.com/KingReaper6940/Vynnn",
      status: "Co-founder",
    },
    {
      title: "Clone Date AI",
      description:
        "Innovative AI dating application that creates personalized dating experiences through intelligent matching algorithms and conversation starters. Built with modern web technologies to revolutionize how people connect and find meaningful relationships.",
      tech: ["React", "Node.js", "AI/ML", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/rishabhsai/clone-date-ai",
      status: "Co-founder",
    },
    {
      title: "Briefly",
      description:
        "AI-powered summarization tool that transforms lengthy content into concise, digestible summaries. Features intelligent content analysis and customizable summary lengths for various document types, making information consumption more efficient.",
      tech: ["Python", "NLP", "FastAPI", "React", "OpenAI API", "TensorFlow"],
      github: "https://github.com/rishabhsai/briefly",
      status: "Co-founder",
    },
    {
      title: "Hidaya Spirit Guide",
      description:
        "Spiritual guidance application that provides personalized insights and recommendations based on Islamic teachings. Features AI-powered content generation and community-driven spiritual resources to help users on their spiritual journey.",
      tech: ["React Native", "Firebase", "AI/ML", "Node.js", "MongoDB"],
      github: "https://github.com/rishabhsai/-Hidaya-spiritguide/tree/Viswa's-Branch",
      status: "Co-founder",
    },
    {
      title: "TrendFlip AI",
      description:
        "AI-powered e-commerce platform that analyzes market trends and consumer behavior to help businesses optimize their product strategies and maximize sales potential.",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "OpenAI API"],
      status: "Co-founder",
    },
    {
      title: "Project One",
      description:
        "A sleek and professional website built for Project One, a modern management company. Developed using Next.js and deployed on Vercel, the site delivers fast performance, responsive design, and a seamless user experience. It effectively showcases the company's services and brand with a clean, intuitive layout.",
      tech: ["Next.js", "TypeScript", "CSS", "JavaScript", "Vercel"],
      github: "https://github.com/KingReaper6940/project-one",
      live: "https://project-one-j8f2-adqr6d70e-kingreaper6940s-projects.vercel.app/",
      status: "Co-founder",
    },
    {
      title: "Veswo Bot",
      description:
        "Advanced conversational AI assistant built with natural language processing capabilities, designed to provide intelligent responses and automated customer support solutions.",
      tech: ["Python", "NLP", "FastAPI", "React", "MongoDB"],
      github: "https://github.com/KingReaper6940/veswo---bot",
      status: "Co-founder",
    },
    {
      title: "Nittany Eats",
      description:
        "Comprehensive food delivery platform connecting Penn State students with local restaurants, featuring real-time order tracking, payment integration, and personalized recommendations.",
      tech: ["React Native", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/KingReaper6940/nittany-eats",
      status: "Co-founder",
    },
  ]

  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 4)

  const displayedExperiences = showAllExperiences ? allExperiences : allExperiences.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Vrishn
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3 pt-4">
                {["About", "Education", "Experience", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left text-base font-medium transition-all duration-300 hover:text-blue-400 px-2 py-1 ${
                      activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight px-2">
              Vrishn Viswa Sathyamoorthy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 font-medium px-2">
              Computer Science Student & AI Innovator
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Pioneering the intersection of artificial intelligence and ethical technology. Building tomorrow's
              solutions with today's innovation, one algorithm at a time. Passionate about educating the younger
              generation about AI and its transformative potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://github.com/KingReaper6940"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vrishn-viswa-sathyamoorthy-5bb930281/"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </Link>
            <button
              onClick={handleEmailClick}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail size={24} />
            </button>
          </div>

          <div className="mt-8 sm:mt-16 animate-bounce">
            <ChevronDown
              size={32}
              className="text-gray-400 mx-auto cursor-pointer hover:text-blue-400 transition-all duration-300 hover:scale-125"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto px-2">
                Driven and entrepreneurial Computer Science undergraduate at Penn State University with dual enrollment
                in Data Science at IIT Madras. Demonstrated leadership through founding tech initiatives, including an
                AI Club and a conflict-aid organization. Experienced in software engineering through internships with
                Electronic Arts and Hewlett Packard. Passionate about machine learning, software development, and
                ethical AI, with hands-on experience leading real-world projects in game development, home price
                prediction and mental health tech solutions. I love educating the younger generation about AI and its
                transformative potential in our world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-blue-400">
                <MapPin size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">University Park, USA</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-blue-400">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">+1 (914) 879-5242</span>
              </div>
              <button
                onClick={handleEmailClick}
                className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-blue-400"
              >
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">vrishnviswa.sathyamoorthy@gmail.com</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 sm:pl-8 py-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-gray-800/30 rounded-r-lg">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <div className="mb-2 lg:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">The Pennsylvania State University</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">2024 - 2028 (Expected)</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 mb-2">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">University Park, PA</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Freshman passionately pursuing a Bachelor of Science in Computer Science with a keen interest in
                minoring in Engineering.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 sm:pl-8 py-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-gray-800/30 rounded-r-lg">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <div className="mb-2 lg:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Bachelor of Science in Data Science</h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">
                    Indian Institute of Technology, Madras
                  </p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">2024 - 2028 (Expected)</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Freshman pursuing a Bachelor of Science in Data Science. Dedicated to building a strong foundation in
                data analytics and machine learning.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 sm:pl-8 py-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-gray-800/30 rounded-r-lg">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <div className="mb-2 lg:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">High School Diploma</h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">GEMS Millennium School Sharjah</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">2019 - 2024</span>
                </div>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge className="bg-green-600 hover:bg-green-700 text-xs">CBSE Class XII: 84%</Badge>
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">CBSE Class X: 88%</Badge>
                  <Badge className="bg-yellow-600 hover:bg-yellow-700 text-xs">🏆 Centum in AI</Badge>
                </div>
                <p className="mt-2 text-sm sm:text-base">
                  Graduated with excellent academic performance including a perfect score (Centum) in Artificial
                  Intelligence, demonstrating early passion and expertise in AI technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {displayedExperiences.map((experience, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 pl-4 sm:pl-8 py-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-gray-800/30 rounded-r-lg"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                  <div className="mb-2 lg:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{experience.title}</h3>
                    <p className="text-blue-400 font-medium text-sm sm:text-base">{experience.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{experience.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{experience.description}</p>
              </div>
            ))}
          </div>

          {allExperiences.length > 3 && (
            <div className="text-center mt-6 sm:mt-8">
              <Button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                variant="outline"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
              >
                {showAllExperiences ? (
                  <>
                    <EyeOff className="mr-2" size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <Eye className="mr-2" size={16} />
                    View All Experiences ({allExperiences.length})
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              A showcase of my recent work in AI, web development, and innovative applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {displayedProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border border-gray-700 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:border-blue-500/50 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg sm:text-xl mb-2 group-hover:text-blue-400 transition-colors text-white">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.status && (
                          <Badge
                            variant="outline"
                            className="text-xs border-blue-500 text-blue-400 hover:scale-110 transition-transform"
                          >
                            {project.status}
                          </Badge>
                        )}
                        {project.award && (
                          <Badge
                            variant="outline"
                            className="text-xs border-yellow-500 text-yellow-400 hover:scale-110 transition-transform"
                          >
                            🏆 Award Winner
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                        >
                          <Github size={20} />
                        </Link>
                      )}
                      {project.live && (
                        <Link
                          href={project.live}
                          className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                        >
                          <ExternalLink size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-300 border-gray-600 hover:scale-110 transition-transform hover:bg-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {allProjects.length > 4 && (
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={() => setShowAllProjects(!showAllProjects)}
                variant="outline"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
              >
                {showAllProjects ? (
                  <>
                    <EyeOff className="mr-2" size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <Eye className="mr-2" size={16} />
                    View All Projects ({allProjects.length})
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white group-hover:text-blue-400 transition-colors">
                Programming Languages
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
                  { name: "Python", level: 95, color: "from-green-400 to-green-600" },
                  { name: "Java", level: 80, color: "from-red-400 to-red-600" },
                  { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-xs sm:text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white group-hover:text-blue-400 transition-colors">
                Frameworks & Libraries
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "React", level: 92, color: "from-cyan-400 to-cyan-600" },
                  { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
                  { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
                  { name: "Express", level: 85, color: "from-gray-500 to-gray-700" },
                  { name: "FastAPI", level: 80, color: "from-teal-400 to-teal-600" },
                  { name: "SpringBoot", level: 75, color: "from-green-600 to-green-800" },
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-xs sm:text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white group-hover:text-blue-400 transition-colors">
                Databases & Cloud
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "MongoDB", level: 88, color: "from-green-400 to-green-600" },
                  { name: "PostgreSQL", level: 82, color: "from-blue-500 to-blue-700" },
                  { name: "Firebase", level: 85, color: "from-orange-400 to-orange-600" },
                  { name: "AWS", level: 78, color: "from-orange-500 to-orange-700" },
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-xs sm:text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white group-hover:text-blue-400 transition-colors">
                AI & Machine Learning
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "TensorFlow", level: 85, color: "from-orange-400 to-orange-600" },
                  { name: "NLP", level: 88, color: "from-purple-400 to-purple-600" },
                  { name: "OpenAI API", level: 92, color: "from-green-400 to-green-600" },
                  { name: "LLM Engineering", level: 90, color: "from-indigo-400 to-indigo-600" },
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-xs sm:text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Skill Tags */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">All Technologies</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-4xl mx-auto">
              {[
                { name: "JavaScript", category: "language" },
                { name: "Python", category: "language" },
                { name: "Java", category: "language" },
                { name: "TypeScript", category: "language" },
                { name: "React", category: "framework" },
                { name: "Node.js", category: "framework" },
                { name: "Next.js", category: "framework" },
                { name: "Express", category: "framework" },
                { name: "FastAPI", category: "framework" },
                { name: "SpringBoot", category: "framework" },
                { name: "MongoDB", category: "database" },
                { name: "PostgreSQL", category: "database" },
                { name: "Firebase", category: "database" },
                { name: "AWS", category: "database" },
                { name: "TensorFlow", category: "ai" },
                { name: "NLP", category: "ai" },
                { name: "OpenAI API", category: "ai" },
                { name: "LLM Engineering", category: "ai" },
                { name: "React Native", category: "framework" },
                { name: "D3.js", category: "framework" },
                { name: "Material-UI", category: "framework" },
                { name: "Chart.js", category: "framework" },
                { name: "Stripe API", category: "framework" },
                { name: "Tailwind CSS", category: "framework" },
                { name: "Git", category: "tool" },
                { name: "Docker", category: "tool" },
                { name: "Vercel", category: "tool" },
              ].map((tech, index) => {
                const categoryColors = {
                  language: "from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600",
                  framework: "from-green-500 to-green-700 hover:from-green-400 hover:to-green-600",
                  database: "from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600",
                  ai: "from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600",
                  tool: "from-gray-500 to-gray-700 hover:from-gray-400 hover:to-gray-600",
                }

                return (
                  <div
                    key={index}
                    className={`group relative px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r ${
                      categoryColors[tech.category as keyof typeof categoryColors]
                    } text-white font-medium text-xs sm:text-sm cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95`}
                  >
                    <span className="relative z-10">{tech.name}</span>
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                      {tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Skill Categories Legend */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { category: "Languages", color: "from-blue-500 to-blue-700", count: 4 },
              { category: "Frameworks", color: "from-green-500 to-green-700", count: 10 },
              { category: "Databases", color: "from-purple-500 to-purple-700", count: 4 },
              { category: "AI/ML", color: "from-orange-500 to-orange-700", count: 4 },
              { category: "Tools", color: "from-gray-500 to-gray-700", count: 3 },
            ].map((legend, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 transform transition-all duration-300 hover:scale-110"
              >
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${legend.color}`} />
                <span className="text-gray-300 text-xs sm:text-sm">
                  {legend.category} ({legend.count})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Let's Build Something Amazing Together</h2>
          <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-2">
            I'm always interested in new opportunities, collaborations, and innovative projects. Let's connect and
            discuss how we can work together to create the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-full font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              onClick={() => window.open("tel:+19148795242", "_self")}
            >
              <Phone className="mr-2" size={20} />
              Call Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={downloadResume}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/KingReaper6940"
              className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vrishn-viswa-sathyamoorthy-5bb930281/"
              className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin size={28} />
            </Link>
            <button
              onClick={handleEmailClick}
              className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-black text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          © 2024 Vrishn Viswa Sathyamoorthy. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
