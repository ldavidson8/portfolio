import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

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
  padding: 3rem;

  @media screen and (min-width: 768px) {
    padding: 5rem;
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
      </PageSection>
    </>
  );
};

export default Home;
