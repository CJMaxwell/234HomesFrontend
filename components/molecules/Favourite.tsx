import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';


interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
  width?: string;
}

const ImgContainer = styled.div<Props>`
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

const Title = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray1};
  margin-top: 1.4rem;
`;

const Favourite: React.FC<Props> = ({ imgUrl = '', height, width, title }) => {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <ImgContainer imgUrl={imgUrl} height={height} width={width} />
      <Title>{title}</Title>
    </div>
  )
}

export default Favourite
