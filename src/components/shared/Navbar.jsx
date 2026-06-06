import { useState, useEffect } from "react";
import { name } from "@/constants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useModal } from "../ui/animated-modal";

const Navbar = () => {
  const { setOpen } = useModal();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      return "dark"; // Default
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Resume link pointing to local PDF
  const resumeLink = "/Vardhan_Mittal_Resume.pdf";

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150; // offset for navbar height
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (id === "contact") {
      setOpen(true);
      return;
    }
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const offset = 90; // offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "backdrop-blur-md bg-white/85 dark:bg-dark-2/85 border-b border-zinc-200 dark:border-zinc-800/80 py-4 shadow-lg" 
        : "bg-transparent py-6"
    }`}>
      <div className="w-[90%] lg:w-[65%] mx-auto flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "home")}
          className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white select-none hover:opacity-90 transition-opacity"
        >
          VM <span className="text-cyan-500 dark:text-cyan-400 font-medium text-lg border-l border-zinc-300 dark:border-zinc-700 pl-2 ml-1">The Problem Solver</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-base transition-colors relative py-1 hover:text-cyan-500 dark:hover:text-cyan-400 ${
                  activeSection === link.id 
                    ? "text-cyan-500 dark:text-cyan-400 font-semibold" 
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="h-5 w-[1px] bg-zinc-300 dark:bg-zinc-800" />

          {/* Social / Resume Button */}
          <div className="flex items-center gap-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 hover:text-white dark:hover:text-white border border-cyan-500/50 dark:border-cyan-400/50 hover:bg-cyan-500 dark:hover:bg-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-none"
              aria-label="Toggle theme"
            >
              {themeMode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-dark-3/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800/95 py-6 px-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-lg transition-colors py-1 ${
                activeSection === link.id 
                  ? "text-cyan-500 dark:text-cyan-400 font-semibold" 
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex items-center justify-between gap-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-semibold text-cyan-500 dark:text-cyan-400 hover:text-white dark:hover:text-white border border-cyan-500/50 dark:border-cyan-400/50 px-4 py-2.5 rounded-lg transition-all flex-grow"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center justify-center shrink-0 cursor-none"
              aria-label="Toggle theme"
            >
              {themeMode === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
