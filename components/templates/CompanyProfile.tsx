import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Footer from './Footer';
import Direction from '../atoms/Direction';

const Main = styled.section`
  .progression.active {
    display: inline-block;
    height: 1.356rem;
    width: 1.356rem;
    background-color: ${({ theme }) => theme.colors.orange1};
    color: #ffffff;
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
    font-size: 0.8rem;
  }

  input::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 600;
  }

  .input-wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray17};
  }

  .without-placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 600;
  }
  textarea::placeholder {
    padding-top: 1rem;
    font-size: 12px;
  }
`;

const Continue = styled.button`
  background-color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  width: 9.5rem;
  height: 2.57rem;
`;

const Desc = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray17};
`;

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  Router.push('/single-vendor');
};

const CompanyProfile = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <ProfileNavbar />
      <hr />
      <Main className="container  general-padding mx-auto mb-24">
        <ul className="flex text-sm py-2">
          <li className="flex items-center">
            <span className="progression active">1</span>
            <span className="leading-progression">Personal Profile</span>
            <span className="direction-arrow">
              <Direction />
            </span>
          </li>
          <li className="flex items-center">
            <span className="progression active">2</span>
            <span className="leading-progression"> Business Info</span>
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
          <h1 className="heading font-semibold pb-4">Business Information</h1>
          <p className="general pb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />
            eirmod tempor invidunt ut labore et dolore.
          </p>
          <hr />
          <form className="w-full mt-12" onSubmit={handleSubmit}>
            <div className="w-full mb-6 md:mb-0 mt-8">
              <div>
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="Company Name"
                    aria-label="Company Name"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mb-6 md:mb-0 mt-8">
              <div>
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="Company Address"
                    aria-label="Company Address"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-1/3 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="City"
                    aria-label="email"
                  />
                </div>
              </div>
              <div className="w-1/3 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="State"
                    aria-label="Phone number"
                  />
                </div>
              </div>
              <div className="w-1/3 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="LGA"
                    aria-label="Phone number"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="Business Number"
                    aria-label="Business Number"
                  />
                </div>
              </div>
              <div className="w-1/2 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="Business Email"
                    aria-label="Business Email"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="Business Type"
                    aria-label="Business Type"
                  />
                </div>
              </div>
              <div className="w-1/2 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none"
                    type="text"
                    required
                    placeholder="Business Category"
                    aria-label="Business Category"
                  />
                </div>
              </div>
            </div>

            <div className="w-full mb-6 md:mb-0 mt-8">
              <div>
                <label
                  className="block without-placeholder text-gray-700 text-xs  mb-2"
                  htmlFor="grid-first-name"
                >
                  Description <span className="text-red-600">&#42;</span>
                </label>
                <Desc className="rounded-md overflow-hidden h-32">
                  <textarea
                    name="description"
                    id="description"
                    className="w-full text-gray-700 mr-3 pb-2 px-2 leading-tight focus:outline-none"
                    placeholder="Share a bit about your work experience, cool projects you’ve completed and your area of expertise."
                  />
                </Desc>
              </div>
            </div>

            <div className="w-full flex justify-end text-center mt-16">
              <Continue type="submit" className="mx-3 text-center font-semibold text-white">
                Continue
              </Continue>
            </div>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default CompanyProfile;
