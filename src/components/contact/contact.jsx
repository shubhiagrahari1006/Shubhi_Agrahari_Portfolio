import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#030712] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Let's Connect
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500"></div>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Let's connect to build, learn, and create technology that makes a difference.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {/* Email */}

          <a
            href="mailto:shubhigrhr@gmail.com"
            className="rounded-3xl border border-white/10 bg-[#111827]/70 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
          >

            <FaEnvelope
              size={40}
              className="mx-auto mb-5 text-pink-500"
            />

            <h3 className="text-2xl font-semibold">
              Email
            </h3>

            <p className="mt-2 text-gray-400">
              Drop me a line
            </p>

            <p className="mt-4 text-blue-400 break-all">
              shubhigrhr@gmail.com
            </p>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/shubhi-agrahari-2b688633a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-[#111827]/70 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
          >

            <FaLinkedin
              size={40}
              className="mx-auto mb-5 text-blue-500"
            />

            <h3 className="text-2xl font-semibold">
              LinkedIn
            </h3>

            <p className="mt-2 text-gray-400">
              Let's network
            </p>

            <p className="mt-4 text-blue-400">
              Connect with me
            </p>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/shubhiagrahari1006"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-[#111827]/70 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
          >

            <FaGithub
              size={40}
              className="mx-auto mb-5"
            />

            <h3 className="text-2xl font-semibold">
              GitHub
            </h3>

            <p className="mt-2 text-gray-400">
              Check out my repositories
            </p>

            <p className="mt-4 text-blue-400">
              View my code
            </p>

          </a>

        </div>

        {/* CTA */}

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-[#111827]/70 p-12 text-center backdrop-blur-xl">

          <h3 className="text-4xl font-bold">
            Ready to collaborate?
          </h3>

          <p className="mt-5 text-lg text-gray-400">
            I'm always open to discussing new opportunities,
            innovative ideas, AI projects, and collaborations.
          </p>

          <a
            href="mailto:shubhigrhr@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
          >
            <FaEnvelope />
            Start a Conversation
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;