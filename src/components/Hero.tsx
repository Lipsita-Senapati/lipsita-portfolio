
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Lipsita Senapati
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 font-light">
            AI Engineer & GenAI Specialist
          </p>
          <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting production-grade AI solutions with 5+ years of experience in LLMs, 
            prompt engineering, and enterprise applications at Mercedes-Benz R&D India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
