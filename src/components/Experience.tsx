import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "University of Central Florida",
    position: "Teaching Assistant",
    period: "2023 - 2022",
    location: "Orlando, FL",
    description:
      "Assisted students in Data Structures and Computer Forensics by explaining concepts, conducting labs, grading assignments, and providing feedback. Supported practical applications of theory through one-on-one and group guidance.",
  },
  {
    company: "ServiceNow",
    position: "Associate Software Engineer",
    period: "2022 - 2023",
    location: "Hyderabad, IND",
    description:
      "Developed 'Security Incident Response' applications on the ServiceNow platform, driving $112M in quarterly revenue using Java, JavaScript, ReactJS, and Elasticsearch. Designed scalable APIs and integrations, expanding services for 210+ clients and acquiring 10 new ones. Built a Vendor Scanning tool, reducing defects by 43%, and optimized database performance, boosting efficiency by 64%.",
  },
  {
    company: "NCR Corporation",
    position: "Software Development Engineer",
    period: "2021- 2022",
    location: "Hyderabad, IND",
    description:
      "Implemented enterprise applications for NCR Payments Platforms using Java, React, Spring, AWS, and MySQL. Enhanced a JEE application with JBoss to process $24M in daily cheque transactions efficiently. Leveraged JPA and Hibernate for ORM, improving query efficiency by 58%.",
  },
  {
    company: "Mindler",
    position: "Frontend Developer",
    period: "2021 - 2021",
    location: "Hyderabad, IND",
    description:
      "Redesigned and optimized webpages using React, Redux, PHP, and MySQL, reducing page rendering time by 60%. Built a chatbot serving 300K monthly users and migrated legacy PHP applications to React with modern design principles. Collaborated in Agile workflows, ensuring efficient project delivery through sprints and stand-ups.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute hidden md:block ${
                  index % 2 !== 0 ? "left-0" : "left-0 md:left-auto md:right-0"
                } w-4 h-4 bg-blue-500 rounded-full transform ${
                  index % 2 !== 0 ? "-translate-x-1/2" : "md:translate-x-1/2"
                } top-6`}
              />
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500 rounded-full">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                  </div>
                </div>

                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-600 dark:text-gray-400">
          View Detailed Work Experiences at{" "}
          <a
            className="text-blue-600 hover:text-blue-500 dark:hover:text-blue-400"
            target="_blank"
            href="https://www.linkedin.com/in/hrithik-manda/#experience"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
