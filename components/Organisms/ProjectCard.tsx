import React from 'react';
import styled from 'styled-components';


interface Props {
  imgUrl?: string;
  height?: string;
}

const Wrapper = styled.section`
.proj-title {
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 0.8rem;
  font-weight: 600;
}
`;

const ProjectCard: React.FC<Props> = ({ imgUrl = '' }) => {
  return (
    <Wrapper className="max-w-xs overflow-hidden rounded-lg border border-gray-200">
      <img className="w-full object-cover" src={imgUrl} alt="" />
      <div className="px-6 py-4">
        <p className="proj-title">Lorem ipsum dolor sit consetetur elitr</p>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
