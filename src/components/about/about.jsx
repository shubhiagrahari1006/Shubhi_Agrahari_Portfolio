import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import mitsLogo from "../../assets/mits_logo.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className="bg-[#030712] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <h2 className="text-5xl font-bold">
            About Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500"></div>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="mb-5 flex items-center gap-3">

              <div className="h-10 w-2 rounded-full bg-white"></div>

              <h3 className="text-3xl font-bold">
                Professional Summary
              </h3>

            </div>

            {/* Animated Skill Box */}

            <div className="mb-5 rounded-xl border border-white/10 bg-[#111827]/70 px-6 py-3">

              <div className="h-8 text-lg font-semibold text-blue-400">

                <TypeAnimation
                  sequence={[
                    "Artificial Intelligence",
                    1800,
                    "Machine Learning",
                    1800,
                    "Data Science",
                    1800,
                    "Full Stack Development",
                    1800,
                    "Open Source Contributor",
                    1800,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />

              </div>

            </div>

            {/* Summary Card */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="rounded-2xl border border-white/10 bg-[#1a2233] p-7 transition-all"
            >

              <p className="leading-8 text-gray-300">

                I'm a third-year B.Tech student pursuing
                Mathematics & Computing with a strong
                interest in Artificial Intelligence,
                Machine Learning, Data Science and
                Full Stack Development.

                <br /><br />

                I enjoy solving real-world problems through
                technology, building intelligent software,
                contributing to Open Source, participating
                in Hackathons and continuously learning
                new technologies.

              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: .15,
            }}
          >

            <div className="mb-5 flex items-center gap-3">

              <div className="h-10 w-2 rounded-full bg-white"></div>

              <h3 className="text-3xl font-bold">
                Education
              </h3>

            </div>

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#1a2233] p-7 transition-all"
            >

              <div>

                <h3 className="text-3xl font-bold">
                  Bachelor of Technology
                </h3>

                <p className="mt-3 text-xl text-gray-300">
                  Mathematics & Computing
                </p>

                <p className="mt-2 text-gray-400">
                  Madhav Institute of Technology
                  and Science, Gwalior
                </p>

                <span className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-medium">
                  2024 – 2028
                </span>

              </div>

              <img
                src={mitsLogo}
                alt="MITS"
                className="h-28 w-28 rounded-2xl bg-white p-3 object-contain"
              />

            </motion.div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Current Position */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay:.2
            }}
          >

            <div className="mb-5 flex items-center gap-3">

              <div className="h-10 w-2 rounded-full bg-white"></div>

              <h3 className="text-3xl font-bold">
                Current Position
              </h3>

            </div>

            <motion.div
              whileHover={{
                y:-6
              }}
              className="rounded-2xl border border-white/10 bg-[#1a2233] p-7 transition-all"
            >

              <div className="mb-6 flex gap-4">

                <div className="mt-2 h-3 w-3 rounded-full bg-green-500"></div>

                <div>

                  <h4 className="text-2xl font-bold">
                    AI / Machine Learning Intern
                  </h4>

                  <p className="text-gray-400">
                    Edunet Foundation × IBM SkillsBuild
                  </p>

                  <span className="mt-3 inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
                    May 2026 – June 2026
                  </span>

                </div>

              </div>

              <ul className="space-y-3 text-gray-300"> 
                              <li>
                  • Developed AI-powered solutions using Python and Machine Learning.
                </li>

                <li>
                  • Built intelligent applications using industry-oriented datasets.
                </li>

                <li>
                  • Worked with IBM SkillsBuild technologies and real-world AI workflows.
                </li>

                <li>
                  • Performed data preprocessing, model training and evaluation.
                </li>

              </ul>

            </motion.div>

          </motion.div>

          {/* Certifications */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: .3,
            }}
          >

            <div className="mb-5 flex items-center gap-3">

              <div className="h-10 w-2 rounded-full bg-white"></div>

              <h3 className="text-3xl font-bold">
                Certifications
              </h3>

            </div>

            <div className="grid gap-4">

              {[
                [
                  "Introduction to Data Science",
                  "Infosys Springboard",
                ],

                [
                  "Artificial Intelligence Fundamentals",
                  "IBM SkillsBuild",
                ],

                [
                  "Getting Started with Cybersecurity",
                  "IBM SkillsBuild",
                ],

                [
                  "DevQuest 2026 — 4th Rank",
                  "Unstop",
                ],

              ].map(([title, issuer], index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  className="rounded-xl border border-white/10 bg-[#1a2233] px-5 py-4 transition-all duration-300"
                >

                  <h4 className="text-lg font-semibold">
                    {title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    {issuer}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;