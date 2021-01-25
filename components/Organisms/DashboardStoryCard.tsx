import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


interface Props {
  imgUrl?: string;
  title?: string;
  sponsored?: boolean;
  path?: string;
}

const Wrapper = styled.section.attrs({
  className: "max-w-xs overflow-hidden rounded-lg border border-gray-200"
})`

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
  imgUrl,
  title,
  sponsored,
  path
}) => {
  return (
    <Link href={path}>
      <a>
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
              <h1 className="capitalize title text-black text-sm font-semibold p-2">
                {title}
              </h1>
            </div>
          </div>
        </Wrapper>
      </a>
    </Link>

  );
};

export default DashboardStoryCard;
