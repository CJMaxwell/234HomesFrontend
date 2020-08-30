import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Offering from '../Organisms/Offering';
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
  .pricing-title {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 1.85rem;
    padding-top: 5.85rem;
  }
  .pricing-desc {
    width: 42.6rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
  .subscription {
    background-color: ${({ theme }) => theme.colors.green1};
    border: 1px solid ${({ theme }) => theme.colors.green1};
    border-radius: 34px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    .offering {
      font-size: 0.8rem;
      padding: 0 3.1rem;

      li {
        margin-top: 1rem;
      }
    }
    .mem-option {
      padding-top: 2.6rem;
      font-size: 1.2rem;
    }
  }
  .pricing {
    font-weight: 600;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.32);
    padding: 32px 0;
    font-size: 1.45rem;
    span {
      font-size: 1rem;
    }
  }

  .free-btn {
    background-color: ${({ theme }) => theme.colors.green2};
    font-size: 0.9rem;
    margin-top: 6.1rem;
    margin-bottom: 2.15rem;
  }
  .premium-btn,
  .plus-btn {
    background-color: ${({ theme }) => theme.colors.orange4};
    font-size: 0.9rem;
    margin-top: 1.7rem;
    margin-bottom: 2.15rem;
  }
  .subscription-group {
    position: absolute;
    top: 18.3rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .plan-intro-gray {
    background-color: ${({ theme }) => theme.colors.gray15};
    height: 33.95rem;
  }
  .plan-intro-white {
    height: 33.95rem;
    padding-bottom: 8.1rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Membership = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <section className="general-padding container mx-auto">
        <Offering />
        <ul className="breadcrumb flex items-center">
          <li>Company</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Membership Packages</li>
        </ul>
      </section>
      <section className="relative">
        <section className="mt-16 plan-intro-gray">
          <h1 className="text-center pricing-title">Membership Pricing</h1>
          <section className="flex justify-center">
            <p className="pricing-desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum.
            </p>
          </section>
        </section>

        <section className="plan-intro-white" />

        <section className="flex justify-between items-center general-padding container subscription-group w-full">
          <section className="subscription free-plan mr-6">
            <h1 className="mem-option uppercase">Free</h1>
            <p className="pricing">
              NGN0.00 <span>/ Month</span>
            </p>
            <ul className="offering">
              <li>Free Page</li>
              <li>Ability to upload 3 photos of products and contents</li>
              <li>Weekly Newsletter</li>
            </ul>
            <button
              type="button"
              className="free-btn uppercase py-3 px-16"
              onClick={() => {
                Router.push('/dashboard');
              }}
            >
              Current plan
            </button>
          </section>
          <section className="subscription premium-plan mr-6">
            <h1 className="mem-option uppercase">PREMIUM</h1>
            <p className="pricing">
              NGN 10,000.00 <span>/ Month</span>
            </p>
            <ul className="offering">
              <li>Free Page</li>
              <li>Ability to upload 3 photos of products and contents</li>
              <li>Weekly Newsletter</li>
              <li>Ability to be found in search</li>
              <li>Free general advisory on consumer trends</li>
              <li>Spotlight on vendor (random and at our discretion)</li>
              <li>Free web page design advisory</li>
              <li>Auto verification</li>
              <li>First level priority placement on vendor list</li>
            </ul>
            <button type="button" className="premium-btn uppercase py-3 px-20">
              Upgrade
            </button>
          </section>
          <section className="subscription plus-plan">
            <h1 className="mem-option uppercase">Plus</h1>
            <p className="pricing">
              NGN 5,000.00 <span>/ Month</span>
            </p>
            <ul className="offering">
              <li>Free Page</li>
              <li>Ability to upload 3 photos of products and contents</li>
              <li>Weekly Newsletter</li>
              <li>Ability to be found in search</li>
              <li>Free general advisory on consumer trends</li>
            </ul>
            <button type="button" className="plus-btn uppercase py-3 px-20">
              Upgrade
            </button>
          </section>
        </section>
      </section>

      <Footer />
    </Wrapper>
  );
};

export default Membership;
