import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
const BASE_URL = import.meta.env.BASE_URL;
const projects = [

{
title:"CareerLens AI",

badge:"AI / Machine Learning",

video: `${BASE_URL}projects/careerlens.mp4`,

tech:[
"Python",
"Machine Learning",
"Pandas",
"NumPy",
"Scikit-Learn",
"Jupyter Notebook"
],

description:
"An AI-powered career recommendation platform that analyzes users' skills, education, and interests to recommend suitable career paths. It also performs skill-gap analysis and generates personalized learning roadmaps.",

features:[
"Personalized Career Recommendations",
"Skill Gap Analysis",
"Machine Learning Prediction",
"Career Roadmap Generator",
"EDA & Data Processing",
"Interactive Interface"
],

github:"https://github.com/shubhiagrahari1006/career-lens-ai/",



},

{
title:"AI Resume & Portfolio Builder",

badge:"AI",

video: `${BASE_URL}projects/resume_builder.mp4`,

tech:[
"Python",
"Flask",
"OpenAI API",
"HTML",
"CSS"
],

description:
"An AI-powered web application that generates ATS-friendly resumes and professional portfolio content using Generative AI. Developed during my AI & Machine Learning Internship at Edunet Foundation.",

features:[
"AI Resume Generation",
"Portfolio Content Generator",
"Prompt Engineering",
"ATS Friendly",
"Flask Backend",
"Input Validation"
],

github:"https://github.com/shubhiagrahari1006/Ai-ResumeBuilder",


},

{
title:"Cryptography-Based Secure Student Management System",

badge:"Full Stack",

image: `${BASE_URL}projects/cryptography.png`,

tech:[
"MySQL",
"HTML",
"CSS",
"JavaScript",
"Cryptography"
],

description:
"A secure student management system that protects sensitive academic records using authentication, role-based access control and cryptographic techniques.",

features:[
"Student Record Management",
"Secure Authentication",
"Role Based Access",
"Data Encryption",
"MySQL Integration",
"CRUD Operations"
],

live:"https://secure-edu-system-8fag.vercel.app/"


},

{
title:"Binance Futures Trading Bot",

badge:"Python",

image: `${BASE_URL}projects/trading_bot.png`,

tech:[
"Python",
"Streamlit",
"Binance API",
"python-binance",
"dotenv"
],

description:
"A Python trading bot for Binance USDT-M Futures Testnet supporting Market & Limit Orders through CLI and Streamlit dashboard.",

features:[
"Market & Limit Orders",
"Binance Futures",
"Streamlit Dashboard",
"CLI",
"Logging",
"Reusable Architecture"
],

github:"https://github.com/shubhiagrahari1006/binance-futures-trading-bot"

},

{
  title: "TrackMyBus - Real-Time Public Bus Tracking",

  badge: "Web",

  image: `${BASE_URL}projects/airport.png`,

  tech: [
    "React.js",
    "Firebase",
    "Google Cloud",
    "Cloud Run",
    "PWA",
    "Realtime Database"
  ],

  description:
    "TrackMyBus is a real-time public bus tracking platform that enables passengers to monitor live bus location, estimated arrival time, and seat availability. Drivers can securely update trip information while administrators manage routes, buses, and occupancy through a centralized dashboard.",

  features: [
    "Live Bus Tracking",
    "Real-Time Seat Availability",
    "Driver & Admin Panels",
    "Firebase Authentication",
    "Realtime Database Sync",
    "Progressive Web App (PWA)"
  ],

  github: "https://github.com/shubhiagrahari1006/newSync",

  live: "https://trackmybus-7f770.web.app/"
},

];
function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#030712] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <h2 className="text-5xl font-bold">
            What I've Built
          </h2>

          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-blue-500"></div>

          <p className="mt-6 text-lg text-gray-400">
            My favorite builds and personal creations.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              {/* Header */}

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">
                  {project.badge}
                </span>

              </div>

              {/* Tech */}

              <div className="mb-8 flex flex-wrap gap-3">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Preview */}

              {project.video ? (

                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="mb-6 h-56 w-full rounded-2xl border border-white/10 object-cover"
                />

              ) : (

                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 h-56 w-full rounded-2xl border border-white/10 object-cover"
                />

              )}

              {/* Description */}

              <p className="text-sm leading-7 text-gray-300">
                {project.description}
              </p>
                            {/* Key Features */}

              <div className="mt-8">

                <h4 className="mb-5 text-xl font-semibold text-white">
                  • Key Features
                </h4>

                <div className="grid gap-4 md:grid-cols-2">

                  {project.features.map((feature) => (

                    <div
                      key={feature}
                      className="rounded-lg border border-white/10 bg-[#0B1220]/70 px-4 py-3 text-sm text-gray-300"
                    >
                      • {feature}
                    </div>

                  ))}

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-5">

                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-500"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0B1220] px-5 py-2.5 font-medium text-white transition hover:border-blue-500"
                >
                  <FaGithub />
                  Source Code
                </a>

              </div>

            </div>

          ))}

        </div>

        {/* Github CTA */}

        <div className="mt-24 text-center">

          <h2 className="text-4xl font-bold">
            Want to see more?
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Check out my GitHub for more projects and contributions.
          </p>

          <a
            href="https://github.com/shubhiagrahari1006"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            <FaGithub size={22} />
            Explore GitHub
            
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;