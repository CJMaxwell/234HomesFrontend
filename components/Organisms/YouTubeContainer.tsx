import React, { useState } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import styled from 'styled-components';

const DIYBanner = styled.div<{ thumbnail: string; playing: boolean }>`
  height: 37.5rem;
  background: url('${({ thumbnail }) => thumbnail}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 10px;
  display: ${({ playing }) => (playing ? 'none' : 'block')};

  .playBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const VideoWrapper = styled.div<{ playing: boolean }>`
  height: 37.5rem;
  display: ${({ playing }) => (playing ? 'block' : 'none')};
`;

const extractYouTubeId = (url: string) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

const YouTubeContainer: React.FC<{ url: string; thumbnail: string; allowFullScreen?: boolean }> = ({
  url,
  thumbnail,
  allowFullScreen = false,
}) => {
  const [playing, setPlaying] = useState(false);
  const id = extractYouTubeId(url);

  return (
    <>
      <VideoWrapper playing={playing}>
        <ResponsiveEmbed
          src={`https://youtube.com/embed/${id}`}
          allowFullScreen={allowFullScreen}
        />
      </VideoWrapper>
      <DIYBanner
        playing={playing}
        thumbnail={thumbnail}
        onClick={() => {
          setPlaying(true);
        }}
      >
        <div className="flex items-center pt-4 playBtn">
          <img src="/img/diy-play.svg" className="h-16 w-16" alt="Play" />
        </div>
      </DIYBanner>
    </>
  );
};

export default YouTubeContainer;
