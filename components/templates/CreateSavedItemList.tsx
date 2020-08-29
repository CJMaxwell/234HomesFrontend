import React from 'react';
import styled from 'styled-components';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import ProfileSidebar from '../Organisms/ProfileSidebar';
import Skill from '../atoms/Skill';
import CTA from '../atoms/CTA';

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
  .profile-title {
    text-transform: uppercase;
  }
  .profile-title,.profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .upload-section {
    border: 1px dashed ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    padding: 2.55rem 5.25rem;
  }
  legend {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;

  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 100px;
    overflow: hidden;
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
  .profile-title,.profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .profile-label {
    color:${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
  textarea::placeholder, input::placeholder {
    color: ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
  }
  .collection li {
    padding-right: 0.7rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .collection {
    margin-top: 0.65rem;
  }
  .resolution {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  .img-type {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .drag-and-drop {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 1.75rem;
  }
  .browse {
    color: ${({ theme }) => theme.colors.orange1};
    font-weight: 600;
  }
`;



const CreateSavedItemList = () => {
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
            <h1 className="py-10 profile-title text-center">Create a list</h1>
            <section className="upload-section">
              <section className="text-center">
                <h1 className="resolution">Upload Cover Picture</h1>
                <p className="img-type">PNG &amp; JPEGS 1200 px X 680 px</p>
              </section>
              <section className="flex justify-center items-center pt-8">
                <img src="/img/cloud-computing.svg" className="text-center" alt="Upload" />
              </section>
              <section className="w-full text-center pt-4">
                <h1 className="drag-and-drop">Drag and drop an images</h1>
                <p>Or <a className="browse">browse</a> to choose a file</p>
              </section>
            </section>
            <section className="flex items-center justify-between pt-8">
              <fieldset className="w-full">
                <legend className="profile-label">Name</legend>
                <input className="fieldset-input overflow-hidden h-10 profile-desc w-full focus:outline-none" placeholder="Lekki Kitchens &amp; Bathrooms" />
              </fieldset>
            </section>
            <section className="flex items-center justify-between pt-8">
              <fieldset className="w-full">
                <legend className="profile-label">Privacy</legend>
                <select className="fieldset-input profile-desc overflow-hidden h-10">
                  <option value="Kitchen">Everyone</option>
                </select>
              </fieldset>
            </section>

            <section className="flex justify-center mt-12 mb-16">
              <CTA type="button" className="update-profile" padding="0.8rem 2.4rem;">Save</CTA>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default CreateSavedItemList
