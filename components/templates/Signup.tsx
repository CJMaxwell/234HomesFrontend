import React, { useContext } from 'react';
import Link from 'next/link';
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
  height: 34rem;
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
  .continue-google {
    border: 1px solid ${({ theme }) => theme.colors.blue1};
    background-color: ${({ theme }) => theme.colors.blue1};
  }

  .continue-email {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    background-color: ${({ theme }) => theme.colors.orange1};
  }

  .btn-google {
    background-color: ${({ theme }) => theme.colors.blue1};
  }
`;

// url('/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png');

const Signup: React.FC<Props> = ({ imgUrl = '' }) => {

  const theme = useContext(ThemeContext);

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar />
      </div>
      <Wrapper className="relative" imgUrl={'/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png'}>

        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center my-12">Get Your Free Account</h1>
          <div className="px-8">
            <div className="continue-google">
              <img src="/img/google_logo.svg" className="inline-block py-1 px-2 bg-white" alt="Sign up with Google" />
              <button className="px-32 btn-google text-white">Continue with Google</button>
            </div>
            <div className="text-center my-8 flex items-center">
              <hr className="w-1/2" />
              <span className="px-1">or</span>
              <hr className="w-1/2" />
            </div>
          </div>
          <form className="px-8 mt-auto">
            <div className="border border-gray-500 justify-between flex items-center">
              <div>
                <img src="/img/mailbox_icon.svg" className="inline-block px-2" alt="Sign up with Email" />
              </div>
              <input className="appearance-none w-full py-4 leading-tight" id="email" type="email" required placeholder="Enter Your Email Address" />
            </div>
            <div className="text-center continue-email mt-4">
              <button type="submit" className="text-center text-white py-4">Continue with Email</button>
            </div>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}

export default Signup
