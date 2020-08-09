import React, { useContext } from 'react';
import Router from 'next/router';
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
    max-width: 28.9rem;
    max-height: 36.7rem;
  }
  .bg-signup {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    background-color: ${({ theme }) => theme.colors.orange1};
  } 
  .form-wrap {
    border-radius: 32px;
  }
  .input-addon {
    padding-left: 0.95rem;
    color: ${({theme}) => theme.colors.gray1};
    font-weight: 600
  }
  input::placeholder {
    text-align: center;
  }
  .continue-btn {
    color: ${({theme}) => theme.colors.gray11};
    font-size: 0.8rem;
  }
`;

// url('/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png');

const Signup: React.FC<Props> = ({ imgUrl = '' }) => {

  const theme = useContext(ThemeContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/verify')
  }

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="register" />
      </div>
      <Wrapper className="relative" imgUrl={'/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png'}>

        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center my-8">Get Your Free Account</h1>
          <hr/>
          <form onSubmit={handleSubmit} className="px-8 mt-12">
            <div className="border border-gray-500 form-wrap h-12 justify-between pr-4 flex items-center">
              <div className="input-addon pr-4">
                <p>+234</p>
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight pr-4" id="phone" type="text" required placeholder="Enter Your Phone Number" />
            </div>
            <div className="text-center form-wrap bg-signup mt-4 h-12">
              <button type="submit" className="text-center font-semibold uppercase w-full h-full text-white">Send me Code</button>
            </div>
          </form>
          <div className="px-8">
          <div className="text-center my-8 flex items-center">
              <hr className="w-1/2" />
              <span className="px-1">or</span>
              <hr className="w-1/2" />
            </div>
            <div className="mt-6 h-12 flex items-center border border-gray-500 form-wrap">
              <div className="input-addon">
                <img src="/img/email-icon.svg" className="inline-block h-full w-12 p-2 bg-white" alt="Sign up with Google" />
              </div>
              <button className="continue-btn h-full w-full outline-none">Continue with Email</button>
            </div>
            <div className="mt-4 h-12 flex items-center border border-gray-500 form-wrap">
              <div className="input-addon">
                <img src="/img/google-logo.svg" className="inline-block h-full w-12 p-2 bg-white" alt="Sign up with Google" />
              </div>
              <button className="continue-btn h-full w-full outline-none">Continue with Google</button>
            </div>
            <div className="mt-4 h-12 flex items-center border border-gray-500 form-wrap">
              <div className="input-addon">
                <img src="/img/facebook-logo.svg" className="inline-block h-full w-12 p-2 bg-white" alt="Sign up with Google" />
              </div>
              <button className="continue-btn h-full w-full outline-none">Continue with Facebook</button>
            </div>
          </div>
          
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}

export default Signup
