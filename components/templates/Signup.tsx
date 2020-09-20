import React, { useContext } from 'react';
import Router from 'next/router';
import styled, { ThemeContext } from 'styled-components';
import { notify } from 'react-notify-toast';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';
import Tippy from '@tippyjs/react';

import useCountries from '../../hooks/useCountries';
import useSignup from '../../hooks/useAuth';
import SignUpNavbar from '../Organisms/SignUpNavbar';
import Footer from './Footer';

interface Props {
  imgUrl?: string;
}

const MainWrapper = styled.div`
  .signup-nav {
    height: 7.7244rem;
  }
`;
const Wrapper = styled.section<Props>`
  background: url('${({ imgUrl }) => imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .signup {
    margin: 0;
    max-width: 50rem;
    /* max-height: 36.7rem; */
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
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600
  }
  input::placeholder {
    text-align: center;
  }
  .continue-btn {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }


  .account-type {
    /* padding-top: 2.85rem; */
    /* font-weight: 600; */
    /* font-size: 1.2rem; */
    /* padding-bottom: 2.85rem; */
  }
  .next {
    margin-top: 3.1rem;
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    border-radius: 44px;
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.8rem;
    padding: 0.85rem 2.75rem;
  }
  li.acc-type {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 10px;
    padding: 1.75rem;
  }
  li.acc-type.active {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    background-color: ${({ theme }) => theme.colors.orange1};
    border-radius: 10px;
    padding: 1.75rem;
    color: ${({ theme }) => theme.colors.white};
  }
  .acc-type {
    margin-right: 1.35rem;
    width: 10rem;
  }
  .selection {
    padding-top: 0.85rem;
    font-size: 0.8rem;
  }

  .profile-title,
  .profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .profile-label {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
  .fieldset-input {
    padding: 0.7rem 1rem 1rem 1rem;
  }
  legend {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    overflow: hidden;
  }
  .input-addon {
    padding-left: 0.95rem;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600
  }
`;

