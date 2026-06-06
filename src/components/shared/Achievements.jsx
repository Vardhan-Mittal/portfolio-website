import { achievements, theme } from "@/constants";
import BoxReveal from "../magicui/box-reveal";

const AchievementCard = ({ title, description, href, type }) => {
  // Define platform-specific styling and icons
  let accentColor = "border-zinc-800 hover:border-zinc-500/50";
  let icon = null;

  switch (type) {
    case "codeforces":
      accentColor = "hover:border-red-500/50 hover:shadow-red-950/20";
      icon = (
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          {/* Codeforces styled bar graph logo */}
          <rect x="2" y="10" width="4" height="12" rx="1" />
          <rect x="8" y="4" width="4" height="18" rx="1" />
          <rect x="14" y="14" width="4" height="8" rx="1" />
          <rect x="20" y="2" width="4" height="20" rx="1" className="opacity-40" />
        </svg>
      );
      break;
    case "leetcode":
      accentColor = "hover:border-amber-500/50 hover:shadow-amber-950/20";
      icon = (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          {/* LeetCode styled logo */}
          <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-8-7.72c-.466-.45-.466-1.17 0-1.62l8-7.72c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62L11.39 12.02l4.713 4.29c.466.45.466 1.17 0 1.62z" />
          <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
      break;
    case "google":
      accentColor = "hover:border-blue-500/50 hover:shadow-blue-950/20";
      icon = (
        <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          {/* Google G Logo */}
          <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.185 15.43 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.74-.08-1.3-.177-1.859H12.24z" />
        </svg>
      );
      break;
    case "flipkart":
      accentColor = "hover:border-yellow-400/50 hover:shadow-yellow-950/20";
      icon = (
        <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          {/* Shopping bag / commerce grid logo */}
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
        </svg>
      );
      break;
    default:
      break;
  }

  const CardWrapper = ({ children }) => {
    if (href && href !== "#") {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
          {children}
        </a>
      );
    }
    return <div className="w-full">{children}</div>;
  };

  return (
    <CardWrapper>
      <div className={`w-full bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 flex items-start gap-4 transition-all duration-300 shadow-xl hover:scale-[1.02] ${accentColor}`}>
        <div className="p-3 bg-zinc-100 dark:bg-zinc-800/60 rounded-xl flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
          {href && href !== "#" && (
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-cyan-400">
              <span>View Verification</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

const Achievements = () => {
  return (
    <div className="mt-36 max-sm:mt-12 h-full flex flex-col max-md:px-5 md:w-[90%] lg:w-[65%] mx-auto relative z-10 cursor-none">
      <BoxReveal boxColor={theme} delay={0.2}>
        <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl font-bold mb-10 tracking-tight text-zinc-900 dark:text-white">
          Achievements
        </h1>
      </BoxReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
        {achievements.map((ach, idx) => (
          <AchievementCard
            key={idx}
            title={ach.title}
            description={ach.description}
            href={ach.href}
            type={ach.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
