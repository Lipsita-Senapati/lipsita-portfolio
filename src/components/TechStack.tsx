
const TechStack = () => {
  const techStack = [
    { name: "Python", icon: "🐍", category: "Programming" },
    { name: "OpenAI GPT-4", icon: "🤖", category: "AI/ML" },
    { name: "Streamlit", icon: "⚡", category: "Frameworks" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Azure", icon: "☁️", category: "Cloud" },
    { name: "Git", icon: "📝", category: "Version Control" },
    { name: "LangChain", icon: "🔗", category: "AI/ML" },
    { name: "RAG Systems", icon: "🔍", category: "AI/ML" },
    { name: "Kubernetes", icon: "⚙️", category: "DevOps" },
    { name: "Golang", icon: "🔷", category: "Programming" },
    { name: "Java", icon: "☕", category: "Programming" },
    { name: "JIRA", icon: "📋", category: "Project Management" }
  ];

  const categories = [...new Set(techStack.map(tech => tech.category))];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technologies and tools I use to build amazing AI solutions
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {techStack
                .filter(tech => tech.category === category)
                .map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 text-center group border border-slate-700"
                    style={{ 
                      animationDelay: `${(categoryIndex * 4 + index) * 100}ms` 
                    }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {tech.name}
                    </h4>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
