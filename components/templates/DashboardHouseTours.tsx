import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import Loader from 'react-loader-spinner';

import withApollo from '../../lib/withApollo';
import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import CTA from '../atoms/CTA';
import Footer from './Footer';

const Wrapper = styled.div`
  .htitle {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 1.75rem;
  }
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
  .product-list {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
  }

  .profile-title {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const DashboardHouseTours = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto mb-48">
        <Offering />
        <ul className="breadcrumb flex items-center">
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

          <section className="product-list w-3/4 px-8">
            <section className="flex items-center justify-between">
              <h1 className="py-10 profile-title">House Tours</h1>
              <CTA
                onClick={() => Router.push('/dashboard/create-house-tours')}
                type="button"
                className="update-profile focus:outline-none"
                padding="0.8rem 1.75rem;"
              >
                <img src="/img/add-new.svg" alt="Add new" className="inline-block pr-2" />
                Add New
              </CTA>
            </section>
            {/* <section className="flex justify-center items-center mt-40">
              <Loader type="TailSpin" color={theme.colors.orange1} height={80} width={80} />
            </section> */}
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(DashboardHouseTours);
