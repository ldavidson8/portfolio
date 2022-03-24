import styled from "styled-components";

export const ProjectGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  box-shadow: 2px 4px 12px rgb(255 255 255 / 8%);

  &:hover {
    box-shadow: 2px 4px 16px rgb(255 255 255 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  padding: 1.5rem;
`;

export const TitleContent = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
`;

export const ProjectInfo = styled.p`
  width: 100%;
  line-height: 1.5rem;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 1em;
`;
export const Tag = styled.li`
  color: var(--color-primary, #3992ff);
`;

export const ExternalLinks = styled.a`
  color: #fff;
  background-color: var(--color-primary, #3992ff);
  padding: 0.5em 2em;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: var(--color-primaryhover, #4179cc);
  }
`;
