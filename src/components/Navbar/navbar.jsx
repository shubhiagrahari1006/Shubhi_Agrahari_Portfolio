import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/75 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-10">

        <div className="grid h-20 grid-cols-[80px_1fr_180px] items-center">

          {/* Profile */}

          <div>
            <img
              src="/profile.jpeg"
              alt="Shubhi Agrahari"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>

          {/* Navigation */}

          <nav className="hidden md:flex justify-center gap-14">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={600}
                offset={-70}
                spy={false}
                className="cursor-pointer text-[17px] font-medium text-gray-300 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Resume */}

          <div className="hidden md:flex justify-end">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <Download size={17} />
              Resume
            </a>

          </div>

          {/* Mobile */}

          <button
            className="ml-auto text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {isOpen && (
        <div className="bg-[#030712]/95 backdrop-blur-lg md:hidden">

          <div className="flex flex-col gap-6 px-8 py-6">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={600}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-lg text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;