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
    bottom: 44px;
  }

  .share {
    right: 30px;
    top: 54.46px;
  }
`;

const PostCard: React.FC<Props> = ({
  imgUrl = '/Adora_NH_sink.png',
  height,
}) => {
  return (
    <Wrapper
      imgUrl={imgUrl}
      height={height}
      className="rounded overflow-hidden shadow-lg relative text-white"
    >
      <div className="absolute title-author">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-white leading-none">Jones Reinink</p>
            <p className="text-white">Aug 18, 2020</p>
          </div>
        </div>
      </div>
      <button className="absolute share">
        <img className="h-8 w-8" src="/share.svg" alt="share" />
      </button>
    </Wrapper>
  );
};

export default PostCard;
