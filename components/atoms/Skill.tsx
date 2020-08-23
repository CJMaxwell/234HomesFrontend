import styled from 'styled-components';

const Skill = styled.span.attrs({
  className: "mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2",
})`
  background-color: ${({ theme }) => theme.colors.gray18};
  color: ${({ theme }) => theme.colors.gray11};
  font-size: 0.7rem;
`;

export default Skill;
