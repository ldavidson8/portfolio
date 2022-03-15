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
// import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const sectionRef = useRef(null);

  useEffect(() => {
    cardRefs?.current.map((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            id: `projects-${index + 1}`,
            trigger: el,
            start: "top center+=200",
            markers: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <PageSection id="projects" ref={sectionRef}>
      <SubHeading>What I&apos;ve worked on</SubHeading>
      <ProjectGrid>
        {projects.map(({ id, image, title, description, tags, visit }) => {
          return (
            <>
              <CardContainer key={id} ref={addToRefs}>
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
