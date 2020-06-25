import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
}

const SiteLink = styled.a<Props>`
  width: ${({ width }) => (width ? width : '170px')};
  height: ${({ height }) => (height ? height : '50px')};
  background: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.green1};
  border-radius: 36px;
  border: ${({ border, theme }) =>
    border ? border : `2px solid ${theme.colors.green1}`};
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
  text-transform: uppercase;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  padding: 0.5rem;
  opacity: 1;
`;

export default SiteLink;
