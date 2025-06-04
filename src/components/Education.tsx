
const Education = () => {
  const educationData = [
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "Siksha 'O'Anusandhan University, Bhubaneswar",
      period: "August 2016 – June 2020",
      grade: "CGPA: 8.69",
      icon: "🎓"
    },
    {
      degree: "All India Secondary School Examination",
      institution: "Prabhujee English Medium School, Bhubaneswar",
      period: "June 2014 – June 2016",
      grade: "Grade: 88.2%",
      icon: "📚"
    },
    {
      degree: "Central Board of Secondary Education",
      institution: "Prabhujee English Medium School, Bhubaneswar",
      period: "Passing Year – May 2014",
      grade: "CGPA: 10/10 - School Topper",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 border border-slate-700"
            >
              <div className="flex items-start space-x-6">
                <div className="text-4xl">{education.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-purple-400 font-semibold mb-2">
                    {education.institution}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <p className="text-slate-300 mb-2 sm:mb-0">
                      {education.period}
                    </p>
                    <p className="text-white font-semibold">
                      {education.grade}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
