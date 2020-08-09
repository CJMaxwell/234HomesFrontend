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
    max-width: 28.9rem;
    max-height: 35.3rem;
  }

  .signIn {
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
  .reset-password {
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.7rem;
    padding-top: 0.5rem;
  }
  .social-icons {
    /* padding: 1.05rem 0.85rem; */
    padding: 0.8rem 0.5rem;

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
          <hr className="mb-20"/>
          <form onSubmit={handleSubmit} className="px-8 mt-auto">
            <div className="border border-gray-500 form-wrap h-12 pr-4 justify-between flex items-center">
              <div className="input-addon pr-4">
                <p>+234</p>
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight pr-4" id="phone" type="text" required placeholder="Enter Your Phone Number" />
            </div>
            <div className="border border-gray-500 form-wrap h-12 mt-5 pr-4 justify-between flex items-center">
              <div className="input-addon pr-4">
                <img src="/img/password-phone.svg" className="inline-block w-4 h-6" alt="Sign up with phone" />
              </div>
              <input className="appearance-none outline-none w-full h-full leading-tight pr-4" id="password" type="password" required placeholder="Password" />
            </div>
            <p className="flex justify-end reset-password">
              <a>Reset password</a>
            </p>
            <div className="text-center form-wrap signIn mt-8 h-12">
              <button type="submit" className="text-center font-semibold uppercase w-full h-full text-white">Sign In</button>
            </div>
          </form>
          <ul className="flex items-center justify-center mt-12">
            <li className="border border-gray-500 rounded-full social-icons h-12 w-12 mr-10">
              <img src="/img/email-icon.svg" className="h-full w-full" alt="Email" />
            </li>
            <li className="border border-gray-500 rounded-full social-icons h-12 w-12 mr-10">
              <img src="/img/google-logo.svg" className="h-full w-full" alt="Gmail" />
            </li>
            <li className="border border-gray-500 rounded-full social-icons h-12 w-12">
              <img src="/img/facebook-logo.svg" className="h-full w-full" alt="Facebook" />
            </li>
          </ul>
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}

export default Login
