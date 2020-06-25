import styled from 'styled-components';

const Input = styled.input.attrs(({ className }) => ({
  className: `appearance-none border-none w-full ${className}`,
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;

export default Input;
