import { useEffect, useState, useRef } from "react";
import "../../index.css"; // Ensure your CSS is imported

const CustomCursor = () => {
  const [cursorClass, setCursorClass] = useState("default-cursor");
  const [cursorStyle, setCursorStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const cursorRef = useRef(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const targetPositionRef = useRef({ x: -100, y: -100 });
  const isHoveringFooterRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust this width as needed
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      return; // Do not apply custom cursor on mobile devices
    }

    const handleMouseMove = (e) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const element = e.target;
      if (element.classList.contains("footer-link")) {
        isHoveringFooterRef.current = true;
        const rect = element.getBoundingClientRect();
        setCursorStyle({
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          borderRadius: "0",
        });
        setCursorClass("footer-link-cursor");
      } else {
        isHoveringFooterRef.current = false;
        setCursorStyle({});

        if (element.tagName === "P") {
          setCursorClass("text-cursor");
        } else if (element.tagName === "H1") {
          setCursorClass("text-cursor2");
        } else if (
          element.tagName === "BUTTON" ||
          element.closest("button") ||
          element.tagName === "A" ||
          element.closest("a") ||
          element.tagName === "INPUT" ||
          element.tagName === "TEXTAREA"
        ) {
          setCursorClass("button-cursor");
        } else {
          setCursorClass("default-cursor");
        }
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.classList.contains("footer-link")) {
        isHoveringFooterRef.current = false;
        setCursorStyle({});
        setCursorClass("default-cursor");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    let animationFrameId;
    const updateCursor = () => {
      if (cursorRef.current) {
        if (!isHoveringFooterRef.current) {
          // Lerp position for smooth trailing effect
          const dx = targetPositionRef.current.x - positionRef.current.x;
          const dy = targetPositionRef.current.y - positionRef.current.y;

          positionRef.current.x += dx * 0.2;
          positionRef.current.y += dy * 0.2;

          cursorRef.current.style.left = `${positionRef.current.x}px`;
          cursorRef.current.style.top = `${positionRef.current.y}px`;
        }
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) {
    return null; // Do not render the custom cursor on mobile devices
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorClass}`}
      style={cursorStyle}
    />
  );
};

export default CustomCursor;
