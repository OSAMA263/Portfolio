import tw from "tailwind-styled-components";
import ContentWrapper from "../../shared/ContentWrapper";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import FormWrapper from "./sections/FormWrapper";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

export default function Contact() {
  return (
    <PageWrapper id="contact">
      <ContentWrapper>
        <SectionHeader>
          <p className="text-sm">Get In Touch</p> Contact With Me
        </SectionHeader>
        <FormWrapper></FormWrapper>
      </ContentWrapper>
      <Socials>
        <a
          href="https://www.linkedin.com/in/osama00"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/OSAMA263" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=osamaelseify2@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoMdMail />
        </a>
      </Socials>
      <a
        className="mt-6 h-fit"
        href={"Osama_FrontEnd-Developer_CV.pdf"}
        download="Osama_FrontEnd-Developer_CV.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <Button {...HeartBeat}>
          Get Resume <AiOutlineDownload />
        </Button>
      </a>
    </PageWrapper>
  );
}

const Socials = tw.div`
flex
justify-center
gap-4
mt-4
text-2xl
[&_svg]:text-[#3b3a3a]
[&_svg:hover]:text-[#08cc7e]
`;

const HeartBeat = {
  initial: { scale: 1, boxShadow: "0px 0px 10px 0.1px transparent" },
  whileHover: {
    scale: [1, 1.8, 1.8, 1],
    boxShadow: [
      "0px 0px 10px 0.1px transparent",
      "0px 0px 80px 2px #0aff9d",
      "0px 0px 80px 2px #0aff9d",
      "0px 0px 15px 0.1px #0aff9d",
    ],
  },
  transition: { duration: 0.2, repeat: Infinity, repeatDelay: 0.6 },
};

const Button = tw(motion.button)`
border-[2px]
border-[#858994]
font-semibold
hover:bg-[#0aff9d]
hover:text-black
hover:border-transparent
flex
sm:p-2
sm:text-lg
p-1
rounded-md
justify-center
items-center 
gap-x-1
`;
