/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { socials } from "../../Contact/Contact";
import { GlassButton } from "../../Contact/sections/FormInputs";

export default function WhoAmI() {
  return (
    <>
      <Section>
        <div className="font-bold [&_p]:text-base">
          <Line className="text-4xl xl:text-7xl md:text-4xl">Hi</Line>
          <p>I'm Osama Khaled,</p>
          <p>
            A{" "}
            <span className="underline underline-offset-4 text-[#08cc7e]">
              Front-End
            </span>{" "}
            Developer
          </p>

          {/* cv button */}
          <a
            className="mt-6 h-fit block"
            href="https://drive.google.com/file/d/1Qvko4U-vruKwaNCBecWpFe97ye8iE6qZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <GlassButton id="glass-btn">Resume</GlassButton>
          </a>
        </div>
      </Section>

      {/* contact buttons */}
      <Socials>
        {socials.map(({ title, link, Icon }, i) => (
          <motion.a
            {...linksAnimation}
            custom={i}
            key={title}
            href={link}
            target="_blank"
            title={title}
            rel="noreferrer"
          >
            <Icon />
          </motion.a>
        ))}
      </Socials>
    </>
  );
}
const linksAnimation = {
  initial: { x: "150%" },
  animate: (i) => ({
    x: "0%",
    transition: {
      delay: 0.2 * i + 0.9,
      duration: 0.4,
    },
  }),
};

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
font-bold
`;

const Socials = tw.div`
flex
flex-col
justify-center
gap-4
md:mr-4
mr-2
md:text-[32px]
text-lg
[&_svg]:text-[#b8b8b8]
[&_svg:hover]:text-[#08cc7e]
[&_svg:hover]:scale-110
absolute 
right-0
`;
