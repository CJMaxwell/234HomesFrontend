import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';


import CTA from '../atoms/CTA';
import useProfile from '../../hooks/useProfile';

const Wrapper = styled.section`
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .main {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    margin-left: 1.7rem;
    padding: 0 2.65rem;
  }
  legend {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
  }
  .section-wrap {
    margin-bottom: 7.1rem;
  }
  .fieldset-input {
    padding: 0.7rem 1rem 1rem 1rem;
  }
  .profile-title {
    text-transform: uppercase;
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
  .add-new {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.orange1};
    opacity: 0.5;
  }
  .cta {
    margin-top: 2.75rem;
    margin-bottom: 5.25rem;
  }
`;

const IndividualProfileUpdate = () => {
  const { profile, updateProfile, updateProfileLoading: loading } = useProfile();
  const theme = useContext(ThemeContext);

  return (

    <Formik
      onSubmit={(values) => {
        updateProfile({
          variables: {
            input: values,
          },
        });
      }}
      enableReinitialize
      initialValues={{
        firstName: profile?.firstName || '',
        lastName: profile?.lastName || '',
        address: profile?.address || '',
        city: profile?.city || '',
        state: profile?.state || '',
        bio: profile?.bio || '',

      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form className="main w-3/4" onSubmit={handleSubmit}>
          <h1 className="py-10 profile-title">Personal Info</h1>
          <section className="flex items-center justify-between">
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
          <section className="flex items-center justify-between pt-6">
            <fieldset className="w-1/2 mr-6">
              <legend className="profile-label">Email</legend>
              <input
                className="fieldset-input profile-desc w-full outline-none"
                name="email"
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={profile?.email}
              />
            </fieldset>
            <fieldset className="w-1/2">
              <legend className="profile-label">Phone Number</legend>
              <input
                className="fieldset-input profile-desc w-full outline-none"
                name="phoneNumber"
                // onChange={handleChange}
                // onBlur={handleBlur}
                readOnly
                value={profile?.phoneNumber}
              />
            </fieldset>
          </section>
          <section className="flex items-center justify-between pt-8">
            <fieldset className="w-full">
              <legend className="profile-label">Address</legend>
              <input
                className="fieldset-input profile-desc w-full outline-none"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
            </fieldset>
          </section>
          <section className="flex items-center justify-between pt-8">
            <fieldset className="w-1/2 mr-6">
              <legend className="profile-label">City</legend>
              <select
                className="fieldset-input profile-desc w-full"
                onChange={handleChange}
                onBlur={handleBlur}
                name="city"
                value={values.city}
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
                className="fieldset-input profile-desc w-full"
                onChange={handleChange}
                onBlur={handleBlur}
                name="state"
                value={values.state}
              >
                <option value="">Select state</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Enugu">Enugu</option>
                <option value="Anambra">Anambra</option>
              </select>
            </fieldset>
          </section>
          <section className="flex items-center justify-between pt-8">
            <fieldset className="w-full">
              <legend className="profile-label">Profile</legend>
              <textarea
                onChange={handleChange}
                onBlur={handleBlur}
                name="bio"
                className="fieldset-input profile-desc w-full outline-none"
                value={values.bio}
              />
            </fieldset>
          </section>
          <section className="flex justify-end items-center cta">
            <CTA padding="0.8rem 1.25rem" className="outline-none" disabled={loading}>
              {loading ? (
                <Loader
                  type="ThreeDots"
                  color={theme.colors.orange1}
                  height={20}
                  width={60}
                />
              ) : (
                  'Update Profile'
                )}
            </CTA>
          </section>
        </form>
      )}
    </Formik>

  );
};

export default IndividualProfileUpdate;
