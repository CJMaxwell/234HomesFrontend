import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Footer from './Footer';

const Main = styled.section`
  .progression.active {
    display: inline-block;
    height: 1.356rem;
    width: 1.356rem;
    background-color: ${({ theme }) => theme.colors.orange1};
    color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    text-align: center;
  }
  .progression.active + span {
    color: ${({ theme }) => theme.colors.orange1};
    
  }
  .progression {
    display: inline-block;
    height: 1.356rem;
    width: 1.356rem;
    background-color: ${({ theme }) => theme.colors.white};
    /* color: #FFFFFF; */
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    text-align: center;
  }

  .leading-progression {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
  .direction-arrow {
    padding-right: 0.875rem;
  }
  ul {
    color: ${({ theme }) => theme.colors.gray11};
  }
  .heading {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 1.3125rem;
  }
  .general {
    color: ${({ theme }) => theme.colors.gray11};
  }
  .input-label {
    font-size: 0.7rem;
  }
  .input-wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray17};
  }
  input::placeholder, textarea::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 400;
  }
  textarea::placeholder {
    padding-top: 1rem;
  }
  .without-placeholder {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 400;
  }
  .custom-file-input {
    color: transparent;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: url('/img/ar-camera.svg');
    /* color: black; */
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.gray11};
    height: 5rem;
    width: 5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray11};
    border-radius: 50%;
    text-align: center;
    padding-top: 1rem;
    cursor: pointer;
    /* outline: none; */
    
    /* -webkit-user-select: none; */
    /* background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3); */
    /* border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px; */
    /* white-space: nowrap; */
    
    /* text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt; */
  }
`;

const Desc = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray17};

`;

const Continue = styled.button`
  background-color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  width: 9.5rem;
  height: 2.57rem;
`;


const PersonalProfile = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <ProfileNavbar />
      <hr />
      <Main className="container mx-auto mb-24">
        <ul className="flex text-sm py-2">
          <li className="flex items-center">
            <span className="progression active">1</span>
            <span className="leading-progression">Personal Profile</span>
            <span className="direction-arrow">
              <img src="/img/direction.svg" alt="Direction arrow" />
            </span>
          </li>
          <li className="flex items-center">
            <span className="progression">2</span>
            <span className="leading-progression"> Professional Info</span>
            <span className="direction-arrow">
              <img src="/img/direction.svg" alt="Direction arrow" />
            </span>
          </li>
          <li>
            <span className="progression">3</span>
            <span className="leading-progression">Payment Info</span>
          </li>
        </ul>
        <hr />
        <div className="mt-20 px-64">
          <h1 className="heading font-semibold pb-4">Personal Info</h1>
          <p className="general pb-6">Tell us a bit about yourself. This information will appear on your public profile, <br />
          so that potential buyers can get to know you better.</p>
          <hr />
          <form className="w-full mt-12">
            <div className="flex">
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label className="block input-label general uppercase text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                  First Name <span className="text-red-600">&#42;</span>
                </label>
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="First Name" aria-label="First Name" />
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label className="block input-label general uppercase text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  Last Name <span className="text-red-600">&#42;</span>
                </label>
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="Last Name" aria-label="Last Name" />
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label className="block input-label general uppercase text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                  Email <span className="text-red-600">&#42;</span>
                </label>
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="email" required placeholder="Email" aria-label="email" />
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label className="block input-label general uppercase text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  Phone <span className="text-red-600">&#42;</span>
                </label>
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="Phone Number" aria-label="Phone number" />
                </div>
              </div>
            </div>
            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3">
                {/* <label className="block uppercase text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  Address<span className="text-red-600">&#42;</span>
                </label> */}
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="Address" aria-label="Address" />
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                {/* <label className="block uppercase text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                  City<span className="text-red-600">&#42;</span>
                </label> */}
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="City" aria-label="email" />
                </div>
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                {/* <label className="block uppercase text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  State<span className="text-red-600">&#42;</span>
                </label> */}
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="State" aria-label="Phone number" />
                </div>
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                {/* <label className="block uppercase text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  LGA<span className="text-red-600">&#42;</span>
                </label> */}
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="text" required placeholder="LGA" aria-label="Phone number" />
                </div>
              </div>
            </div>
            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3 flex">
                <label className="block mr-10 without-placeholder text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  Profile Photo <span className="text-red-600">&#42;</span>
                </label>
                <div>
                  <input className="custom-file-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" type="file" accept="image/*" required placeholder="Address" aria-label="Address" />
                </div>
              </div>
            </div>
            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3">
                <label className="block without-placeholder text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                  Description <span className="text-red-600">&#42;</span>
                </label>
                <Desc className="rounded-sm h-32">
                  <textarea name="description" id="description" className="w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none" placeholder="Share a bit about your work experience, cool projects you’ve completed and your area of expertise."></textarea>
                </Desc>
              </div>
            </div>
            <div className="w-full flex justify-end text-center mt-16">
              <Continue type="submit" className="mx-3 text-center text-white">Continue</Continue>
            </div>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default PersonalProfile
