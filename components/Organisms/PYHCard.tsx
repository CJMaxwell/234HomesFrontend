import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
}

const ProjectImg = styled.section<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 8rem;
  width: 100%;
`;
const Wrapper = styled.a.attrs({
  className: "max-w-xs overflow-hidden"
})`
  .proj-title{
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const PYHCard: React.FC<Props> = ({ imgUrl, height, title }) => {
  return (
    <Wrapper >
      <ProjectImg imgUrl={imgUrl} height={height} />
      <section className="py-4">
        <p className="proj-title">{title}</p>
      </section>
    </Wrapper>
  );
};

export default PYHCard;
