import {
  PageSection,
  SubHeading,
  InnerSection,
  Container,
  FlexContainer,
  TextContainer,
  TextSection,
  ColoredText,
} from "styles/GlobalComponents";
import Image from "next/image";

const About = () => {
  return (
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
                - a web developer and designer who&apos;s currently based in the
                UK. I began my journey in development and design for around 4
                years after completing college and I&apos;ve took a massive
                undertaking in improving my skills in all areas with new
                features that appear on the web in recent years.{" "}
                <TextSection>
                  I specialise in Javascript based frameworks such as React and
                  Vue, alongside my proficient knowledge of years studying the
                  core principles of HTML and CSS to make the web look its best
                  and fastest.
                </TextSection>
              </TextSection>
            </TextContainer>
          </FlexContainer>
        </Container>
      </InnerSection>
    </PageSection>
  );
};
export default About;
