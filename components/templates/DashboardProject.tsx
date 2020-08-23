import React from 'react';
import styled from 'styled-components';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardProjectCard from '../Organisms/DashboardProjectCard';
import ProfileSidebar from '../Organisms/ProfileSidebar';
import AddNewProject from '../atoms/AddNewProject';
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
  .section-wrap {
    margin-bottom: 6.6rem;
  }
`;



const DashboardProject = () => {
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
            <h1 className="py-10 profile-title">Personal Info</h1>
            <section className="grid grid-cols-3 gap-4">
              <DashboardProjectCard imgUrl="/img/projects/bathroom-cabinet-candles-faucet.png" title="consetetur elitr" tag=" Bathroom" location=" | Abuja" />
              <DashboardProjectCard imgUrl="/img/projects/pink-and-purple-wallpaper.png" title="How to Put an Awesome" tag="Wallpaper" />
              <DashboardProjectCard imgUrl="/img/projects/AH.png" title="Lorem ipsum dolor" tag=" Living Room" location=" | Lagos" />
              <DashboardProjectCard imgUrl="/img/projects/person-holding-black-pen.png" title="Lorem ipsum dolor" tag=" Living Room" location=" | Kaduna" />
              <DashboardProjectCard imgUrl="/img/projects/chairs-coffee-table-comfortable-couch.png" title="Lorem ipsum dolor" tag=" Living Room" location=" | Lagos" />
              <AddNewProject />
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default DashboardProject
