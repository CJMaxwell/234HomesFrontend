import React, { Children } from 'react';
import styled from 'styled-components';

interface Props {
  bgColor?: string;
  color?: string;
  height?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
}

const Button = styled.button<Props>`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.orange1};
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
  font-size: 1rem;
  outline: none;
  height: ${({ height }) => (height ? height : '3rem')};
  width: ${({ width }) => (width ? width : '7rem')};
  border: ${({ border, theme }) =>
    border ? border : `2px solid ${theme.colors.orange1}`};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '0.25rem 0 0 0'};
  &:focus {
    outline: 0;
  }
`;

export default Button;
