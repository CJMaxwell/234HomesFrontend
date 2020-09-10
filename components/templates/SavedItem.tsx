import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import withApollo from '../../lib/withApollo';
import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import SavedItemCard from '../Organisms/SavedItemCard';
import DashboardSideBar from '../Organisms/DashboardSideBar';
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
  .section-wrap {
    margin-bottom: 6.6rem;
  }
`;



const SavedItem = () => {
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
          <section className="main w-3/4">
            <section className="flex items-center justify-between">
              <h1 className="py-10 profile-title font-semibold">Saved Items</h1>
              <CTA onClick={() => Router.push('/create-saved-item')} type="button" className="update-profile focus:outline-none" padding="0.8rem 1.75rem;">
                <img src="/img/add-new.svg" alt="Add new" className="inline-block pr-2" />
                Create a list
              </CTA>
            </section>
            <section className="grid grid-cols-3 gap-4 mb-12">
              <SavedItemCard imgUrl="/img/projects/bathroom-cabinet-candles-faucet.png" title="Uncategorized" tag="Everyone" />
              <SavedItemCard imgUrl="/img/projects/pink-and-purple-wallpaper.png" title="Kitchens Ideas" tag="Everyone" />
              <SavedItemCard imgUrl="/img/saved/francesca-tosolini-w1RE0lBbREo-unsplash.png" title="Bedrooms Ideas" tag="Everyone" />
              <SavedItemCard imgUrl="/img/projects/person-holding-black-pen.png" title="DIY Videos" tag="Private" />
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default withApollo()(SavedItem);
