import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProjectCard from "@/components/ProjectCard";
import { Github, LinkedIn, Email } from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";

const Hero = styled.div`
  display: flex;
  position: relative;
  height: 85vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainHeading = styled.h1`
  font-size: clamp(3em, 4vw, 4em);
  font-family: "Josefin Sans";
  color: #fff;
  margin-bottom: 1em;
`;

const SubHeading = styled.h2`
  font-size: clamp(2em, 3vw, 3em);
  font-family: "Josefin Sans";
  margin-bottom: 1em;
  color: #fff;
  font-weight: 400;
`;

const ColoredText = styled.span`
  color: ${({ color }) => color};
`;

const fadeMoveDown = keyframes`
    0%{
        opacity: 0;
        transform: translateY(0px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateY(20px);
    }
`;

const ArrowDown = styled(MdKeyboardArrowDown)`
  color: var(--color-icons, #f8f8f8);
  font-size: 3rem;
  position: absolute;
  animation: ${fadeMoveDown} 2s infinite;
  bottom: 0;
`;

const PageSection = styled.div`
  padding: 2em;

  @media screen and (min-width: 768px) {
    padding: 5em;
  }

  @media screen and (min-width: 1440px) {
    padding: 10em;
  }
`;

const InnerSection = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 2rem 0;
`;

const Container = styled.div`
  margin: 0;
  width: 100%;
  flex-direction: column;
  /* max-width: 90%; */
  display: flex;
  gap: 1rem;
  @media screen and (min-width: 876px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  font-size: 1.25rem;
  padding: 0.5em;
  line-height: 2;
`;

const TextSection = styled.p``;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

const SocialLink = styled.a`
  display: flex;
  margin: 1em 0;
  align-items: center;
  gap: 1.5em;
  width: fit-content;
`;

const SocialLinkText = styled.p`
  font-size: 1.3rem;
  line-height: 2;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Lewis Davidson | Web Developer &amp; Designer</title>
        <meta
          name="description"
          content="Lewis Davidson is a Fullstack Web Developer and Designer, based in the UK and loves to craft progressive and enhanced web applications"
        />
      </Head>
      <Hero>
        <MainHeading>Lewis Davidson</MainHeading>
        <SubHeading>
          {" "}
          Web{" "}
          <ColoredText color="var(--color-primary, #3992FF)">
            {" "}
            Developer{" "}
          </ColoredText>{" "}
          &amp;{" "}
          <ColoredText color="var(--color-secondary,#D83BD2)">
            {" "}
            Designer{" "}
          </ColoredText>{" "}
        </SubHeading>

        <Link href="#about">
          <a>
            <ArrowDown />
          </a>
        </Link>
      </Hero>
      <PageSection id="about">
        <SubHeading>About Me</SubHeading>
        <InnerSection>
          <Container>
            <FlexContainer>
              <Image
                src="/images/my-picture.jpg"
                height="50"
                width="100"
                layout="responsive"
                objectFit="cover"
                alt=""
              ></Image>
            </FlexContainer>
            <FlexContainer>
              <TextContainer>
                <TextSection>
                  Hi,
                  <ColoredText color="var(--color-tertiary, #F44250)">
                    {" "}
                    I&apos;m Lewis Davidson{" "}
                  </ColoredText>
                  - a web developer and designer who&apos;s currently based in
                  the UK. I began my journey in development and design for
                  around 4 years after completing college and I&apos;ve took a
                  massive undertaking in improving my skills in all areas with
                  new features that appear on the web in recent years. <br />I
                  specialise in Javascript based frameworks such as React and
                  Vue, alongside my proficient knowledge of years studying the
                  core principles of HTML and CSS to make the web look its best
                  and fastest.
                </TextSection>
              </TextContainer>
            </FlexContainer>
          </Container>
        </InnerSection>
      </PageSection>
      <PageSection>
        <SubHeading>What I&apos;ve worked on</SubHeading>
        <ProjectGrid>
          <ProjectCard
            pageurl="#"
            src="/images/sme.png"
            alt=""
            projectname="SwapMyEnergy"
            industry="Energy Intermediary"
            color="var(--color-primary, #3992FF)"
            projecturl="https://swapmyenergy.co.uk/"
          />
          <ProjectCard
            pageurl="#"
            src="/images/gigawaffle.png"
            alt=""
            projectname="Gigawaffle"
            industry="Marketing &amp; Web Design"
            color="var(--color-secondary, #D83BD2)"
            projecturl="https://gigawaffle.co.uk/"
          />
          <ProjectCard
            pageurl="#"
            src="/images/playgroundbullys.jpg"
            alt=""
            projectname="PlaygroundBullys"
            industry="Dog Breeder and Transportation"
            color="var(--color-tertiary, #F44250)"
            projecturl="https://swapmyenergy.co.uk/"
          />
          <ProjectCard
            pageurl="#"
            src="/images/grand-venue.png"
            alt=""
            projectname="Grand Venue"
            industry="Wedding Venue"
            color="var(--color-primary, #3992FF)"
            projecturl="https://grandvenue.co/home/"
          />
          <ProjectCard
            pageurl="#"
            src="/images/grand-occasions.png"
            alt=""
            projectname="Grand Occasions"
            industry="Dog Breeder and Transportation"
            color="var(--color-secondary, #D83BD2)"
            projecturl="https://grandoccasions.co/home"
          />
          <ProjectCard
            pageurl="#"
            src="/images/unite-cities.jpg"
            alt=""
            projectname="Unite Cities"
            industry="Logistics and Storage Service"
            color="var(--color-tertiary, #F44250)"
            projecturl="https://unitecities.com/"
          />
        </ProjectGrid>
      </PageSection>
      <PageSection>
        <SubHeading>Contact Me</SubHeading>
        <InnerSection>
          <Container>
            <FlexContainer>
              <TextContainer>
                <TextSection>
                  If you think I&apos;m a good fit for a project you have, or
                  just want to have a chat, fill in the form or message me on my
                  LinkedIn
                </TextSection>
                <SocialLinks>
                  <SocialLink href="mailto:lewisdavidson8@gmail.com">
                    <Email />
                    <SocialLinkText>Email Me</SocialLinkText>
                  </SocialLink>
                  <SocialLink href="https://github.com/ldavidson8">
                    <Github />
                    <SocialLinkText>Find me on Github</SocialLinkText>
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/lewis-davidson-9634a61ba/">
                    <LinkedIn />
                    <SocialLinkText>Find me on LinkedIn</SocialLinkText>
                  </SocialLink>
                </SocialLinks>
              </TextContainer>
            </FlexContainer>
            <FlexContainer>
              <ContactForm />
            </FlexContainer>
          </Container>
        </InnerSection>
      </PageSection>
    </>
  );
};

export default Home;
