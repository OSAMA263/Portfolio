import tw from "tailwind-styled-components";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import MovableLogo from "../../../components/MovableLogo";
import { logos } from "../data";
import { useMediaQuery } from "@chakra-ui/react";

const spring = {
  stiffness: 80,
  damping: 20,
  mass: 0.8,
  restDelta: 0.001,
};
export default function BgAnimationLogos() {
  const ref = useRef(null);
  const wrapperStyle = { x: useSpring(0, spring), y: useSpring(0, spring) };
  const [smallDevice] = useMediaQuery("(max-width: 450px)");

  // ------------------
  const mouse_move = (e) => {
    const { width, top, height, left } = ref.current.getBoundingClientRect();

    const moveX = (e.clientX - window.innerWidth + (left + width) / 2) / 45; // Increased movement range
    const moveY = (e.clientY - window.innerHeight + (top + height) / 2) / 45;

    // Add subtle randomness for more organic movement
    const randomX = (Math.random() - 0.5) * 0.5;
    const randomY = (Math.random() - 0.5) * 0.5;

    wrapperStyle.x.set(moveX + randomX);
    wrapperStyle.y.set(moveY + randomY);
  };
  // ------------------

  const mouse_leave = () => {
    wrapperStyle.x.set(0);
    wrapperStyle.y.set(0);
  };

  return (
    <Section ref={ref} onMouseMove={mouse_move} onMouseLeave={mouse_leave}>
      {(smallDevice ? logos.slice(0, 13) : logos).map((svg, i) => (
        <MovableLogo
          key={i}
          i={i}
          wrapperStyle={wrapperStyle}
          spring={spring}
          svgLogo={svg.logo}
          svgPosition={svg.position}
        />
      ))}
    </Section>
  );
}

const Section = tw(motion.div)`
relative
h-[98dvh]
w-[100dvw]
`;
