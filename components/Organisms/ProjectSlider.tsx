import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
  description?: string;
  category?: string;
  city?: string;
  state?: string;
  path?: string;
  year?: Number
}

const Wrapper = styled.section`
  .user {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }

  .project-activty {
    height: 0.7rem;
    width: 0.8rem;
  }
  .reactions {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
`;

const ProjectBanner = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 33rem;
  /* height: ${({ height }) => height}; */


  .title {
    bottom: 20px;
    left: 32px;
    visibility: hidden;
    opacity: 0;
  }
  
`;

const ProjectSlider: React.FC<Props> = ({
  imgUrl,
  height,
  title,
  description,
  category,
  path,
  city,
  state,
  year
}) => {
  return (
    <Link href={`${path || ''}`}>
      <Wrapper className="cursor-pointer">
        <ProjectBanner
          imgUrl={imgUrl}
          height={height}
          className="rounded overflow-hidden shadow-lg relative text-white"
        >
          <div className="font-bold mb-2 title absolute">{title}</div>
        </ProjectBanner>
      </Wrapper>
    </Link>
  );
};

export default ProjectSlider;
