import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
}

const Wrapper = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 31.35rem;
`;

const StoryImage: React.FC<Props> = ({ imgUrl = '' }) => {
  return <Wrapper imgUrl={imgUrl} />;
};

export default StoryImage;
