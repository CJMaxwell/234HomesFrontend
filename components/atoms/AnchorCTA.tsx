import styled from 'styled-components';

interface Props {
  padding?: string;
  color?: string;
  borderColor?: string;
}

const AnchorCTA = styled.a<Props>`
  border: 1px solid ${({ theme, borderColor }) => borderColor || theme.colors.orange1};
  border-radius: 32px;
  color: ${({ theme, color }) => color || theme.colors.orange1};
  font-size: 0.7rem;
  padding: ${({ padding }) => padding};
  text-transform: uppercase;
  font-weight: 600;
`;

export default AnchorCTA;
