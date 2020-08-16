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

const Wrapper = styled.section`
  margin-bottom: 2.85rem;

  .title {
    width: 33.2rem;
  }
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
  width: 24.75rem;
  height: 14.95rem;

  .sponsored {
    width: 5rem;
    /* height: 1.4rem; */
    background-color: ${({ theme }) => theme.colors.orange1};
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.55rem;
    font-weight: 600;
    /* border-radius: 0px 1.1rem 1.1rem 0px; */
    
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
  }
`;

const StoryCard: React.FC<Props> = ({
  imgUrl = '',
  height = '',
  user = '',
  title = '',
  category = '',
  PostDate = '',
  sponsored = '',
}) => {
  return (
    <Wrapper>
      <div className="line mt-8 mb-8">
        <hr />
      </div>
      <div className="flex justify-between">
        <div>
          <h6 className="uppercase category">{category}</h6>
          <h1 className="capitalize title text-black text-2xl font-semibold pt-4">
            Gonsetetur sadipscing elitr, sed diam nonumy eirmod
          </h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore…
          </p>
          <div className="">
            <span className="user font-semibold">by {user}</span> |
            <span className="postdate"> {PostDate}</span>
          </div>
        </div>
        <StoryImg imgUrl={imgUrl}>
          {sponsored ? (
            <div className="sponsored text-white relative py-2 px-4">Sponsored</div>
          ) : (
            <div />
          )}
        </StoryImg>
      </div>
    </Wrapper>
  );
};

export default StoryCard;
