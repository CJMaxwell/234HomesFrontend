import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
  width?: string;
  padding?: string;
  title?: string
}

const Wrapper = styled.div<Props>`
  border-radius: 10px;
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  .title-author {
    left: 20px;
    bottom: 20px;
    visibility: hidden;
  }
  .share, .like {
    visibility: hidden;
  }
  &:hover  {
    background-image: url('${({ imgUrl }) => imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    .title-author {
      visibility: visible;

    }
    .share {
    right: 30px;
    top: 30px;
    visibility: visible;
    }
    .like {
    right: 30px;
    top: 70px;
    visibility: visible;
    }
  }
`;

const GalleryItem: React.FC<Props> = ({
  imgUrl,
  height,
  width,
  title
}) => {
  return (
    <Wrapper
      imgUrl={imgUrl}
      height={height}
      width={width}
      className="bg-gallery-item relative">
      <div className="absolute title-author">
        <div className="font-bold mb-2 text-white text-xl">
          {title || 'Dolor sit amet'}
        </div>
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
      <button className=" absolute share">
        <img className="h-6 w-6" src="/img/yellow-share.svg" alt="share" />
      </button>
      <button className=" absolute like">
        <img className="h-6 w-6" src="/img/yellow-heart.svg" alt="Like" />
      </button>
    </Wrapper>
  )
};

export default GalleryItem;
