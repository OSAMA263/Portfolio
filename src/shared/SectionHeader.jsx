import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
export default function SectionHeader({ children }) {
  return <H1 {...H1Variants}>{children}</H1>;
}

const H1Variants = {
  initial: {
    x: "-100%",
  },
  whileInView: {
    x: 0,
    transition: { x: { duration: 0.6, delay: 0.5 } },
  },
  viewport: { once: true },
};

const H1 = tw(motion.h1)`
text-3xl
max-[480px]:text-lg
mb-5
`;
