import "./hero.css";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg grid-bg relative flex min-h-screen items-center justify-center px-6 pt-28"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center pb-28">

        {/* Greeting */}

        <p className="mb-4 text-xl text-gray-400">
          Hi, I'm
        </p>

        {/* Name */}

        <h1 className="mb-6 font-['Poppins'] text-6xl font-bold leading-tight text-white md:text-8xl">
          Shubhi Agrahari
        </h1>

        {/* Animated Role */}

        <div className="mb-8 h-12 text-2xl font-medium text-blue-400 md:text-4xl">
          <TypeAnimation
            sequence={[
              "AI & Data Science Enthusiast",
              2000,
              "Machine Learning Developer",
              2000,
              "Full-Stack Web Developer",
              2000,
              "Research Analyst",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}

        <p className="mb-10 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl">
          Building intelligent applications with Python, Machine Learning,
          and modern web technologies. Always learning, always creating.
        </p>

        {/* Skills */}

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {[
            "Python",
            "Machine Learning",
            "SQL",
            "HTML",
            "CSS",
            "React.js",
            "JavaScript",
            "Node.js",
            "Pandas",
            "NumPy",
            "Matplotlib",
          ].map((skill) => (
            <span
              key={skill}
              className="skill-pill rounded-full border border-white/10 px-5 py-2 text-sm text-gray-300 backdrop-blur-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap items-center justify-center gap-5">

          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-80}
          >
            <button className="hero-btn flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-medium text-white transition hover:bg-blue-500">
              View Projects
              <ArrowRight size={18} />
            </button>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
          >
            <button className="hero-btn flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition hover:border-blue-500 hover:bg-white/10">
              <Mail size={18} />
              Get In Touch
            </button>
          </Link>

        </div>

        {/* Scroll Indicator */}
<Link
  to="about"
  smooth={true}
  duration={700}
  offset={-80}
  className="scroll-indicator"
>
  <motion.div
    className="scroll-arrow"
    animate={{ y: [0, 8, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.6,
    }}
  >
    <ChevronDown size={28} />
  </motion.div>

  <span className="scroll-text">
    Scroll to explore
  </span>
</Link>
 </div>
    </section>
  );
}

export default Hero;