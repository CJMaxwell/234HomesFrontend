import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
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
  border-radius: 20px;
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 16rem;
  border-radius: 14px;
  /* height: ${({ height }) => height}; */


  .title {
    bottom: 20px;
    left: 32px;
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    background-image: url('${({ imgUrl }) => imgUrl}'), 
    linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    .title {
      visibility: visible;
      opacity: 1;
    }
  }

  .share {
    top: 8%;
    right: 8%;
    border-radius: 20px;
    padding: 0.45rem 0.65rem;
    background: rgba(0,0,0,0.5);
  }
`;

const ProjectListingCard: React.FC<Props> = ({ imgUrl = '', height }) => {
  return (
    <Wrapper>
      <ProjectBanner
        imgUrl={imgUrl}
        height={height}
        className="rounded overflow-hidden shadow-lg relative text-white"
      >
        <p className="absolute share text-white border border-white">Bathroom</p>
        <div className="font-bold mb-2 title absolute">The Coldest Sunset</div>
      </ProjectBanner>
      <div className="pt-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-6 h-6 rounded-full mr-4"
            src="/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-xs">
            <p className="user leading-none">Jonathan Reinink</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <img className="project-activty mr-1" src="/img/heart-project.svg" alt="Like Project" />
            <p className="reactions">123</p>
          </div>
          <div className="flex items-center">
            <img className="project-activty mr-1" src="/img/views.svg" alt="Views" />
            <p className="reactions">843</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectListingCard;
