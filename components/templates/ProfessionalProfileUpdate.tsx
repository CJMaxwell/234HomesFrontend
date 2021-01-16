import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import CTA from '../atoms/CTA';
import Skill from '../atoms/Skill';
import Footer from './Footer';
import useProfile from '../../hooks/useProfile';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import useCountries from '../../hooks/useCountries';

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

const ProfessionalProfileUpdate = () => {
  const {
    profile,
    updateProfile,
    updateProfileLoading: loading,
    uploadBanner,
    bannerLoading,
  } = useProfile();
  const theme = useContext(ThemeContext);
  const { countries } = useCountries();

  return (
    <Formik
      onSubmit={(values) => {
        updateProfile({
          variables: {
            input: {
              ...values,
              experienceLevel: Number(values.experienceLevel),
            },
          },
        });
      }}
      enableReinitialize
      initialValues={{
        firstName: profile?.firstName || '',
        lastName: profile?.lastName || '',
        website: profile?.website || '',
        // email: profile?.email || '',
        // phoneNumber: profile?.phoneNumber || '',
        address: profile?.address || '',
        city: profile?.city || '',
        state: profile?.state || '',
        bio: profile?.bio || '',
        occupation: profile?.occupation || '',
        experienceLevel: profile?.experienceLevel || 0,
        // education: profile?.education || [],
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
                value={profile?.phoneNumber}
              />
            </fieldset>
          </section>
          <section className="flex items-center justify-between pt-8">
            <fieldset className="w-full">
              <legend className="profile-label">Website</legend>
              <input
                className="fieldset-input profile-desc w-full outline-none"
                name="website"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.website}
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
          <h1 className="prof-info mt-16 mb-8 profile-title">Professional Info</h1>
          <section className="flex items-center justify-between">
            <fieldset className="w-1/2 mr-6">
              <legend className="profile-label">Occupation</legend>
              <select
                className="fieldset-input profile-desc w-full outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                name="occupation"
                value={values.occupation}
              >
                <option value="">Select Occupation</option>
                {['Interior Designer', 'Architect', 'Creative Director'].map((job) => (
                  <option value={job} key={job}>
                    {job}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="w-1/2">
              <legend className="profile-label">Experience</legend>
              <select
                className="fieldset-input profile-desc w-full outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                name="experienceLevel"
                value={values.experienceLevel}
              >
                <option value="">Experience level</option>
                {['1 year', '2 years', '3 years', '4 years', '5 years'].map((year, index) => (
                  <option value={index + 1} key={year}>
                    {year}
                  </option>
                ))}
              </select>
            </fieldset>
          </section>
          <section>
            <section className="flex justify-between items-center mt-8 mb-4">
              <h1 className="profile-label">Key skills</h1>
              <button className="add-new" type="button">
                Add new
              </button>
            </section>
            <Skill>Interior Design</Skill>
            <Skill>Decoration</Skill>
            <Skill>Painting</Skill>
            <Skill>Lighting</Skill>
            <Skill>Living Room</Skill>
            <Skill>Bathroom</Skill>
          </section>
          <section className="educ-info flex justify-between items-center mt-8 mb-4">
            <h1 className="profile-label">Education</h1>
            <button className="add-new" type="button">
              Add new
            </button>
          </section>
          <section className="flex items-center justify-between">
            <fieldset className="w-1/2 mr-6">
              <legend className="profile-label">Country Of College/University</legend>
              <select className="fieldset-input profile-desc w-full">
                {countries.map(({ name, code }) => (
                  <option value={code} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="w-1/2">
              <legend className="profile-label">College/University</legend>
              <select className="fieldset-input profile-desc w-full">
                <option value="">Synergy University, Moscow</option>
              </select>
            </fieldset>
          </section>
          <section className="flex items-center justify-between pt-8">
            <fieldset className="w-1/3 mr-6">
              <legend className="profile-label">Title</legend>
              <select className="fieldset-input profile-desc w-full">
                <option value="">Bachelor of Arts</option>
              </select>
            </fieldset>
            <fieldset className="w-1/3 mr-6">
              <legend className="profile-label">Major</legend>
              <select className="fieldset-input profile-desc w-full">
                <option value="">Architecture</option>
              </select>
            </fieldset>
            <fieldset className="w-1/3">
              <legend className="profile-label">Year</legend>
              <select className="fieldset-input profile-desc w-full">
                <option value="">2016</option>
              </select>
            </fieldset>
          </section>
          <section className=" flex justify-between items-center mt-8 mb-4">
            <h1 className="profile-label">Certifications</h1>
            <button className="add-new" type="button">
              Add new
            </button>
          </section>
          <section className="flex items-center justify-between">
            <fieldset className="w-1/3 mr-6">
              <legend className="profile-label">Certificate Awarded</legend>
              <p className="fieldset-input profile-desc">Social Media Management</p>
            </fieldset>
            <fieldset className="w-1/3 mr-6">
              <legend className="profile-label">Certified From</legend>
              <p className="fieldset-input profile-desc">Social Media Management</p>
            </fieldset>
            <fieldset className="w-1/3">
              <legend className="profile-label">Year</legend>
              <select className="fieldset-input profile-desc w-full">
                <option value="">2016</option>
              </select>
            </fieldset>
          </section>
          <section className="upload-section relative mt-8">
            <input
              className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
              name="file"
              id="file"
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                uploadBanner(event.target.files?.[0]);
              }}
              type="file"
            />
            <section className="text-center">
              <h1 className="resolution">High Resolution Image</h1>
              <p className="img-type">PNG &amp; JPEGS 1200 px X 680 px</p>
            </section>
            <section className="flex justify-center items-center pt-20">
              <img src="/img/cloud-computing.svg" className="text-center" alt="Upload" />
            </section>
            <section className="w-full text-center pt-4">
              <h1 className="drag-and-drop">Drag and drop an images</h1>
              <p>
                Or <a className="browse">browse</a> to choose a file
              </p>
            </section>
          </section>
          <section className="flex justify-end items-center cta">
            {/* <button type="button" className="uppercase">Update profile</button> */}
            <CTA type="submit" padding="0.8rem 1.25rem" className="outline-none" disabled={loading}>
              {loading ? (
                <Loader type="ThreeDots" color={theme.colors.orange1} height={20} width={60} />
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

export default ProfessionalProfileUpdate;
