import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import SignUpNavbar from '../Organisms/SignUpNavbar';
import Footer from './Footer';
import useCountries from '../../hooks/useCountries';
import useProfile from '../../hooks/useProfile';
import { useLocalStorage } from '../../hooks/storage';


interface Props {
  imgUrl?: string;
}

const MainWrapper = styled.div`
  .signup-nav {
    height: 7.7244rem;
  }
`;

const Wrapper = styled.section<Props>`
  background: url('${({ imgUrl }) => imgUrl}'),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .signup {
    margin: 0;
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
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  input::placeholder {
    text-align: center;
  }
  .reset-intro {
    font-size: 0.7rem;
  }
  .social-icons {
    padding: 0.8rem 0.5rem;
  }
`;

const ForgotPassword: React.FC<Props> = () => {
  const { dialCodes } = useCountries();
  const { initiateResetPassword, initiateResetPasswordLoading: loading } = useProfile();
  const theme = useContext(ThemeContext);
  const { setData } = useLocalStorage('resetPassword', {});

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="forgotPassword" />
      </div>
      <Wrapper
        className="flex justify-center py-16"
        imgUrl="/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png"
      >
        <div className="w-full signup bg-white rounded pb-16">
          <h1 className="text-2xl font-semibold text-center my-10">Forgot Your Password?</h1>
          <hr className="mb-4" />
          <p className="px-6 text-center mb-10 text-sm">Enter your phone number and we'll send you a code to reset your password.</p>
          <Formik
            initialValues={{
              phoneNumber: '',
              dialCode: '+234',
              // password: '',
            }}
            onSubmit={({ dialCode, ...values }) => {
              const resetData = {
                phoneNumber: dialCode + values.phoneNumber
              }
              setData(resetData);


              initiateResetPassword(dialCode + values.phoneNumber);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="px-8 mt-auto">
                <div className="border border-gray-500 form-wrap h-12 pr-4 justify-between flex items-center overflow-hidden">
                  <div className="input-addon pr-4">
                    <select
                      value={values.dialCode}
                      name="dialCode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      {dialCodes.map((dialCode) => (
                        <option key={`dialCode${dialCode}`} value={dialCode}>
                          {dialCode}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="appearance-none outline-none w-full h-full leading-tight pr-4"
                    name="phoneNumber"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    required
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="text-center form-wrap signIn mt-8 h-12">
                  <button
                    type="submit"
                    className="flex items-center justify-center font-semibold uppercase w-full h-full text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader type="ThreeDots" color={theme.colors.white} height={20} width={60} />
                    ) : (
                      'Continue'
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
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
  );
};

export default ForgotPassword;
