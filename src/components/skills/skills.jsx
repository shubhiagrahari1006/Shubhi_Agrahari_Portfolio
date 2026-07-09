import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFirebase,
  SiFlask,
  SiStreamlit,
  SiJavascript,
  SiC,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={18} color="#FFD43B" /> },
  { name: "MySQL", icon: <SiMysql size={18} color="#00758F" /> },
  { name: "HTML", icon: <FaHtml5 size={18} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={18} color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript size={18} color="#F7DF1E" /> },

  { name: "React", icon: <FaReact size={18} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={18} color="#3C873A" /> },
  { name: "Pandas", icon: <SiPandas size={18} color="#ffffff" /> },
  { name: "NumPy", icon: <SiNumpy size={18} color="#4DABCF" /> },
  { name: "Scikit Learn", icon: <SiScikitlearn size={18} color="#F7931E" /> },
  { name: "Flask", icon: <SiFlask size={18} color="#ffffff" /> },

  { name: "Streamlit", icon: <SiStreamlit size={18} color="#FF4B4B" /> },
  { name: "Firebase", icon: <SiFirebase size={18} color="#FFA611" /> },
  { name: "Git", icon: <FaGitAlt size={18} color="#F1502F" /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#030712] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-14 text-center"
        >

          <h2 className="text-5xl font-bold text-white">
            Technical Skills
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500"></div>

          <p className="mt-5 text-lg text-gray-400">
            Tools, languages & technologies I love to work with
          </p>

        </motion.div>

        <div className="mx-auto flex max-w-[860px] flex-wrap justify-center gap-5">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 35,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              animate={{
                y: [0, -4, 0],
              }}
                            transition={{
                y: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2.8,
                  delay: index * 0.12,
                },
                opacity: {
                  duration: 0.45,
                },
              }}

              whileHover={{
                y: -6,
                scale: 1.05,
              }}

              className="group flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,.25)]"
            >

              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {skill.icon}
              </div>

              <h3 className="mt-1 text-xs font-medium text-center text-white leading-tight">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;