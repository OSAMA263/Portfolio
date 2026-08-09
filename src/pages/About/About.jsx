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
            opaDelay={0.007}
            opaSpeed={0.09}
            letter_i={letter_i++}
            opaWaitTime={1}
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
                      opaDelay={0.007}
                      opaSpeed={0.09}
                      opaWaitTime={1}
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

const text = [
  "Hey, -I -graduated -with -a -bachelor's -degree -in -MIS, -i -enjoy -building -clean -responsive -with -good -aniamtions -websites, -dahsboards -with -online -updateable -data -useing -APIS.",
  "I -spent -the -past -2 -years -sharpening -my -skills -through -personal -projects, -and -gained -hands-on -experience -during -a -frontend -internship -at -Web -Masters",
  "I -focus -on -creating -smooth -user -experiences -using -React, -Tailwind, -framer Motion -and -modern -UI -libraries.",
  "I'm -constantly -learning -and -refining -my -skills -to -turn -ideas -into -functional -designs.",
];
