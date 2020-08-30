import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

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
    padding: 0 2.65rem;
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
  .account-type {
    padding-top: 2.85rem;
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 2.85rem;
  }
  .next {
    margin-top: 3.1rem;
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    border-radius: 44px;
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.8rem;
    padding: 0.85rem 2.75rem;
  }
  li.acc-type {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 10px;
    padding: 1.75rem;
  }
  li.acc-type.active {
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    background-color: ${({ theme }) => theme.colors.orange1};
    border-radius: 10px;
    padding: 1.75rem;
    color: ${({ theme }) => theme.colors.white};
  }
  .acc-type {
    margin-right: 1.35rem;
  }
  .selection {
    padding-top: 0.85rem;
    font-size: 0.8rem;
  }
  .feat {
    color: ${({ theme }) => theme.colors.gray2};
    font-weight: 600;
    font-size: 0.8rem;
    padding-top: 3.5rem;
    padding-bottom: 1.75rem;
  }
  .features li {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray2};
    padding-bottom: 1.5rem;
  }
`;

function setAccountTypeToLocalStorage(accountType: string) {
  sessionStorage.setItem('accountType', accountType);
}

const DashboardType = () => {
  const [accountType, setAccountType] = useState('individual');

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
            <h1 className="account-type">Select Preferred Account Type</h1>
            <ul className="flex items-center">
              <li
                className={`acc-type ${accountType === 'individual' && 'active'}`}
                onClick={() => {
                  setAccountType('individual');
                }}
                aria-hidden="true"
              >
                <span>
                  <img src="/img/dashboard/dashboarduser.svg" alt="User" />
                </span>
                <a className="selection">Individual User</a>
              </li>
              <li
                className={`acc-type ${accountType === 'professional' && 'active'}`}
                onClick={() => {
                  setAccountType('professional');
                }}
                aria-hidden="true"
              >
                <span>
                  <img src="/img/dashboard/work-white.svg" alt="Professional" />
                </span>
                <a className="selection">Professional</a>
              </li>
              <li
                className={`acc-type ${accountType === 'vendor' && 'active'}`}
                onClick={() => {
                  setAccountType('vendor');
                }}
                aria-hidden="true"
              >
                <span>
                  <img src="/img/dashboard/dashboardbox.svg" alt="Vendor" />
                </span>
                <a className="selection">Vendor</a>
              </li>
            </ul>
            <p className="feat">Features</p>
            <ul className="features">
              <li>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
              </li>
              <li>Consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
              <li>
                Labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo
              </li>
            </ul>
            <section className="flex justify-end">
              <button
                type="button"
                className="next"
                onClick={() => {
                  setAccountTypeToLocalStorage(accountType);
                  Router.push('/membership-package');
                }}
              >
                Next
              </button>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default DashboardType;
