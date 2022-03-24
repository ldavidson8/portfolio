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
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
    transition: { type: "spring", bounce: 0.4 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

const Projects = () => {
  return (
    <PageSection id="projects">
      <SubHeading>What I&apos;ve worked on</SubHeading>
      <ProjectGrid>
        {projects
          .sort(
            ({ id: previousID }, { id: currentID }) => previousID - currentID
          )
          .map(({ id, image, title, description, tags, visit }) => {
            return (
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={id}
              >
                <CardContainer as={motion.div} variants={cardVariants}>
                  <ImageContainer>
                    <Image src={image} alt="" layout="fill" objectFit="cover" />
                  </ImageContainer>
                  <ContentContainer>
                    <TitleContent>
                      <ProjectTitle>{title}</ProjectTitle>
                    </TitleContent>
                    <ProjectInfo className="card-info">
                      {description}
                    </ProjectInfo>
                    <div>
                      <TagList key={id}>
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
              </motion.div>
            );
          })}
      </ProjectGrid>
    </PageSection>
  );
};
export default Projects;
