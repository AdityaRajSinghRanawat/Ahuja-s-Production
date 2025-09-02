import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const split = new SplitType(containerRef.current, { types: "lines" });
    splitRef.current = split;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      })
      .from(split.lines, {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "back.out",
      });

    return () => {
      if (splitRef.current) splitRef.current.revert();
    };
  }, [text]);

  return (
    <div ref={containerRef} className={className}>
      {text}
    </div>
  );
};

export default AnimatedTextLines;
