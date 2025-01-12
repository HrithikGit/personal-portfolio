import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12 dark:text-white">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:mandhahrithik819@gmail.com">
              <div className="flex flex-col items-center">
                <Mail
                  className="text-blue-500 mb-4 dark:text-blue-400"
                  size={24}
                />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  mandhahrithik819@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:13213189190">
              <div className="flex flex-col items-center">
                <Phone
                  className="text-blue-500 mb-4 dark:text-blue-400"
                  size={24}
                />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +1 321 318 9190
                </p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/Orlando,+FL"
              target="_blank"
            >
              <div className="flex flex-col items-center">
                <MapPin
                  className="text-blue-500 mb-4 dark:text-blue-400"
                  size={24}
                />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Orlando, FL</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
