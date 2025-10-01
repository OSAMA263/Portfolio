/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { AiOutlineDownload } from "react-icons/ai";

export default function WhoAmI() {
  return (
    <Section>
      {/* Neon glowing background */}
      <div className="absolute h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,#0aff9d_0%,#0aff9dc1_30%,#0aff9d2e_60%,transparent_90%)] blur-3xl -z-10"></div>

      {/* Your text */}
      <Line className="text-4xl font-bold xl:text-8xl md:text-6xl">Hi</Line>
      <p className="underline underline-offset-4">I'm Osama</p>
    </Section>
  );
}

const Frontend = tw.span`
relative
text-[#e2e2e2] 
[&>div]:hover:h-full
hover:text-[#000000]
hover:font-semibold
transition-all
p-1
`;

const Section = tw(motion.div)`
max-[350px]:text-base
md:text-lg
!text-sm
text-balance
sm:gap-y-4
gap-y-3
flex
justify-center
items-center
flex-col
absolute
z-[52]
top-1/2
left-1/2
-translate-y-1/2
-translate-x-1/2
p-2
text-center
sm:w-fit
w-[90%]
who-wrapper
`;

const Line = tw.h1`
transition-all
font-extrabold
`;
