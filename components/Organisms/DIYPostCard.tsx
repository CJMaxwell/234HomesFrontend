import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
  path?: string;
}

const Wrapper = styled.div<{ imgUrl?: string }>`
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

const DIYPostCard: React.FC<Props> = ({ imgUrl = '', title = '', path = '' }) => {
  return (
    <Link href={path}>
      <div className="text-center">
        <Wrapper imgUrl={imgUrl} className="rounded overflow-hidden shadow-lg relative text-white">
          <button type="button" className="absolute play">
            <img className="h-12 w-12" src="/img/diy-play.svg" alt="Play" />
          </button>
        </Wrapper>
        <Title className="capitalize">{title}</Title>
      </div>
    </Link>
  );
};

export default DIYPostCard;
