import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
}

const Wrapper = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 31.35rem;

  .share {
    top: 8%;
    right: 8%
  }
`;

const Indicators = styled.div`
  .img {
    padding: 0.55rem 0.8rem;
  }
  .num {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

const HouseTourImage: React.FC<Props> = ({ imgUrl = '' }) => {
  return (
    <>
      <Wrapper imgUrl={imgUrl} className="relative">
        <button className="absolute share">
          <img className="h-12 w-12" src="/img/share-house-tour.svg" alt="share" />
        </button>
      </Wrapper>
      <Indicators className="flex items-center justify-between pt-8">
        <div className="num font-semibold">
          <span>2/</span>
          <span>14</span>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10 border border-gray-400 mr-6">
            <img
              src="/img/image-left-arrow.svg"
              className="inline-block bg-white img h-full w-full"
              alt="Left arrow"
            />
          </div>
          <div className="h-10 w-10 border border-gray-400">
            <img
              src="/img/image-right-arrow.svg"
              className="inline-block bg-white img h-full w-full"
              alt="Left arrow"
            />
          </div>
        </div>
      </Indicators>
    </>
  );
};

export default HouseTourImage;
