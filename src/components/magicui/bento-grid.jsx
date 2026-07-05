import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam";
import { Link } from "react-router-dom";
import { theme } from "@/constants";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  githubUrl,
  cta,
}) => {
  return (
    <a
      href={href}
      key={name}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        "--theme": theme,
      }}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transition-all duration-300 ease-in-out border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950",
        "hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20 cursor-none",
        className
      )}
    >
      {/* Glowing border animated beam */}
      <BorderBeam borderWidth={2.5} size={250} duration={8} />
      
      {/* Background Image with Hover Scale */}
      <div className="absolute inset-0 z-0 p-1">
        <img 
          className="object-cover h-full w-full rounded-lg opacity-40 group-hover:opacity-20 group-hover:scale-105 group-hover:blur-sm transition-all duration-500" 
          src={background} 
          alt={name}
        />
        {/* Theme-sensitive overlay for contrast */}
        <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black dark:via-black/40 bg-gradient-to-t from-white via-white/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 rounded-lg" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 select-none">
        <h3 className="text-3xl max-sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-2">
          {name}
        </h3>
        <p className="text-zinc-650 dark:text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl mb-4">
          {description}
        </p>
        
        {/* Action Buttons / Badges */}
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold opacity-95 group-hover:opacity-100 transition-all duration-300">
          {/* Main Action / Live Demo */}
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-200 shadow-sm">
            <span>{cta || "View Project"}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>

          {/* GitHub Repo link if available */}
          {githubUrl && (
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(githubUrl, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800/90 text-zinc-300 border border-zinc-700/60 hover:bg-zinc-700 hover:text-white transition-all duration-200 shadow-sm cursor-pointer z-30"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </span>
          )}
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-cyan-500/[0.02]" />
    </a>
  );
};

export default BentoCard;
export { BentoCard, BentoGrid };
