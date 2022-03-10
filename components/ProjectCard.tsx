import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Card = styled.div`
  background-color: var(--color-cards, #e5e5e5);
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
`;

const ProjectName = styled.p`
  font-size: clamp(1rem, 2vw, 2rem);
  color: #000;
  padding: 1rem;
`;

const IndustryName = styled.p`
  color: #000;
  padding: 1rem;
`;

const ProjectURL = styled.p`
  color: ${({ color }) => color};
  padding: 1rem;
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
      <Card>
        <Link href={pageurl} passHref>
          <a>
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              height={50}
              width={100}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNUrwcAANMAqC9d4aUAAAAASUVORK5CYII="
            />
            <ProjectName>{projectname}</ProjectName>
            <IndustryName>{industry}</IndustryName>
          </a>
        </Link>
        <Link href={projecturl} passHref>
          <a rel="noopener noreferrer nofollow" target="_blank">
            <ProjectURL color={color}>{projecturl}</ProjectURL>
          </a>
        </Link>
      </Card>
    </>
  );
};
export default ProjectCard;
