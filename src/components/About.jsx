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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                I'm a final-year Computer Engineering student at PCCOE Pune with a strong passion for 
                artificial intelligence and full-stack development. My journey in technology has been 
                driven by curiosity and the desire to solve real-world problems through innovative solutions.
              </p>
              <p className="mb-6">
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
            <div className="flex flex-wrap gap-3 mt-8">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Highlights</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-800">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900">4+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-600">Research Publication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
