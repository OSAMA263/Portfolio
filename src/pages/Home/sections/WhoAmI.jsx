/* eslint-disable react/no-unescaped-entities */
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export default function WhoAmI() {
  const [smScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <Section>
      {/* glow */}
      {!smScreen && (
        <>
          <div className="absolute h-[40%] w-[40%] rounded-full bg-[radial-gradient(circle,#0aff9d_0%,#0aff9df5_20%,#0aff9d85_40%,#0aff9d45_60%,transparent_100%)] blur-[80px] -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
          {/* pulsing wrapping layer */}
          <div className="absolute h-[150%] w-[150%] rounded-full bg-[radial-gradient(circle,#0aff9dcc_0%,#0aff9d99_20%,#0aff9d33_20%,transparent_15%)] blur-[60px] -z-10 glow-slow"></div>
          {/* inner glow */}
          <div className="absolute h-[40%] w-[40%] rounded-full bg-[radial-gradient(circle,#0aff9dff_0%,#0aff9dbb_30%,transparent_50%)] blur-[40px] -z-10"></div>
          {/*  inner pulsing ..iguess */}
          <div className="absolute h-[20%] w-[20%] rounded-full bg-[radial-gradient(circle,#ffffff_0%,#0aff9d99_0%,transparent_90%)] blur-[25px] -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </>
      )}

      <div className="space-y-2">
        <Line className="text-4xl font-bold xl:text-6xl md:text-4xl">Hi</Line>
        <p className="underline underline-offset-4 font-bold">I'm Osama,</p>
        <p className="underline underline-offset-4 font-bold">
          a front-end developer
        </p>
      </div>
    </Section>
  );
}

const Section = tw(motion.div)`
font-[system-ui]
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
font-bold
`;
