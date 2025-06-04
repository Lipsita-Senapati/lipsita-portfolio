
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research contributions in AI, data science, and emerging technologies
          </p>
        </div>

        <div className="grid gap-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {publication.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {publication.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Authors:</span> {publication.authors}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Published in:</span> {publication.venue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
