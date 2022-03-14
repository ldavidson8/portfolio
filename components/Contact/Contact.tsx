import {
  Container,
  FlexContainer,
  InnerSection,
  PageSection,
  SocialLink,
  SocialLinks,
  SocialLinkText,
  SubHeading,
  TextContainer,
  TextSection,
} from "styles/GlobalComponents";
import { Email, Github, LinkedIn } from "../SocialLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <PageSection id="contact">
      <SubHeading>Contact Me</SubHeading>
      <InnerSection>
        <Container>
          <FlexContainer>
            <TextContainer>
              <TextSection>
                If you think I&apos;m a good fit for a project you have, or just
                want to have a chat, fill in the form or message me on my
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
  );
};
export default Contact;
