import styled from 'styled-components';
interface Props {
  padding?: string
}

const CTA = styled.button<Props>`
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.orange1};
  font-size: 0.7rem;
  padding: ${({ padding }) => padding};
  text-transform: uppercase;
  font-weight: 600;
`;

export default CTA;
