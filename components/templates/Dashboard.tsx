import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import DashboardLayout from '../Layouts/DashboardLayout';
import CTA from '../atoms/CTA';
// import useProfile from '../../hooks/useProfile';

const Wrapper = styled.section`
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
    /* border: 1px solid ${({ theme }) => theme.colors.orange1};
    border-radius: 32px;
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.8rem;
    padding: 0.85rem 3rem; */
  }
`;

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Wrapper>
        <section className="flex justify-between">
          <section className="text-center w-full">
            <h1 className="temp-access">Your account access is temporarily limited</h1>
            <p className="main-dashboard-desc flex justify-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </p>
            <CTA
              type="button"
              className="update-profile"
              padding="0.85rem 3rem;"
              onClick={() => {
                Router.push('/dashboard/profile');
              }}
            >
              Update Your Profile
            </CTA>
          </section>
        </section>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Dashboard;
