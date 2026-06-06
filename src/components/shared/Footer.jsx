import { socials } from "@/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="flex justify-between items-center text-2xl gap-7 w-[80%] mx-auto border-t border-zinc-800 py-12 mt-24 max-sm:flex-col max-sm:justify-center max-sm:items-center whitespace-nowrap relative z-10 cursor-none">
      <div className="flex flex-wrap gap-4 max-sm:justify-center">
        <Link className="footer-link hover:text-cyan-400 transition-colors" to="" onClick={handleScrollToTop}>
          Top •
        </Link>
        <Link className="footer-link hover:text-cyan-400 transition-colors" to={socials.github} target="_blank">
          GitHub •
        </Link>
        <Link className="footer-link hover:text-cyan-400 transition-colors" to={socials.linkedin} target="_blank">
          LinkedIn •
        </Link>
        <Link className="footer-link hover:text-cyan-400 transition-colors" to={socials.leetcode} target="_blank">
          LeetCode •
        </Link>
        <Link className="footer-link hover:text-cyan-400 transition-colors" to={socials.codeforces} target="_blank">
          Codeforces
        </Link>
      </div>
      <div className="text-sm text-zinc-500 font-medium max-sm:mt-2">
        <p>© 2026 Vardhan Mittal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