const Signup: React.FC<Props> = () => {
  const theme = useContext(ThemeContext);
  const { dialCodes } = useCountries();
  const { sendPhoneVerification, sendPhoneVerificationLoading: loading } = useSignup();

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="register" />
      </div>
      <Wrapper
        className="flex justify-center py-16"
        imgUrl="/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png"
      >
        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center my-8">Get Your Free Account</h1>
          <hr />
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              businessName: '',
              accountType: 'individual',
              phoneNumber: '',
              email: '',
              city: '',
              state: '',
              dialCode: '+234',
            }}
            onSubmit={(values: { [key: string]: string }) => {
              const form = Object.keys(values).reduce(
                (acc: { [key: string]: string }, key: string) => {
                  if (values[key]) {
                    acc[key] = values[key];
                  }
                  return acc;
                },
                {},
              );

              const code = btoa(JSON.stringify(form));

              sendPhoneVerification({
                variables: {
                  phoneNumber: `${values.dialCode}${values.phoneNumber}`,
                },
              })
                .then(() => {
                  Router.push(
                    // `/verify?phone=${encodeURIComponent(values.dialCode + values.phoneNumber)}`,
                    `/verify?code=${code}`,
                  );
                })
                .catch((err) => {
                  notify.show(err.graphQLErrors?.[0].message, 'error');
                });
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit} className="px-8">
                <section className="main">
                  <h1 className="account-type text-center py-4">Select Preferred Account Type</h1>
                  <ul className="flex justify-center items-center">
                    <Tippy content="An Individual user is just a viewer on our website. If you have a skill or sell a product, then consider the Professional or Vendor option.">
                      <li
                        className={`acc-type cursor-pointer ${
                          values.accountType === 'individual' && 'active'
                        }`}
                        onClick={() => {
                          setFieldValue('accountType', 'individual');
                        }}
                        aria-hidden="true"
                      >
                        <span>
                          <img src="/img/dashboard/dashboarduser.svg" alt="User" />
                        </span>
                        <a className="selection">Individual User</a>
                      </li>
                    </Tippy>
                    <Tippy content="Tell us about yourself and your projects. We will show it to the whole world.">
                      <li
                        className={`acc-type cursor-pointer ${
                          values.accountType === 'professional' && 'active'
                        }`}
                        onClick={() => {
                          setFieldValue('accountType', 'professional');
                        }}
                        aria-hidden="true"
                      >
                        <span>
                          <img src="/img/dashboard/work-white.svg" alt="Professional" />
                        </span>
                        <a className="selection">Professional</a>
                      </li>
                    </Tippy>
                    <Tippy content="Sell products? Let's help you reach the right audience.">
                      <li
                        className={`acc-type cursor-pointer ${
                          values.accountType === 'vendor' && 'active'
                        }`}
                        onClick={() => {
                          setFieldValue('accountType', 'vendor');
                        }}
                        aria-hidden="true"
                      >
                        <span>
                          <img src="/img/dashboard/dashboardbox.svg" alt="Vendor" />
                        </span>
                        <a className="selection">Vendor</a>
                      </li>
                    </Tippy>
                  </ul>
                </section>

                {values.accountType !== 'vendor' && (
                  <section className="flex items-center py-4 justify-between">
                    <fieldset className="w-1/2 mr-6">
                      <legend className="profile-label">First Name</legend>
                      <input
                        className="fieldset-input profile-desc w-full outline-none"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        required
                      />
                    </fieldset>
                    <fieldset className="w-1/2">
                      <legend className="profile-label">Last Name</legend>
                      <input
                        className="fieldset-input profile-desc w-full outline-none"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        required
                      />
                    </fieldset>
                  </section>
                )}

                {values.accountType === 'vendor' && (
                  <section className="flex items-center justify-between mt-4">
                    <fieldset className="w-full">
                      <legend className="profile-label">Business Name</legend>
                      <input
                        className="fieldset-input profile-desc w-full outline-none"
                        name="businessName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.businessName}
                        required
                      />
                    </fieldset>
                  </section>
                )}
                <section className="flex items-center justify-between py-4">
                  <fieldset className="w-1/2 mr-6">
                    <legend className="profile-label">Email</legend>
                    <input
                      className="fieldset-input profile-desc w-full outline-none"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </fieldset>
                  <fieldset className="w-1/2">
                    <legend className="profile-label">Phone Number</legend>
                    <section className="flex items-center">
                      <div className="input-addon pr-4">
                        <select
                          value={values.dialCode}
                          name="dialCode"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {dialCodes.map((dialCode) => (
                            <option key={`dialCode${dialCode}`} value={dialCode}>
                              {dialCode}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        className="fieldset-input profile-desc w-full outline-none"
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        required
                      />
                    </section>
                  </fieldset>
                </section>
                <section className="flex items-center justify-between">
                  <fieldset className="w-1/2 mr-6">
                    <legend className="profile-label">City</legend>
                    <select
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="city"
                      value={values.city}
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Lekki">Lekki</option>
                      <option value="Ikoyi">Ikoyi</option>
                      <option value="Mile 12">Mile 12</option>
                      <option value="Trade Fair">Trade Fair</option>
                    </select>
                  </fieldset>
                  <fieldset className="w-1/2">
                    <legend className="profile-label">State</legend>
                    <select
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="state"
                      value={values.state}
                      required
                    >
                      <option value="">Select state</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Enugu">Enugu</option>
                      <option value="Anambra">Anambra</option>
                    </select>
                  </fieldset>
                </section>
                <section className="flex justify-center">
                  <section className="text-center w-3/4 form-wrap bg-signup mt-6 h-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="font-semibold uppercase w-full h-full text-white flex items-center justify-center"
                    >
                      {loading ? (
                        <Loader
                          type="ThreeDots"
                          color={theme.colors.white}
                          height={20}
                          width={60}
                        />
                      ) : (
                        'Send me Code'
                      )}
                    </button>
                  </section>
                </section>
              </form>
            )}
          </Formik>
          <div className="px-8">
            <div className="text-center my-8 flex items-center">
              <hr className="w-1/2" />
              <span className="px-1">or</span>
              <hr className="w-1/2" />
            </div>
            <section className="flex justify-center">
              <div className="mt-4 w-3/4 h-12 flex items-center border border-gray-500 form-wrap">
                <div className="input-addon">
                  <img
                    src="/img/email-icon.svg"
                    className="inline-block h-full w-12 p-2 bg-white"
                    alt="Sign up with Google"
                  />
                </div>
                <button type="button" className="continue-btn h-full w-full outline-none">
                  Continue with Email
                </button>
              </div>
            </section>
            <section className="flex justify-center my-2">
              <div className="mt-4 w-3/4 h-12 flex items-center border border-gray-500 form-wrap">
                <div className="input-addon">
                  <img
                    src="/img/google-logo.svg"
                    className="inline-block h-full w-12 p-2 bg-white"
                    alt="Sign up with Google"
                  />
                </div>
                <button type="button" className="continue-btn h-full w-full outline-none">
                  Continue with Google
                </button>
              </div>
            </section>

            <section className="flex justify-center">
              <div className="mt-4 w-3/4 h-12 flex items-center border border-gray-500 form-wrap">
                <div className="input-addon">
                  <img
                    src="/img/facebook-logo.svg"
                    className="inline-block h-full w-12 p-2 bg-white"
                    alt="Sign up with Google"
                  />
                </div>
                <button type="button" className="continue-btn h-full w-full outline-none">
                  Continue with Facebook
                </button>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  );
};

export default Signup;
