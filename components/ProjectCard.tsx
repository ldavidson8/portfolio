import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Card = styled.div`
  height: 25em;
  min-height: fit-content;
  color: var(--color-cards, #e5e5e5);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  object-fit: cover;
`;

const ProjectName = styled.p`
  font-size: clamp(1rem, 2vw, 2rem);
  color: #000;
`;

const IndustryName = styled.p`
  color: #000;
`;

const ProjectURL = styled.p`
  color: ${({ color }) => color};
`;

interface CardProps {
  pageurl: string;
  src: string;
  alt: string;
  projectname: string;
  industry: string;
  projecturl: string;
  color: string;
}

const ProjectCard = ({
  pageurl,
  src,
  alt,
  projectname,
  industry,
  projecturl,
  color,
}: CardProps) => {
  return (
    <>
      <Link href={pageurl} passHref>
        <a>
          <Card>
            <ImageContainer>
              <Image src={src} alt={alt}></Image>
            </ImageContainer>
            <ProjectName>{projectname}</ProjectName>
            <IndustryName>{industry}</IndustryName>
            <ProjectURL color={color}>{projecturl}</ProjectURL>
          </Card>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
