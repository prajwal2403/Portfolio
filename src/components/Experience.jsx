import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Brainchain MPI People Pvt. Ltd.)",
      period: "Summer 2025",
      location: "Remote",
      description: "Developed and optimized hotel booking applications using modern web technologies with focus on performance and user experience.",
      achievements: [
        "Built 5+ full-stack features including booking system and user dashboard",
        "Improved data retrieval performance by 20% through optimization",
        "Collaborated with cross-functional teams using Agile methodology",
        "Implemented responsive UI components with React and modern CSS",
        "Utilized Git, GitHub, and Jira for version control and project management"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "Jira", "REST APIs"],
      type: "internship"
    },
    {
      title: "Technical Head",
      company: "ACM PCCOE",
      period: "2024 - 2025",
      location: "Pune, India",
      description: "Leading technical initiatives and mentoring students in computer science and engineering activities.",
      achievements: [
        "Organized multiple technical workshops and coding competitions",
        "Mentored 50+ students in programming and development",
        "Coordinated hackathons and technical events",
        "Built technical community and fostered innovation culture",
        "Managed team of 15+ technical committee members"
      ],
      technologies: ["Leadership", "Event Management", "Technical Mentoring", "Team Coordination"],
      type: "leadership"
    }
  ]

  const getIcon = (type) => {
    if (type === 'internship') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
        </svg>
      )
    }
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto container-mobile">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience and leadership roles that shaped my technical and interpersonal skills
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line - Hidden on mobile for cleaner look */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-16 sm:top-20 w-0.5 h-24 sm:h-32 bg-gray-300 hidden md:block"></div>
              )}
              
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 card-interactive">
                <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 self-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      {getIcon(exp.type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">{exp.title}</h3>
                        <p className="text-base sm:text-lg text-gray-900 font-semibold">{exp.company}</p>
                      </div>
                      <div className="lg:text-right lg:flex-shrink-0">
                        <p className="text-gray-600 font-medium text-sm sm:text-base">{exp.period}</p>
                        <p className="text-gray-500 text-xs sm:text-sm">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Key Achievements:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-2 mr-2 sm:mr-3"></span>
                            <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-200 hover:border-primary-300 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Looking for Opportunities
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              I'm actively seeking full-time opportunities where I can contribute my skills in AI/ML 
              and full-stack development while continuing to grow and learn.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold text-sm sm:text-base min-h-[44px]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
