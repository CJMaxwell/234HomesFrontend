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
    max-height: 33.5rem;
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
  .verification-code {
    border-radius: 9px;
  }
  .enter-code {
    color: ${({theme}) => theme.colors.gray5};
    font-size: 0.8rem;

    span {
      color: ${({theme}) => theme.colors.orange1};

    }
  }
`;

// url('/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png');

const Verify: React.FC<Props> = ({ imgUrl = '' }) => {

  const theme = useContext(ThemeContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/verify-success')
  }

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="register" />
      </div>
      <Wrapper className="relative" imgUrl={'/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png'}>

        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center pt-10 mb-4">Verification</h1>
          <hr/>
          <p className="enter-code px-8 text-center my-12">
            Please enter the verification code sent to your phone number. 
            <span>
              <a>Didn’t receive it?</a>
            </span>
          </p>
          <form onSubmit={handleSubmit} className="px-8">
            <div className="flex items-center justify-between">
              <input className="appearance-none outline-none border border-gray-500 text-center verification-code w-20 h-10 leading-tight" id="phone" type="text" required />
              <input className="appearance-none outline-none border border-gray-500 text-center verification-code w-20 h-10 leading-tight" id="phone" type="text" required />
              <input className="appearance-none outline-none border border-gray-500 text-center verification-code w-20 h-10 leading-tight" id="phone" type="text" required />
              <input className="appearance-none outline-none border border-gray-500 text-center verification-code w-20 h-10 leading-tight" id="phone" type="text" required />
            </div>
            <div className="border border-gray-500 form-wrap mt-12 h-12 justify-between pr-4 flex items-center">
              <div className="input-addon pr-4">
                <img src="/img/password-phone.svg" className="inline-block w-4 h-6" alt="Sign up with phone" />
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight pr-4" id="phone" type="password" required placeholder="Create Password" />
            </div>
            <div className="border border-gray-500 mt-4 form-wrap h-12 justify-between pr-4 flex items-center">
              <div className="input-addon pr-4">
                <img src="/img/password-phone.svg" className="inline-block w-4 h-6" alt="Sign up with phone" />
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight pr-4" id="phone" type="password" required placeholder="Repeat Password" />
            </div>
            <div className="text-center form-wrap bg-signup mt-4 h-12">
              <button type="submit" className="text-center font-semibold uppercase w-full h-full text-white">Submit</button>
            </div>
          </form>
          
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}

export default Verify
