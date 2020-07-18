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

  .share {
    top: 8%;
  right: 8%
  }
`;

const Title = styled.h1`
  width: 22rem;
  padding-top: 1.4rem;
  color: ${({ theme }) => theme.colors.gray5};
`;

const MostTalkedHouseTours: React.FC<Props> = ({ imgUrl = '' }) => {
  return (
    <div className="text-center">
      <Wrapper imgUrl={imgUrl} className="rounded overflow-hidden shadow-lg relative text-white">
        <button className="absolute share">
          <img className="h-6 w-6" src="/img/share-house-tour.svg" alt="share" />
        </button>
      </Wrapper>
      <Title className="capitalize">
        elitr sed diam nonumy eirmod tempor invidunt ut labore et
    </Title>
    </div>
  )
}

export default MostTalkedHouseTours
