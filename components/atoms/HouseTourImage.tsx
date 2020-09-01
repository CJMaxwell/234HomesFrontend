import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  index?: number,
  total?: number,
  desc?: string
}

const Wrapper = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 33rem;
`;
const SectionWrap = styled.section`
background-color: ${({ theme }) => theme.colors.gray23};
`;

const Indicators = styled.div`
  .num {
    color: ${({ theme }) => theme.colors.orange1};
  }
`;

const HouseTourImage: React.FC<Props> = ({ imgUrl, index, total, desc }) => {
  return (
    <SectionWrap>
      <Wrapper imgUrl={imgUrl} className="relative">
      </Wrapper>
      <Indicators className="flex items-center pt-8 pb-12 pl-16">
        <div className="num font-semibold flex">
          <div className="pr-1">{index}</div>
          <div className="pr-1">/</div>
          <div>{total}</div>
        </div>
        <div className="img-desc pl-8">{desc}</div>
      </Indicators>
    </SectionWrap>
  );
};

export default HouseTourImage;
