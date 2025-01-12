import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "House Rentals Application",
    description:
      "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Javascript"],
    github: "https://github.com/HrithikGit/house-rentals",
    live: "https://demo.com",
  },
  {
    title: "Sleep Disorder Prediction",
    description:
      "Developed an AI-powered image generation tool using Python and TensorFlow",
    image:
      "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=800",
    tech: [
      "Python",
      "Data Science",
      "Scikit-Learn",
      "Regression",
      "Random Forests",
    ],
    github: "https://github.com/HrithikGit/Sleep-Disorder-Prediction",
    live: "https://demo.com",
  },
  {
    title: "React Apps",
    description:
      "Collection of react mini projects - Travel List, Poker Transaction Calculator, Pizza Menu, etc",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800",
    tech: ["React", "Material-UI", "Javascript"],
    github: "https://github.com/HrithikGit/React-apps",
    live: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Some of my recent works
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {/* <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-gray-600 dark:text-gray-400">
          View More Projects at{" "}
          <a
            className="text-blue-600 hover:text-blue-500 dark:hover:text-blue-400"
            target="_blank"
            href="https://github.com/HrithikGit"
          >
            Github
          </a>
        </p>
      </div>
    </section>
  );
}
