import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';


import PYHCard from '../Organisms/PYHCard';
import CTA from '../atoms/CTA';
import DashboardLayout from '../Layouts/DashboardLayout';

const Wrapper = styled.section`
  .title,
  .select-title {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .title {
    text-transform: uppercase;
  }
  .section-wrap {
    margin-bottom: 6.6rem;
  }
  .introduction {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
    width: 29.9rem;
  }
`;

const PYHome = () => {
  return (
    <DashboardLayout>
      <Wrapper>
        <section className="w-full">
          <h1 className="pt-10 title">Design your Home</h1>
          <p className="introduction pt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
            </p>
          <h1 className="py-6 select-title capitalize">Select Room Type</h1>
          <section className="grid grid-cols-3 gap-4">
            <PYHCard imgUrl="/img/brown-wooden-center-table-584399-pyh.png" title="Living Room" />
            <PYHCard imgUrl="/img/photo-of-bedroom-1454806-pyh.png" title="Bed Room" />
            <PYHCard imgUrl="/img/kitchen-and-dining-area-1080721-pyh.png" title="Kitchen" />
            <PYHCard
              imgUrl="/img/bathroom-cabinet-candles-faucet-342800-pyh.png"
              title="Bathroom"
            />
            <PYHCard
              imgUrl="/img/people-sitting-on-chairs-beside-their-desks-in-an-office-1170412-pyh.png"
              title="Office Space"
            />
            <PYHCard imgUrl="/img/randy-fath-OwWsKiVGtQY-unsplash-pyh.png" title="Dining" />
          </section>
          <section className="flex justify-end mt-12 mb-16">
            <CTA
              onClick={() => Router.push('/home-plan')}
              type="button"
              className="update-profile focus:outline-none"
              padding="0.8rem 2.4rem;"
            >
              Next
              </CTA>
          </section>
        </section>
      </Wrapper>
    </DashboardLayout>

  );
};

export default PYHome;
