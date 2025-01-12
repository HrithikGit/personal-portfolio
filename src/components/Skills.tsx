import { motion } from "framer-motion";
import javaIcon from "../assets/java.svg";
import springIcon from "../assets/spring.svg";
import pythonIcon from "../assets/python.svg";
import javascriptIcon from "../assets/javascript.svg";
import nodejsIcon from "../assets/nodejs.svg";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import htmlIcon from "../assets/html-5.svg";
import cssIcon from "../assets/tailwindcss.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import mongodbIcon from "../assets/mongodb.svg";
import linuxIcon from "../assets/linux.svg";
import awsIcon from "../assets/aws.svg";
import githubIcon from "../assets/github-icon.svg";
import visualStudioIcon from "../assets/visual-studio-code.svg";
import flaskIcon from "../assets/flask.svg";

const skills = [
  { name: "Java", icon: javaIcon },
  { name: "Spring", icon: springIcon },
  { name: "Python", icon: pythonIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "NodeJS", icon: nodejsIcon },
  { name: "ReactJS", icon: reactIcon },
  { name: "Flask", icon: flaskIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Linux", icon: linuxIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Github", icon: githubIcon },
  { name: "VS Code", icon: visualStudioIcon },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
  >
    <div>
      <div className="flex justify-center h-12 text-blue-500 dark:text-blue-400 transition-colors">
        <img alt={skill.name} src={skill.icon} width="50%" />
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
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
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies & Tools I work with
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
