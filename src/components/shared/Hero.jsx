import ReactRotatingText from "react-rotating-text";
import { aboutMe, name } from "@/constants";
import { ModalTrigger } from "../ui/animated-modal";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div id="home" className="md:w-[90%] lg:w-[65%] mx-auto relative z-10 cursor-none">
      <div className="flex flex-col-reverse md:flex-row p-5 items-center justify-between w-full min-h-[90vh] pt-32 pb-16 gap-10 md:gap-16">
        
        {/* Left Side: Introduction and About Info */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          {/* Subtle Accent Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-sm font-semibold mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Available for Internships & Projects
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-500 dark:text-zinc-400 mb-2">
            Hi, I'm
          </h2>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4 uppercase">
            {name}
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-cyan-500 dark:text-cyan-400 font-bold tracking-wide mb-6 h-12">
            <ReactRotatingText items={[
              "Software Development Engineer",
              "Machine Learning Enthusiast",
              "Competitive Programmer",
              "Full-Stack Web Developer"
            ]} />
          </div>
          
          <p className="text-lg md:text-xl text-zinc-650 dark:text-zinc-300 leading-relaxed mb-8">
            {aboutMe}
          </p>

          <ModalTrigger className="group/modal-btn cursor-none p-0">
            <div className="z-10 flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full text-base text-white transition-all ease-in border border-zinc-200 dark:border-zinc-800 hover:cursor-pointer bg-zinc-950 dark:bg-neutral-950 hover:bg-zinc-800 dark:hover:bg-neutral-800 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-3 transition ease-out hover:text-cyan-400 hover:duration-300 text-lg md:text-xl font-medium">
                  <span>👋 Say hi!</span>
                  <ArrowRightIcon className="ml-2 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </AnimatedShinyText>
              </div>
            </div>
          </ModalTrigger>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center w-full">
          <div className="relative group">
            {/* Glowing cyan/blue background aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-xl opacity-35 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Outer border glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
            
            <img
              src="/images/vardhan.jpg"
              alt="Vardhan Mittal"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-zinc-100 dark:border-zinc-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;

