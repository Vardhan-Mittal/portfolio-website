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
  cta,
}) => {
  return (
    <Link
      to={href}
      key={name}
      target="_blank"
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
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 pointer-events-none select-none">
        <h3 className="text-3xl max-sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-2">
          {name}
        </h3>
        <p className="text-zinc-650 dark:text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl">
          {description}
        </p>
        
        {/* Hover action indicator */}
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-cyan-500 dark:text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>{cta || "Learn more"}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-cyan-500/[0.02]" />
    </Link>
  );
};

export default BentoCard;
export { BentoCard, BentoGrid };
