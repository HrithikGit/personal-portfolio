import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 dark:text-white">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Hello there! here is a little about me - I'm a software developer
              with a passion for turning coffee into code. 💻. I'm currently
              pursuing my Master's degree in Computer Science at University of
              Central Florida 🎓. I've previously worked at MNCs like
              ServiceNow, NCR Corp, and Mindler, developing apps and meeting
              client needs while boosting performance with Java, Python,
              JavaScript, MySQL, and AWS.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I enjoy solving problems and building new solutions💡. Building
              solutions for problems I've personally faced – how cool is that?!
              🕶️. Let's connect and make awesome things happen!
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me playing different sports like
              cricket, badminton and of course ping pong 🏓 which I've learned
              in office. Shifting to reading books from binge watching movies
              and series📚.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
