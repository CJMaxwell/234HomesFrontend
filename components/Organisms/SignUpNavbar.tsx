import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  type?: 'login' | 'register';
}
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

const SignUpNavbar: React.FC<Props> = ({ type = 'register' }) => {
  return (
    <nav className="container mx-auto general-padding flex items-center justify-between py-5">
      <Link href="/">
        <Logo className="flex items-center text-white mr-6">
          <img src="/img/234_Homes_final_logo.png" alt="+234Homes logo" />
        </Logo>
      </Link>
      <LoginWrap>
        {type === 'login' && <span>Don't Have An Account?</span>}
        {type === 'register' && <span>Already Have An Account?</span>}{' '}
        {type === 'login' && (
          <Link href="/signup">
            <SignIn>Sign Up</SignIn>
          </Link>
        )}
        {type === 'register' && (
          <Link href="/login">
            <SignIn>Log In</SignIn>
          </Link>
        )}
      </LoginWrap>
    </nav>
  );
};

export default SignUpNavbar;
