import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      title: "1st Place - AI Clinical Decision Support System",
      type: "Hackathon Winner",
      date: "2025",
      description: "Developed an AI-powered clinical decision support system that assists healthcare professionals in making accurate diagnoses. The system uses machine learning algorithms to analyze patient data and provide real-time recommendations.",
      impact: "Improved diagnostic accuracy by 30% and reduced decision time by 70%",
      technologies: ["Python", "Machine Learning", "FastAPI", "React", "Healthcare AI"],
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "4th Place - AI based story and Plot Generation",
      type: "Hackathon Achievement",
      date: "2025",
      description: " Build an AI-powered storytelling platform that allows users to generate dynamic, branching narratives with a memory system for coherence, while also visualizing key story moments through high-quality generated images. The platform should allow users to explore various genres, customize plot elements, and maintain contextual integrity throughout the storytelling process.",
      impact: "An immersive AI-powered storytelling platform that revolutionizes creative expression by enabling users to craft coherent, dynamic, and visually enriched narratives across genres.",
      technologies: ["Python", "React", "RAG"],
      icon: "🥇",
      color: "from-blue-400 to-purple-500"
    },
   
  ]

  const stats = [
    { number: "2", label: "Hackathon Wins", icon: "🏆" },
    { number: "1", label: "Research Publication", icon: "📚" },
    { number: "10+", label: "Events Organized", icon: "🎯" }
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto container-mobile">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for technical excellence, innovation, and leadership in the field of technology and computer science
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 card-interactive"
            >
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="space-y-6 sm:space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 card-interactive"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                {/* Icon and Badge */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4`}>
                    {achievement.icon}
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="inline-block bg-white text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                      {achievement.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 2h8m-8 0V9a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2" />
                        </svg>
                        <span className="text-gray-500 font-medium text-sm sm:text-base">{achievement.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {achievement.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Impact & Results:</h4>
                    <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-primary-500">
                      <p className="text-gray-700 font-medium text-sm sm:text-base">{achievement.impact}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {achievement.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white text-gray-700 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200 hover:border-primary-300 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
