import { projects } from "@/constants/constants";
import Image from "next/image";
import { PageSection, SubHeading } from "styles/GlobalComponents";
import {
  CardContainer,
  ImageContainer,
  ProjectGrid,
  ProjectInfo,
  ProjectTitle,
  TagList,
  TitleContent,
  Tag,
  ExternalLinks,
  ContentContainer,
} from "./Projects.styled";

const Projects = () => {
  return (
    <PageSection id="projects">
      <SubHeading>What I&apos;ve worked on</SubHeading>
      <ProjectGrid>
        {projects.map(({ id, image, title, description, tags, visit }) => {
          return (
            <>
              <CardContainer key={id}>
                <ImageContainer>
                  <Image src={image} alt="" layout="fill" objectFit="cover" />
                </ImageContainer>
                <ContentContainer>
                  <TitleContent>
                    <ProjectTitle>{title}</ProjectTitle>
                  </TitleContent>
                  <ProjectInfo className="card-info">{description}</ProjectInfo>
                  <div>
                    <TagList>
                      {tags.map((tag, i) => {
                        return <Tag key={i}>{tag}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <ExternalLinks
                    href={visit}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Visit
                  </ExternalLinks>
                </ContentContainer>
              </CardContainer>
            </>
          );
        })}
      </ProjectGrid>
    </PageSection>
  );
};
export default Projects;
