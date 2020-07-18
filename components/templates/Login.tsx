import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import SignUpNavbar from '../Organisms/SignUpNavbar';
import Footer from '../templates/Footer';

interface Props {
  imgUrl?: string;
}

const MainWrapper = styled.div`

  .signup-nav {
    height: 7.7244rem;
  }
`;
const Wrapper = styled.section<Props>`
  height: 38rem;
  background: url('${({ imgUrl }) => imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .signup {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-width: 37.3rem;
    max-height: 28.6rem;
  }
  

  .signIn {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    background-color: ${({ theme }) => theme.colors.orange1};
  } 

 
`;

const Login: React.FC<Props> = ({ imgUrl = '' }) => {

  const theme = useContext(ThemeContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Router.push('/dashboard')
  }

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="login" />
      </div>
      <Wrapper className="relative" imgUrl={'/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png'}>

        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center my-10">Sign In</h1>
          <form onSubmit={handleSubmit} className="px-8 mt-auto">
            <div className="border border-gray-500  h-12 justify-between flex items-center">
              <div>
                <img src="/img/mailbox_icon.svg" className="inline-block w-10 h-8 px-2" alt="Sign up with Email" />
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight" id="email" type="email" required placeholder="Enter Your Email Address" />
            </div>
            <div className="border border-gray-500 h-12 mt-5 justify-between flex items-center">
              <div>
                <img src="/img/lock.svg" className="inline-block w-8 h-10 px-2" alt="Sign up with Email" />
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight" id="password" type="password" required placeholder="Enter Your Password Address" />
            </div>
            <div className="text-center signIn mt-8 h-12">
              <button type="submit" className="text-center w-full h-full text-white">Sign In</button>
            </div>
            <div className="bg-white border border-gray-500 mt-6 h-12 flex items-center">
              <img src="/img/google_logo.svg" className="inline-block h-12 w-12 px-2 border-r border-gray-500" alt="Sign up with Google" />
              <button className="px-32 text-gray-600">Continue with Google</button>
            </div>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}

export default Login
