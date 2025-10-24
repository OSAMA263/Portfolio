/* eslint-isable react/no-unescaped-entities */
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import ContentWrapper from "../../shared/ContentWrapper";
import TextAnimation from "../../components/TextAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function About() {
  return (
    <PageWrapper id="about">
      <ContentWrapper>
        <Wrapper>
          <Text>
            <SectionHeader>About Me</SectionHeader>
            <TextPoints />
          </Text>
          {/* ------------ */}
          <ImgWrapper>
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0s" } }}
              src="about-img.avif"
              className="object-cover w-full xl:h-full h-[30vh] shadow-xl
              shadow-black"
              alt="about-img"
            />
          </ImgWrapper>
        </Wrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}

const TextPoints = () => {
  let letter_i = 0;

  return (
    <ul className="flex flex-col sm:gap-y-4 gap-y-3 my-auto">
      {text.map((line, line_i) => (
        <li
          className="w-fit flex 2xl:leading-relaxed xl:leading-normal lg:leading-tight"
          key={line_i}
        >
          <TextAnimation
            opaDelay={0.01}
            opaSpeed={0.06}
            letter_i={letter_i++}
            opaWaitTime={1.6}
          >
            -{"\u00A0"}
          </TextAnimation>
          {/* words */}
          <div>
            {line
              .replaceAll(" ", `${"\u00A0"}`)
              .split("-")
              .map((word, word_i) => (
                <p className="inline-block" key={word_i}>
                  {word.split("").map((letter, i) => (
                    // letter
                    <TextAnimation
                      opaDelay={0.01}
                      opaSpeed={0.06}
                      opaWaitTime={1.6}
                      letter_i={letter_i++}
                      key={i}
                    >
                      {letter}
                    </TextAnimation>
                  ))}
                </p>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
const Wrapper = tw(motion.div)`
about
grid
xl:gap-x-10
gap-x-2
xl:grid-cols-2
xl:gap-y-0
items-center
gap-y-6
text-lg
max-[375px]:!grid-rows-1
max-[350px]:text-sm
`;

const Text = tw(motion.div)`
flex
flex-col
lg:tracking-wide
max-[380px]:space-y-2
justify-between
h-full
`;

const ImgWrapper = tw(motion.div)`
w-full
block
max-h-fit
max-[640px]:hidden
`;

// const text = [
//   "Hi -I’m -Osama, -a -front–end -developer -with -a -passion -for -creating -clean, -responsive, -user–friendly -sites.",

//   "I -also -did -a -6–month -internship -where -I -worked -with -a -team, -so -I'm -comfortable -in -both -solo -and -team -environments.",

//   "I -work -best -on -solo -projects -because -I -can -stay -organized -and -know -where -everything -is. -There -are -no -conflicts -or -unexpected -changes, -and -I -understand -all -the -code. -This -helps -me -finish -faster -and -keep -everything -easy -to -manage.",

//   "I'm -always -learning -and -improving -my -UI/UX -skills. -Whether -it's -a -personal -project -or -teamwork, -I -enjoy -turning -ideas -into -functional, -beautiful -websites.",
// ];

const text = [
  "Hey -I'm -Osama, -a -frontEnd -developer -who -loves -building -clean, -responsive, -and -interactive -websites.",
  "I -completed -a -6- month -internship -where -I -collaborated -with -a -team -to -build -responsive, -modern -web -interfaces, -worked -closley -with -backend -developer -to -get -the -best -endpoints",
  "I -focus -on -creating -smooth -user -experiences -using -React, -Tailwind, -and -modern -UI -libraries.",
  "I'm -constantly -learning -and -refining -my -skills -to -turn -ideas -into -functional -designs.",
];
