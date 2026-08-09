import tw from "tailwind-styled-components";
import ContentWrapper from "../../shared/ContentWrapper";
import PageWrapper from "../../shared/PageWrapper";
import SectionHeader from "../../shared/SectionHeader";
import FormWrapper from "./sections/FormWrapper";
import { IoMdMail } from "react-icons/io";
import {
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
        {socials.map(({ title, link, Icon }) => (
          <a key={title} href={link} target="_blank" title={title} rel="noreferrer">
            <Icon/>
          </a>
        ))}
      </Socials>

      <a
        className="mt-6 h-fit block"
        href="https://drive.google.com/file/d/1Qvko4U-vruKwaNCBecWpFe97ye8iE6qZ/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Button {...HeartBeat}>Resume</Button>
      </a>
    </PageWrapper>
  );
}

const Socials = tw.div`
flex
justify-center
gap-4
mt-4
text-3xl
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
border-[1px]
border-[#08cc7e]
hover:bg-[#0aff9d]
hover:text-black
hover:border-transparent
flex
px-7
py-1
sm:text-lg
rounded-md
justify-center
items-center 
gap-x-1
text-[#08cc7e]
`;

const socials = [
  {
    title: "whatsapp",
    link: "https://wa.me/201121451306",
    Icon: FaWhatsappSquare,
  },
  {
    title: "mail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=osama.khaled0707@gmail.com",
    Icon: IoMdMail,
  },
  {
    title: "github",
    link: "https://github.com/OSAMA263",
    Icon: FaGithubSquare,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/osama00",
    Icon: FaLinkedin,
  },
];
