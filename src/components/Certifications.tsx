
const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      provider: "Microsoft",
      icon: "☁️"
    },
    {
      name: "Developing Solutions for Microsoft Azure (AZ-204)",
      provider: "Microsoft",
      icon: "⚡"
    },
    {
      name: "Career Essentials in Generative AI",
      provider: "Microsoft",
      icon: "🤖"
    },
    {
      name: "Career Essentials in Project Management",
      provider: "Microsoft and LinkedIn",
      icon: "📋"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional certifications in cloud technologies and AI
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 text-center group border border-slate-700"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {cert.name}
              </h3>
              <p className="text-slate-300 font-medium">
                {cert.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
