import React from 'react'

const About = () => {
  const highlights = [
    "🏆 Hackathon Winner",
    "📚 Springer Research Publication",
    "💼 Industry Internship Experience",
    "👨‍💼 Technical Leadership Role"
  ]

  const keywords = ["AI", "Full Stack", "Problem Solver"]

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto container-mobile">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4 sm:space-y-6">
              <p>
                I'm a final-year Computer Engineering student at PCCOE Pune with a strong passion for 
                artificial intelligence and full-stack development. My journey in technology has been 
                driven by curiosity and the desire to solve real-world problems through innovative solutions.
              </p>
              <p>
                From winning hackathons to publishing research in Springer, I've consistently pushed 
                the boundaries of what's possible with technology. My experience spans across AI/ML, 
                web development, and system design, with a particular focus on creating intelligent 
                applications that make a difference.
              </p>
              <p>
                As Technical Head at ACM PCCOE, I've had the opportunity to mentor fellow students 
                and organize technical events, fostering a culture of innovation and learning in 
                our academic community.
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights and Stats */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">Key Highlights</h3>
            <div className="space-y-3 sm:space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 card-interactive"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {index + 1}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="text-base sm:text-lg font-semibold text-gray-800">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">4+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">1</div>
                <div className="text-xs sm:text-sm text-gray-600">Research Publication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
