import { educations, experiences, theme } from "@/constants";
import BoxReveal from "../magicui/box-reveal";

// Custom SVG Logos for Education & Experience
const TimelineLogo = ({ name }) => {
  switch (name) {
    case "zscaler":
      return (
        <img 
          src="/images/logo-zscaler.png" 
          alt="Zscaler" 
          className="w-6 h-6 object-contain" 
        />
      );
    case "labmentix":
      return (
        <img 
          src="/images/logo-labmentix.png" 
          alt="Labmentix" 
          className="w-6 h-6 object-contain" 
        />
      );
    case "nitd":
      return (
        <img 
          src="/images/logo-nitd.png" 
          alt="NIT Delhi" 
          className="w-6 h-6 object-contain" 
        />
      );
    case "pallavi":
      return (
        <img 
          src="/images/logo-pallavi.png" 
          alt="Pallavi Model School" 
          className="w-6 h-6 object-contain" 
        />
      );
    default:
      return (
        <svg className="w-6 h-6 text-zinc-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <circle cx="50" cy="50" r="30" />
        </svg>
      );
  }
};

const Timeline = () => {
  return (
    <div id="about" className="mt-36 max-sm:mt-12 h-full flex flex-col max-md:px-5 md:w-[90%] lg:w-[65%] mx-auto relative z-10 cursor-none">
      
      {/* Experience Section */}
      <section id="experience" className="m-5">
        <BoxReveal boxColor={theme} delay={0.2}>
          <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl font-bold mb-10 tracking-tight text-zinc-900 dark:text-white">
            Experience
          </h1>
        </BoxReveal>

        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-5 pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[50px] top-1 bg-background dark:bg-dark-2 p-1 rounded-full border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors duration-300 z-20">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <TimelineLogo name={exp.logo} />
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 md:p-8 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <BoxReveal boxColor={theme}>
                      <h3 className="text-3xl max-sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                        {exp.company}
                      </h3>
                    </BoxReveal>
                    <BoxReveal boxColor={theme}>
                      <p className="text-xl max-sm:text-lg text-zinc-500 dark:text-zinc-400 italic font-medium">
                        {exp.role}
                      </p>
                    </BoxReveal>
                  </div>
                  <div className="text-right md:text-right text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-150 dark:bg-zinc-800/60 text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-1">
                      {exp.year}
                    </span>
                    <p className="text-sm text-zinc-500">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  <p className="text-lg text-cyan-900/90 dark:text-cyan-100/90 font-semibold mb-2">
                    {exp.title}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-700 dark:text-zinc-300 text-base">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="m-5 mt-24">
        <BoxReveal boxColor={theme} delay={0.2}>
          <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl font-bold mb-10 tracking-tight text-zinc-900 dark:text-white">
            Education
          </h1>
        </BoxReveal>

        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-5 pl-8 space-y-12">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[50px] top-1 bg-background dark:bg-dark-2 p-1 rounded-full border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300 z-20">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <TimelineLogo name={edu.logo} />
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 md:p-8 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <BoxReveal boxColor={theme}>
                      <h3 className="text-3xl max-sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                        {edu.name}
                      </h3>
                    </BoxReveal>
                    <BoxReveal boxColor={theme}>
                      <p className="text-xl max-sm:text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                        {edu.branch}
                      </p>
                    </BoxReveal>
                    {edu.name.includes("Delhi") && (
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-1 italic font-semibold">
                        * Minor Degree - Machine Learning (May 2025 - May 2027)
                      </p>
                    )}
                  </div>
                  <div className="text-right md:text-right text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-150 dark:bg-zinc-800/60 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
                      {edu.year}
                    </span>
                    <p className="text-sm text-zinc-500 mb-1">{edu.location}</p>
                    <p className="text-base font-bold text-zinc-900 dark:text-white">{edu.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Timeline;
