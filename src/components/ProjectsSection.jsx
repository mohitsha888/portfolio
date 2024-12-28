import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Project Two",
      description: "E-commerce platform with real-time updates",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Stripe", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Project Three",
      description: "AI-powered data visualization dashboard",
      image: "/api/placeholder/600/400",
      tags: ["Python", "React", "TensorFlow"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.9 : 0.6 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-300 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;