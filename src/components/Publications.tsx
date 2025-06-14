
const Publications = () => {
  const publications = [
    {
      title: "WTM: An Interlinking Medium for Student Teacher Connectivity",
      authors: "Senapati, Lipsita, Piyush Kumar Sahoo, and Tripti Swarnkar",
      venue: "2018 2nd International Conference on Data Science and Business Analytics (ICDSBA). IEEE, 2018",
      type: "Conference Paper"
    },
    {
      title: "OMF: A SELF TESTING MODULE FOR PRE-DETERMINATION OF HEART ATTACK",
      authors: "Lipsita Senapati",
      venue: "International Journal of Scientific & Engineering Research - Certificate of Acceptance",
      type: "Journal Paper"
    },
    {
      title: "Application and Progress of Drone Technology in the COVID-19 Pandemic: A Comprehensive Review",
      authors: "Lipsita Senapati",
      venue: "CRC Press Published Book Chapter",
      type: "Book Chapter"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Research contributions in AI, data science, and emerging technologies
          </p>
        </div>

        <div className="grid gap-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-purple-900/30 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 border border-slate-700"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-700">
                  {publication.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {publication.title}
              </h3>
              <p className="text-slate-300 mb-2">
                <span className="font-medium text-white">Authors:</span> {publication.authors}
              </p>
              <p className="text-slate-400">
                <span className="font-medium text-white">Published in:</span> {publication.venue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
