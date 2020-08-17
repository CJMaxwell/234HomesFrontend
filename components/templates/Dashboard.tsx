import React from 'react';
import styled from 'styled-components';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardSideBar from '../Organisms/DashboardSideBar';
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
    height: 27.8rem;
  }
  .main-dashboard-desc {
    padding-left: 4.55rem;
    padding-right: 4.55rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.8rem;
  }
  .section-wrap {
    margin-bottom: 6.4rem;
  }
  .temp-access {
    padding-top: 5.85rem;
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 1.55rem;
  }
  .update-profile {
    margin-top: 3.85rem;
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    border-radius: 32px;
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.8rem;
    padding: 0.85rem 3rem;
  }
`;

const Dashboard = () => {
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
            <DashboardSideBar />
          </section>
          <section className="main text-center w-3/4">
            <h1 className="temp-access">
              Your account access is temporary limited
            </h1>
            <p className="main-dashboard-desc flex justify-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </p>
            <button type="button" className="update-profile">Update Your Profile</button>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;
