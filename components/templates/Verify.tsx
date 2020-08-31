import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';
import dynamic from 'next/dynamic';

import SignUpNavbar from '../Organisms/SignUpNavbar';
import Footer from './Footer';
import phoneSignupSchema from '../../schema/phoneSignupSchema';
import useSignUp from '../../hooks/useAuth';

interface Props {
  phone?: string;
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

  .code-input {
    display: flex !important;
    justify-content: space-between !important;
    width: 100% !important;
  }

  .signup {
    margin: 0;
    max-width: 28.9rem;
    /* max-height: 33.5rem; */
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
  .verification-code {
    border-radius: 9px;
  }
  .enter-code {
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.8rem;

    span {
      color: ${({ theme }) => theme.colors.orange1};
    }
  }
`;

const ErrorMsg = styled.span`
  font-size: 10px;
  color: red;
  position: absolute;
  width: 100%;
  top: -21px;
  text-align: center;
  z-index: 999;
`;

const ReactCodeInput = dynamic(import('react-code-input'));

const Verify: React.FC<Props> = ({ phone }) => {
  const theme = useContext(ThemeContext);
  const { registerByPhone, registerByPhoneLoading: loading } = useSignUp();

  return (
    <MainWrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="signup-nav">
        <SignUpNavbar type="register" />
      </div>
      <Wrapper
        imgUrl="/img/square-glass-top-coffee-table-and-two-white-leather-2-seat.png"
        className="flex items-center justify-center py-20"
      >
        <div className="w-full signup bg-white rounded pb-10">
          <h1 className="text-2xl font-semibold text-center pt-10 mb-4">Verification</h1>
          <hr />
          <p className="enter-code px-8 text-center my-12">
            Please enter the verification code sent to your phone number.
            <span>
              <a>Didn’t receive it?</a>
            </span>
          </p>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
              code: '',
            }}
            onSubmit={(values) => {
              registerByPhone({
                variables: {
                  input: {
                    phoneNumber: phone,
                    password: values.password,
                    code: values.code,
                  },
                },
              });
            }}
            validationSchema={phoneSignupSchema}
            validateOnBlur
            validateOnChange={false}
          >
            {({ handleBlur, handleChange, handleSubmit, values, errors, setFieldValue }) => (
              <form onSubmit={handleSubmit} className="px-8">
                <ReactCodeInput
                  className="code-input"
                  inputStyle={{
                    fontFamily: 'Montserrat',
                    margin: '4px',
                    MozAppearance: 'textfield',
                    width: '5rem',
                    borderRadius: '9px',
                    fontSize: '0.8rem',
                    height: '2.5rem',
                    border: '1px solid #a0aec0',
                    outline: 'none',
                    textAlign: 'center',
                  }}
                  type="number"
                  fields={4}
                  name="code"
                  value={values.code}
                  onChange={(value) => {
                    setFieldValue('code', value, true);
                  }}
                  autoFocus
                  inputMode="numeric"
                />

                <div className="border border-gray-500 form-wrap mt-12 h-12 justify-between pr-4 flex items-center relative mb-8">
                  {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}

                  <div className="input-addon pr-4">
                    <img
                      src="/img/password-phone.svg"
                      className="inline-block w-4 h-6"
                      alt="Sign up with phone"
                    />
                  </div>
                  <input
                    className="appearance-none outline-none w-full h-full leading-tight pr-4 form-wrap"
                    id="phone"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                    placeholder="Create Password"
                  />
                </div>

                <div className="border border-gray-500 mt-4 form-wrap h-12 justify-between pr-4 flex items-center relative  mb-8">
                  {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword}</ErrorMsg>}

                  <div className="input-addon pr-4">
                    <img
                      src="/img/password-phone.svg"
                      className="inline-block w-4 h-6"
                      alt="Sign up with phone"
                    />
                  </div>

                  <input
                    className="appearance-none outline-none w-full h-full leading-tight pr-4 form-wrap"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    required
                    placeholder="Repeat Password"
                  />
                </div>
                <div className="text-center form-wrap bg-signup mt-4 h-12">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex justify-center items-center font-semibold uppercase w-full h-full text-white"
                  >
                    {loading ? (
                      <Loader type="ThreeDots" color={theme.colors.white} height={20} width={60} />
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Wrapper>
      <Footer />
    </MainWrapper>
  );
};

export default Verify;
