/* eslint-disable react/jsx-key */
import { projects } from "@/constants/constants";
import { MotionConfig } from "framer-motion";
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

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1,
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const Projects = () => {
  return (
    <PageSection id="projects">
      <SubHeading>What I&apos;ve worked on</SubHeading>
      <ProjectGrid>
        {projects.map(({ id, image, title, description, tags, visit }) => {
          return (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
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
