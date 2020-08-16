import styled from 'styled-components';

interface Props {
  bgColor?: string;
  height?: string;
  width?: string;
  borderColor?: string;
}

const Badge = styled.div<Props>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.green1};
  height: ${({ height }) => height || '20px'};
  width: ${({ width }) => width || '20px'};
  border-color: ${({ borderColor, theme }) => borderColor || theme.colors.green1};
  border-width: 1px solid;
  border-radius: 50%;
`;

export default Badge;
