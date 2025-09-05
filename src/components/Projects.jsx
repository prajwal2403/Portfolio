import React, { useState } from 'react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: "AI Clinical Decision Support System",
      category: "AI/ML",
      description: "Hackathon-winning AI system that assists healthcare professionals in making clinical decisions with improved accuracy and efficiency.",
      technologies: ["Python", "FastAPI", "Machine Learning", "React", "MongoDB"],
      features: [
        "Real-time clinical decision support",
        "ML-based risk assessment",
        "Interactive dashboard",
        "70% faster diagnosis process"
      ],
      award: "🏆 1st Place Winner",
      github: "https://github.com/prajwal2403/Eternals_AB2_03.git",
      demo: "#",
    image: "/images/Screenshot 2025-03-02 092618.png"
    },
    {
      id: 2,
      title: "AI Storytelling Platform",
      category: "AI/ML",
      description: "Interactive platform using RAG and Llama for generating personalized stories with advanced natural language processing.",
      technologies: ["Python", "RAG", "Llama", "FastAPI", "React", "Qdrant"],
      features: [
        "Personalized story generation",
        "RAG-based content retrieval",
        "Interactive story customization",
        "Real-time narrative adaptation"
      ],
      github: "https://github.com/prajwal2403/Eternal_BlueBit_PS10.git",
      demo: "#",
      image: "/images/Screenshot 2025-03-22 093629.png"
    },
    {
      id: 3,
      title: "Diabetes Risk Prediction System",
      category: "AI/ML",
      description: "Machine learning system for early diabetes risk prediction using advanced clustering algorithms and patient data analysis.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "JavaScript"],
      features: [
        "Advanced ML clustering",
        "Risk factor analysis",
        "Predictive modeling",
        "Healthcare data visualization"
      ],
      github: "https://github.com/prajwal2403/Resume-Ranker.git",
      demo: "#",
      image: "images/Screenshot 2025-08-27 102537.png"
    },
    {
      id: 4,
      title: "Hotel Booking Application",
      category: "Full Stack",
      description: "Comprehensive hotel booking platform built during internship with modern web technologies and optimized performance.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "User authentication & authorization",
        "Real-time booking system",
        "Payment gateway integration",
        "20% faster retrieval performance"
      ],
      github: "https://github.com/prajwal2403/Eatplus_new.git",
      demo: "#",
      image: "images/JustEat+Menu+Food+Photography+Guidelines+-+Bundles.webp"
    }
  ]

  const categories = ['All', 'AI/ML', 'Full Stack', 'Tools']
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, full-stack development, and real-world problem solving
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-1 sm:gap-2 bg-white p-1 sm:p-2 rounded-lg shadow-lg max-w-full overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 rounded-md font-semibold transition-all duration-300 whitespace-nowrap text-sm sm:text-base min-h-[44px] flex items-center justify-center ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden card-interactive"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-110 responsive-img"
                  loading="lazy"
                />
                {project.award && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {project.award}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">{project.title}</h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs sm:text-sm self-start sm:self-auto whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 bg-primary-600 text-white text-center py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/prajwal2403"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
