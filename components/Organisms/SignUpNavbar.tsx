import React, { useContext } from 'react';
import Link from 'next/link';
import styled, { ThemeContext } from 'styled-components';

const SignIn = styled.a`
  color: ${({ theme }) => theme.colors.yellow2};
`;
const LoginWrap = styled.div`
  font-size: 0.875rem;
  span {
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

const Logo = styled.a`
  img {
    width: 4.71875rem;
    height: 5.33125rem;
  }
`;


const SignUpNavbar = () => {

  const theme = useContext(ThemeContext);

  return (
    <nav className="container mx-auto general-padding flex items-center justify-between py-5">
      <Link href="/">
        <Logo className="flex items-center text-white mr-6">
          <img src="/img/234_Homes_final_logo.png" alt="+234Homes logo" />
        </Logo>
      </Link>
      <LoginWrap>
        <span>Already Have An Account? </span>
        <Link href="/login">
          <SignIn>Sign In</SignIn>
        </Link>
      </LoginWrap>
    </nav>
  )
}

export default SignUpNavbar
