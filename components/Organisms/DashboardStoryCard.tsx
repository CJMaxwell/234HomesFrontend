import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
  category?: string;
  user?: string;
  PostDate?: string;
  sponsored?: boolean;
}

const Wrapper = styled.section.attrs({
  className: "max-w-xs overflow-hidden rounded-lg border border-gray-200"
})`
  margin-bottom: 2.85rem;

  /* .title {
    width: 33.2rem;
  } */
  .category {
    color: ${({ theme }) => theme.colors.yellow3};
    font-size: 0.7rem;
  }
  .postdate,
  .user {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray1};
  }

  .desc {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
    width: 33.65rem;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
  }
  .line {
    width: 33.65rem;
  }
`;

const StoryImg = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 10rem;

  .sponsored {
    width: 5rem;
    background-color: ${({ theme }) => theme.colors.orange1};
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.55rem;
    font-weight: 600;
  }
  .sponsored:after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0rem;
    border: 0.88rem solid ${({ theme }) => theme.colors.orange1};
    z-index: -1;
    right: -0.95rem;
    border-left-width: 1.5rem;
    border-right-color: transparent;
  }
`;

const DashboardStoryCard: React.FC<Props> = ({
  imgUrl = '',
  title = '',
  sponsored = '',
}) => {
  return (
    <Wrapper>
      <div className="">
        <StoryImg imgUrl={imgUrl}>
          {sponsored ? (
            <div className="sponsored text-white relative py-2 px-4">Sponsored</div>
          ) : (
              <div />
            )}
        </StoryImg>
        <div>
          <h1 className="capitalize title text-black font-semibold p-4">
            Gonsetetur sadipscing elitr, sed diam nonumy eirmod
          </h1>
        </div>

      </div>
    </Wrapper>
  );
};

export default DashboardStoryCard;
