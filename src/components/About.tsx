
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                With over 5 years of experience in AI engineering, I specialize in developing production-grade 
                AI solutions and enterprise-ready applications. My expertise spans LLMs, prompt engineering, 
                and Generative AI pipelines, with a strong foundation in Python, Streamlit, and OpenAI APIs.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-cyan-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Role</h3>
              <p className="text-gray-700 leading-relaxed">
                At Mercedes-Benz R&D India, I lead the development of GenAI platforms like TestPilot 
                for automated API test case generation using GPT-4, and MBAssist, an internal AI assistant 
                that revolutionizes workflow automation through RAG-enhanced prompts.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-pink-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Background</h3>
              <p className="text-gray-700 leading-relaxed">
                I started my career at Robert Bosch, building microservices and contributing to early 
                AI integration efforts. This foundation gave me unique insights into enterprise-scale 
                AI implementation and the challenges of production deployment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-orange-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about building AI tools that drive real-world impact through automation, 
                context-aware reasoning, and smart workflow integration. My work focuses on making AI 
                accessible and practical for enterprise environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
