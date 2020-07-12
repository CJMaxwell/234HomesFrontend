import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router'


import SignUpNavbar from '../Organisms/SignUpNavbar';
import Footer from '../templates/Footer';

interface Props {
  imgUrl?: string;
}

const Wrapper = styled.section<Props>`
  height: 51rem;
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
    max-width: 32.11rem;
    max-height: 41rem;
  };

  .continue-email {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    background-color: ${({ theme }) => theme.colors.orange1};
   
  }

  [type="checkbox"]:checked {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
  }

  .agreement {
    color: ${({ theme }) => theme.colors.orange1};
  }

  .icon {
    width: 38px;
    padding-left: 9px;
    padding-right: 9px;
  }
`;

const Category = styled.div`
 
 label {
    background: ${({ theme }) => theme.colors.gray18};
    padding: 0.75rem 2.5rem;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.gray18};
  }

  .visually-hidden {
    position: absolute;
    left: -100vw;
  }
  .visually-hidden:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
  }
  
`;

const CompleteProfile = () => {

  const theme = useContext(ThemeContext);

  const [category, setCategory] = useState('user');

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (category === 'user') {
      Router.push('/profile')
    } else if (category === 'professional') {
      Router.push('/profession')

    } else if (category === 'vendor') {
      Router.push('/company')
    }
  }

  return (
    <div>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar />
      </div>
      <Wrapper className="relative" imgUrl={'/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png'}>

        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-xl font-semibold text-center my-10">Complete Your Profile Setup</h1>
          <form className="px-8 mt-auto pb-12" onSubmit={handleSubmit}>
            <div className="border border-gray-200 justify-between flex items-center">
              <div>
                <img src="/img/mailbox_icon.svg" className="inline-block px-2 icon" alt="Email icon" />
              </div>
              <input className="appearance-none focus:outline-none focus:bg-white w-full py-3 text-sm leading-tight" id="email" type="email" required placeholder="Enter Your Email Address" />
            </div>
            <div className="flex my-4 justify-between w-full">
              <div className="border border-gray-200 w-1/2 mr-2 justify-between flex items-center">
                <div>
                  <img src="/img/user-reg.svg" className="inline-block px-2 icon" alt="User icon" />
                </div>
                <input className="appearance-none text-sm block w-full text-gray-700 py-3 leading-tight focus:outline-none focus:bg-white" required type="text" placeholder="First Name" />
              </div>
              <div className="border border-gray-200 justify-between w-1/2 flex items-center">
                <div>
                  <img src="/img/user-reg.svg" className="inline-block px-2 icon" alt="User icon" />
                </div>
                <input className="appearance-none text-sm block w-full text-gray-700 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="border border-gray-200 w-1/2 mr-2 justify-between flex items-center">
                <div>
                  <img src="/img/lock.svg" className="inline-block px-2 icon" alt="User icon" />
                </div>
                <input className="appearance-none text-sm block w-full text-gray-700 py-3 leading-tight focus:outline-none focus:bg-white" required type="password" placeholder="Create Password" />
              </div>
              <div className="border border-gray-200 w-1/2 justify-between flex items-center">
                <div>
                  <img src="/img/lock.svg" className="inline-block px-2 icon" alt="User icon" />
                </div>
                <input className="appearance-none text-sm block w-full text-gray-700 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required type="password" placeholder="Repeat Password" />
              </div>
            </div>
            <p className="mt-10 mb-6 text-center">I Want To Register As A:</p>
            <div className="flex justify-between">
              <Category className="mr-2">
                <input onChange={handleCategory} checked={category === 'user'} type="radio" id="user" className="visually-hidden" name="category" value="user" required />
                <label htmlFor="user">User</label>
              </Category>
              <Category className="mr-2">
                <input onChange={handleCategory} checked={category === 'professional'} type="radio" id="professional" className="visually-hidden" name="category" value="professional" />
                <label htmlFor="professional">Professional</label>
              </Category>
              <Category>
                <input onChange={handleCategory} checked={category === 'vendor'} type="radio" id="vendor" className="visually-hidden" name="category" value="vendor" />
                <label htmlFor="vendor">Vendor</label>
              </Category>
            </div>
            <div className="mt-12 flex mb-2">
              <input type="checkbox" className="mr-2 mt-1" required name="newsletter" id="newsletter" />
              <label htmlFor="newsletter" className="inline-block text-xs">Yes! Send me genuinely useful emails every now and then to help me get the most out of +234Homes.</label>
            </div>
            <div className="flex">
              <input type="checkbox" className="mr-2 mt-1" required name="termsandconditions" id="termsandconditions" />
              <label htmlFor="termsandconditions" className="inline-block text-xs">Yes, I understand and agree to the <span className="agreement">+234Homes Terms of Service,</span> including the <span className="agreement">User Agreement</span> and <span>Privacy Policy.</span></label>
            </div>
            <div className="text-center continue-email mt-8">
              <button type="submit" className="text-center w-full text-white my-3">Create My Account</button>
            </div>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default CompleteProfile
