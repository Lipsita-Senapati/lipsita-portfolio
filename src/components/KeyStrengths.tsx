
const KeyStrengths = () => {
  const strengths = [
    {
      category: "Personal Qualities",
      skills: [
        "Team player, adaptable and Initiator",
        "Strong organizational skills and the ability to prioritize in a fast-paced environment",
        "Great written and verbal communication skills",
        "Excellent Presentation Skills"
      ],
      icon: "💪",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      category: "LLM Integration",
      skills: [
        "OpenAI GPT-4, Azure OpenAI",
        "LangChain, RAG",
        "Token Management"
      ],
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      category: "Prompt Engineering",
      skills: [
        "Zero-shot/few-shot prompts",
        "Prompt tuning",
        "Deterministic prompt design"
      ],
      icon: "🎯",
      gradient: "from-green-500 to-teal-600"
    },
    {
      category: "AI/ML Engineering",
      skills: [
        "Model APIs, Inference Pipelines",
        "Model Evaluation",
        "Token Optimization"
      ],
      icon: "🔬",
      gradient: "from-orange-500 to-red-600"
    },
    {
      category: "RAG Architecture",
      skills: [
        "Vector Databases",
        "Document Chunking",
        "Retrieval Pipelines, Prompt Fusion"
      ],
      icon: "🏗️",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      category: "Dev & Deployment",
      skills: [
        "Python, Streamlit, Docker",
        "Swagger, Git, Azure DevOps",
        "Kubernetes"
      ],
      icon: "⚙️",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      category: "Project Management",
      skills: [
        "JIRA, Confluence, Mural",
        "Trello, Miro, Scrum",
        "Stakeholder Management, Roadmapping"
      ],
      icon: "📊",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      category: "Tools & Technologies",
      skills: [
        "VS Code, Sonar, FossID",
        "Postman, Swagger UI",
        "Azure DevOps, Git"
      ],
      icon: "🛠️",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Key Strengths
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core competencies and technical expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${strength.gradient} rounded-t-lg -mx-6 -mt-6 mb-6`}></div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{strength.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {strength.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {strength.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${strength.gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStrengths;
