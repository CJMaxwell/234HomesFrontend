import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
}

const Wrapper = styled.div<Props>`
  background-image: url('${({ imgUrl }) => imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: ${({ height }) => height};
  overflow: hidden;
  border-radius: 20px;

  .title-author {
    left:29px;
    bottom: 20px;
  }

  .share {
    right: 21px;
    top: 38.12px;
  }
`;

const PostCard: React.FC<Props> = ({
  imgUrl = '/img/Adora_NH_sink.png',
  height,
}) => {
  return (
    <Wrapper
      imgUrl={imgUrl}
      height={height}
      className="rounded overflow-hidden shadow-lg relative text-white"
    >
      <div className="absolute title-author">
        <div className="font-bold mb-2 text-2xl">Dolor sit amet<br /> sed diam</div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-xs">
            <p className="text-white leading-none">Jones Reinink</p>
            <p className="text-white">Aug 18, 2020</p>
          </div>
        </div>
      </div>
      <button className="absolute share">
        <img className="h-6 w-6" src="/img/share.svg" alt="share" />
      </button>
    </Wrapper>
  );
};

export default PostCard;
