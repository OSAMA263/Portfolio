import { motion } from "framer-motion";
import React from "react";
import tw from "tailwind-styled-components";

export default function ContentWrapper({ children, scrollProgress, id }) {
  return (
    <motion.div className={` relative sm:space-x-5 space-x-1 w-full`}>
      <LineOnLeft {...LineVarinats}></LineOnLeft>
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child,
          id === "projects" && {
            scrollProg: scrollProgress ? scrollProgress : null,
          }
        )
      )}
    </motion.div>
  );
}
const LineVarinats = {
  initial: {
    height: 0,
  },
  whileInView: {
    height: "100%",
  },
  transition: {
    delay: 0.4,
    duration: 0.3,
  },
  viewport: { once: true },
};

const LineOnLeft = tw(motion.div)`
absolute 
w-[1px]
z-[69]
bg-[#cbccd2] 
`;
