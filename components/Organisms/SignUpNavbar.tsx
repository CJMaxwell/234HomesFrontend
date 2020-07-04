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


const SignUpNavbar = () => {

  const theme = useContext(ThemeContext);

  return (
    <nav className="container mx-auto flex items-center justify-between py-5">
      <Link href="/">
        <a className="flex items-center text-white mr-6">
          <img src="/img/234_Homes_final_logo.png" alt="+234Homes logo" className="h-20 w-16 object-cover" />
        </a>
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
