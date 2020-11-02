import React from 'react';
import styled from 'styled-components';

import withApollo from '../../lib/withApollo';
import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import Footer from './Footer';
import Editor from './Editor';

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
    /* padding: 1rem; */
    overflow: hidden;
  }
`;

const AddStory = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto mb-16">
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
          <section className="main w-3/4">
            <Editor />
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(AddStory);
