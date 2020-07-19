import React from 'react';
import styled from 'styled-components';


interface Props {
  imgUrl?: string;
  height?: string;
}

const Wrapper = styled.div<Props>`
  border-radius: 12px;
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 13.1rem;
  width: 22rem;

  .play {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;

const Title = styled.h1`
  width: 22rem;
  padding-top: 1.4rem;
  color: ${({ theme }) => theme.colors.gray5};
`;

const DIYPostCard: React.FC<Props> = ({ imgUrl = '' }) => {
  return (
    <div className="text-center">
      <Wrapper imgUrl={imgUrl} className="rounded overflow-hidden shadow-lg relative text-white">
        <button className="absolute play">
          <img className="h-12 w-12" src="/img/diy-play.svg" alt="Play" />
        </button>
      </Wrapper>
      <Title className="capitalize">
        elitr sed diam nonumy eirmod tempor invidunt ut labore et
    </Title>
    </div>
  )
}

export default DIYPostCard
