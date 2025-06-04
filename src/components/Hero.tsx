
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Lipsita Senapati</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                GenAI Product Builder
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Building production-grade AI solutions that drive real-world automation through 
              <span className="text-purple-400 font-semibold"> LLM integration</span>, 
              <span className="text-cyan-400 font-semibold"> prompt engineering</span>, and 
              <span className="text-pink-400 font-semibold"> enterprise-ready platforms</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#projects" 
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              View My Work
              <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/lipsita-senapati/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm text-white px-6 py-4 rounded-full font-medium hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-600"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:lipsita3108@gmail.com"
                className="bg-slate-800/50 backdrop-blur-sm text-white px-6 py-4 rounded-full font-medium hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
