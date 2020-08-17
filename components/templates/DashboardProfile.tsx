import React from 'react';
import styled from 'styled-components';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import ProfileSidebar from '../Organisms/ProfileSidebar';
import Footer from './Footer';

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
    margin: 10px;
    padding: 5px;

  }
  fieldset {
    border: 1px solid gray;
  }
  .section-wrap {
    margin-bottom: 7.1rem;
  }
  `;

const DashboardProfile = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto section-wrap">
        <Offering />
        <ul className="breadcrumb flex items-center uppercase">
          <li>Home</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Dashboard</li>
        </ul>
        <section className="flex justify-between">
          <section className="w-1/4">
            <ProfileSidebar />
          </section>
          <section className="main w-3/4">
            <h1>Personal Info</h1>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/2">
                <legend>First Name</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/2">
                <legend>Last Name</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/2">
                <legend>Email</legend>
                <p>johndoe@gmail.com</p>
              </fieldset>
              <fieldset className="w-1/2">
                <legend>Phone Number</legend>
                <p>2348123785612</p>
              </fieldset>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-full">
                <legend>Address</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/2">
                <legend>City</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/2">
                <legend>State</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-full">
                <legend>Profile</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <h1>Professional Info</h1>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/2">
                <legend>Occupation</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/2">
                <legend>Experience</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section>
              <h1>Key skills</h1>
            </section>
            <section>
              <h1>Education</h1>
              <button type="button">Add new</button>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/2">
                <legend>Country Of College/University</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/2">
                <legend>College/University</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/3">
                <legend>Title</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/3">
                <legend>Major</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/3">
                <legend>Year</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section>
              <h1>Certifications</h1>
              <button type="button">Add new</button>
            </section>
            <section className="flex items-center justify-between">
              <fieldset className="w-1/3">
                <legend>Certificate Awarded</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/3">
                <legend>Certified From</legend>
                <p>Ikechukwu</p>
              </fieldset>
              <fieldset className="w-1/3">
                <legend>Year</legend>
                <p>Ikechukwu</p>
              </fieldset>
            </section>
            <section className="flex justify-end items-center">
              <button type="button" className="uppercase">Update profile</button>
            </section>
          </section>
        </section>
      </div>

      <Footer />
    </Wrapper>
  )
}

export default DashboardProfile
