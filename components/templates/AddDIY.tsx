import React from 'react';
import styled from 'styled-components';

import withApollo from '../../lib/withApollo'
import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardSideBar from '../Organisms/DashboardSideBar';

import Footer from './Footer';
import CTA from '../atoms/CTA';

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
  .profile-title,
  .profile-desc {
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
  textarea::placeholder,
  input::placeholder {
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

const AddDIY = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto section-wrap mb-32">
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
            <DashboardSideBar />
          </section>
          <form className="main w-3/4">
            <h1 className="py-10 profile-title">Add New DIY</h1>
            <section className="upload-section relative">
              <input
                className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
                name="file"
                id="file"
                required
                type="file"
              />
              <section className="flex justify-between items-center">
                <section>
                  <h1 className="resolution">
                    High Resolution <br /> Image
                  </h1>
                  <p className="img-type pt-4">
                    PNG &amp; JPEGS <br />
                    1200 px X 680 px
                  </p>
                </section>
                <section>
                  <h1 className="resolution">
                    High Resolution <br />
                    Video
                  </h1>
                  <p className="img-type pt-4">MP4, &lt; 4 Mins</p>
                </section>
              </section>
              <section className="flex justify-center items-center pt-20">
                <img src="/img/cloud-computing.svg" className="text-center" alt="Upload" />
              </section>
              <section className="w-full text-center">
                <h1 className="drag-and-drop">Drag and drop an images</h1>
                <p>
                  Or <a className="browse pt-4">browse</a> to choose a file
                </p>
              </section>
            </section>
            <section className="flex items-center justify-between pt-8">
              <fieldset className="w-full">
                <legend className="profile-label">Title</legend>
                <input
                  className="fieldset-input profile-desc w-full focus:outline-none"
                  placeholder="Lorem ipsum dolor sit amet sed diam nonumy eirmod"
                />
              </fieldset>
            </section>
            <section className="flex items-center justify-between pt-8">
              <fieldset className="w-full">
                <legend className="profile-label">Category</legend>
                <select className="fieldset-input profile-desc">
                  <option value="Kitchen">Select Category</option>
                  <option value="Kitchen">Kitchen</option>
                </select>
              </fieldset>
            </section>
            <section className="flex items-center justify-between pt-8 mt-4">
              <fieldset className="w-full">
                <legend className="profile-label">Description</legend>
                <textarea
                  className="fieldset-input profile-desc w-full focus:outline-none"
                  placeholder="Tell us about the project…"
                />
              </fieldset>
            </section>
            <section className="flex justify-end mt-12 mb-16">
              <CTA type="submit" className="update-profile" padding="0.8rem 2.4rem;">
                Submit
              </CTA>
            </section>
          </form>

        </section>
      </div>
      <Footer />

    </Wrapper>
  )
}

export default withApollo()(AddDIY);
