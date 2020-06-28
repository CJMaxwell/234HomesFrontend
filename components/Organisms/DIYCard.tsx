import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
}
const textPosition = {
  top: '60%',
  left: '5%',
};
const share = {
  top: '5%',
  right: '2%',
};

const Wrapper = styled.div<Props>`
  border-radius: 20px;
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: ${({ height }) => height};

  .title-author {
    bottom: 45px;
    left: 32px;
  }
`;


const DIYCard: React.FC<Props> = ({ imgUrl = '', height }) => {
  return (
    <Wrapper imgUrl={imgUrl} height={height} className="max-w-sm rounded overflow-hidden shadow-lg relative text-white">
      <div className="absolute title-author">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-white leading-none">Jonathan Reinink</p>
            <p className="text-white">Aug 18, 2020</p>
          </div>
        </div>
      </div>
      <button className="absolute" style={share}>
        <img className="h-8 w-8" src="/Ellipse.svg" alt="share" />
      </button>
    </Wrapper>
  );
};

export default DIYCard;
