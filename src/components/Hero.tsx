import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Wave from "react-wavify";
import profilePhoto from "../assets/profile3.jpg";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Java Developer",
  "Backend Developer",
  "Cloud Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(role.substring(0, text.length + 1));
          if (text.length === role.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(role.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white"
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Profile */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-xl"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hrithik Manda
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-xl md:text-2xl mb-6 h-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {text}
          <span className="animate-blink">|</span>
        </motion.h2>

        {/* Scroll to Explore */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg font-medium">Scroll to Explore</p>
          <motion.div
            className="mt-2 w-6 h-6 border-b-4 border-r-4 border-white"
            initial={{ rotate: 45 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Wave at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <Wave
          fill="currentColor"
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.25,
            points: 4,
          }}
          className="text-white dark:text-gray-600"
        />
      </div>
    </section>
  );
}
