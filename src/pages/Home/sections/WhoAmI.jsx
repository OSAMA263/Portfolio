/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { AiOutlineDownload } from "react-icons/ai";

export default function WhoAmI() {
  return (
    <Section>
      {/* glow */}
      <div className="absolute h-[100%] w-[100%] rounded-full bg-[radial-gradient(circle,#0aff9d_0%,#0aff9df5_20%,#0aff9d85_40%,#0aff9d45_70%,transparent_100%)] blur-[80px] -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>

      {/* pulsing wrapping layer */}
      <div className="absolute h-[100%] w-[100%] rounded-full bg-[radial-gradient(circle,#0aff9dcc_0%,#0aff9d99_20%,#0aff9d33_20%,transparent_85%)] blur-[60px] -z-10 glow-slow"></div>

      {/* inner glow */}
      <div className="absolute h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,#0aff9dff_0%,#0aff9dbb_30%,transparent_70%)] blur-[40px] -z-10"></div>

      {/*  inner pulsing ..iguess */}
      <div className="absolute h-[40%] w-[40%] rounded-full bg-[radial-gradient(circle,#ffffff_0%,#0aff9d99_70%,transparent_90%)] blur-[25px] -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>

      <Line className="text-4xl font-bold xl:text-8xl md:text-6xl">Hi</Line>
      {/* <p className="underline underline-offset-4">I'm Osama</p> */}
    </Section>
  );
}

const Section = tw(motion.div)`
font-[Courier]
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
