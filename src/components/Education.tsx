import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Star } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Central Florida",
    location: "Orlando, FL",
    period: "2023 - 2025",
    description:
      "Specialized in Software Engineering and Building Scalable Applications",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "KMIT",
    location: "Hyderabad, IND",
    period: "2018 - 2022",
    description:
      "Focus on Software Engineering, Programming for Problem Solving, and Distributed Systems",
  },
];

const achievements = [
  // {
  //   title: "AWS Certified Solutions Architect – Associate",
  //   organization: "Amazon Web Services (AWS)",
  //   date: "January 2025",
  //   type: "certification", // can be "certification" or "award"
  //   description: "Learning and Practicing AWS services",
  // },
  {
    title: "Llama Award - Q1 2023",
    organization: "ServiceNow",
    date: "March 2023",
    type: "award", // can be "certification" or "award"
    description: `Recognized with award for excellent teamwork, strong communication 
    skills, debugging skills and contribution towards product success.`,
  },
  {
    title: "Knight Badge",
    organization: "Leetcode",
    date: "Nov 2022",
    type: "award",
    description: `Awarded Knight badge for being ranked among top 5% of LeetCode Problem Solvers`,
  },
  // Add more entries as needed
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My academic background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="font-semibold text-lg">{edu.school}</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Certifications, awards, and recognitions I’ve earned
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-full ${
                    achievement.type === "certification"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {achievement.type === "certification" ? (
                    <Award className="w-6 h-6 text-white" />
                  ) : (
                    <Star className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="font-semibold text-lg">
                  {achievement.organization}
                </p>
                <p className="text-md">{achievement.description}</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{achievement.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
