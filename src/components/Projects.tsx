
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "TestPilot - Mercedes-Benz AI Test Generator",
      description: "Led the development of a GenAI-based web application that harnesses GenAI to generate API test scenarios and test cases from Swagger JSON, reducing manual testing effort by 60%.",
      technologies: ["Python", "Streamlit", "OpenAI GPT-4", "Swagger", "JSON"],
      highlights: [
        "Owned the product roadmap from concept to rollout",
        "Built end-to-end test case generation pipeline using GenAI",
        "Developed prompt engineering logic that reduced manual testing effort by 60%",
        "Built dynamic UI for input selection (endpoints, EV models, and prompt templates)"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "MBAssist - AI-Powered Enterprise Assistant",
      description: "Designed and developed an internal AI assistant supporting tasks like meeting summarization, JIRA ticket creation, and code explanation through RAG-enhanced prompts.",
      technologies: ["Python", "RAG", "LangChain", "OpenAI", "Enterprise APIs"],
      highlights: [
        "Designed and iterated prompt templates using few-shot learning",
        "Explored RAG-based enhancements for context-aware prompt conditioning",
        "Managed model response evaluation metrics and edge case handling",
        "Prototyped GPT-based solutions for vehicle diagnostics and documentation"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Oversized Vehicle Navigation (OVN)",
      description: "Developed a routing solution integrated with the Mercedes me App and MBUX navigation system to ensure oversized vehicles receive dimension-aware, compatible routes. The system factors in vehicle dimensions to prevent routing through restricted zones.",
      technologies: ["Golang", "Visual Studio", "Docker", "Kubernetes", "Azure DevOps"],
      highlights: [
        "Contributed to the backend development of dimension-aware routing logic",
        "Integrated FOSS certification and Sonarqube in the Code Pipeline",
        "Collaborated with cross-functional teams to ensure end-to-end validation and rollout",
        "Participated in user testing to refine vehicle setting updates and routing accuracy"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Microservices & AI Integration - Robert Bosch",
      description: "Developed microservices in Spring Boot and contributed to early GenAI integrations, participating in AI-driven service design discussions.",
      technologies: ["Spring Boot", "Microservices", "CI/CD", "Docker", "AI Integration"],
      highlights: [
        "Built custom API monitoring tools and optimized endpoint logic using Swagger specs",
        "Participated in AI-driven service design discussions",
        "Set the stage for early GenAI integrations",
        "Contributed to scalable architecture design"
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing impactful AI solutions that drive real-world automation and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-lg text-slate-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50 transition-colors duration-300 border border-purple-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
