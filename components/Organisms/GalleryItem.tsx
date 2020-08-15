import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
  width?: string;
  padding?: string;
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
  
`;



const GalleryItem: React.FC<Props> = ({ imgUrl = '', height,width }) => {
  return (
    <Wrapper  imgUrl={imgUrl} height={height} width={width} className="bg-gallery-item">
      
    </Wrapper>
  )
}

export default GalleryItem
