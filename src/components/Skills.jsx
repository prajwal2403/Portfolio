import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90, color: "bg-yellow-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-400" },
        { name: "C++", level: 80, color: "bg-blue-500" },
        { name: "C", level: 75, color: "bg-gray-600" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-400" },
        { name: "FastAPI", level: 85, color: "bg-green-600" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "Qdrant", level: 80, color: "bg-purple-500" },
        { name: "SQL", level: 75, color: "bg-blue-600" },
        { name: "Firebase", level: 70, color: "bg-yellow-600" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: "🤖",
      skills: [
        { name: "Machine Learning", level: 85, color: "bg-purple-600" },
        { name: "RAG Systems", level: 80, color: "bg-indigo-500" },
        { name: "Clustering", level: 75, color: "bg-teal-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
        { name: "Docker", level: 75, color: "bg-blue-600" },
        { name: "Render", level: 70, color: "bg-purple-500" },
        { name: "VS Code", level: 95, color: "bg-blue-500" }
      ]
    }
  ]

  

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       

        

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Continuously learning and staying updated with the latest technologies and best practices 
            in software development and artificial intelligence.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills
