import React from 'react';

const SkillsSection = () => {
  const skills = {
    'Frontend': ['HTML', 'React', 'JavaScript', 'CSS/Tailwind'],
    'Backend': ['Python', 'C/C++', 'Node.js', 'PHP', 'MongoDB'],
    'Tools': ['Git', 'Docker', 'AWS']
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;