import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';

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
  .home-page {
    color: ${({ theme }) => theme.colors.orange1};
    text-decoration: underline;
  } 
  .form-wrap {
    border-radius: 32px;
  }
  
  .congrats {
    color: ${({theme}) => theme.colors.gray1};
    font-size: 1.75rem;
  }
  .registered {
    color: ${({theme}) => theme.colors.gray5};
    font-size: 0.8rem;
  }
  .cta {
    color: ${({theme}) => theme.colors.gray11};
    font-size: 0.8rem;
  }
`;

// url('/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png');

const VerifySuccess: React.FC<Props> = ({ imgUrl = '' }) => {

  const theme = useContext(ThemeContext);

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="register" />
      </div>
      <Wrapper className="relative" imgUrl={'/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png'}>

        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center my-6">Registration Successful</h1>
          <hr/>
          <section className="text-center">
            <div className="flex justify-center items-center py-6">
              <img src="/img/success.svg" className="h-16 w-16" alt="success" />
            </div>
            <h1 className="congrats font-semibold pb-3">Congratulations!</h1>
            <p className="registered pb-4">Your account has been successfully registered.</p>
            <Link href="/">
              <a className="home-page">Return to home Page</a>
            </Link>
          </section>
          <div className="px-8">
            <div className="text-center my-8 flex items-center">
              <hr className="w-1/2" />
              <span className="px-1">or</span>
              <hr className="w-1/2" />
            </div>
            <div className="mt-4 h-10 flex items-center border border-gray-500 form-wrap">
              <button className="cta h-full w-full outline-none">FIND IDEAS FOR YOUR NEXT HOUSE</button>
            </div>
            <div className="mt-4 h-10 flex items-center border border-gray-500 form-wrap">
              <button className="cta h-full w-full outline-none">HIRE PROFESSIONALS</button>
            </div>
            <div className="mt-4 h-10 flex items-center border border-gray-500 form-wrap">
              <button className="cta h-full w-full outline-none">SHOP PRODUCTS</button>
            </div>
          </div>
          
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}

export default VerifySuccess
