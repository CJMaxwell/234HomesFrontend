import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';


import CTA from '../atoms/CTA';
import DashboardLayout from '../Layouts/DashboardLayout';

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
  .budget,
  .occasion {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray5};
    border-radius: 5px;
  }

  .budget label {
    margin-left: 0.5rem;
  }

  input {
    width: 0.75rem;
  }
  .occasion label {
    padding-bottom: 1.5rem;
    display: inline-block;
  }
  .occasion input {
    /* margin-top: 1rem; */
    margin: 1rem auto 0.2rem auto;
  }
  section input[type='checkbox']:checked {
    background-color: blue;
  }
`;
const PrevBtn = styled(CTA)`
  border: 1px solid ${({ theme }) => theme.colors.gray17};
  color: ${({ theme }) => theme.colors.gray17};
`;

const PYHSelection = () => {
  return (
    <DashboardLayout>
      <Wrapper>
        <section className="main w-3/4">
          <section>
            <h1 className="py-6 select-title">What does your budget look like?</h1>
            <section className="grid grid-cols-3 gap-4">
              <section className="budget px-4 py-4 flex items-center">
                <input type="radio" name="budget" id="huge" />
                <label className="cursor-pointer" htmlFor="huge">
                  N5,000,000 &amp; more
                  </label>
              </section>
              <section className="budget px-4 py-4 flex items-center">
                <input type="radio" name="budget" id="plus" />
                <label className="cursor-pointer" htmlFor="plus">
                  N500,000 - N1,000,000
                  </label>
              </section>
              <section className="budget px-4 py-4 flex items-center">
                <input type="radio" name="budget" id="fair" />
                <label className="cursor-pointer" htmlFor="fair">
                  N300,000 - N50,000
                  </label>
              </section>
              <section className="budget px-4 py-4 flex items-center">
                <input type="radio" name="budget" id="medium" />
                <label className="cursor-pointer" htmlFor="medium">
                  N100,000 - N200,000
                  </label>
              </section>
              <section className="budget px-4 py-4 flex items-center">
                <input type="radio" name="budget" id="min" />
                <label className="cursor-pointer" htmlFor="min">
                  N10,000 - N90,000
                  </label>
              </section>
              <section className="budget px-4 py-4 flex items-center">
                <input type="radio" name="budget" id="no-idea" />
                <label className="cursor-pointer" htmlFor="no-idea">
                  I have no idea
                  </label>
              </section>
            </section>
          </section>
          <section>
            <h1 className="py-6 select-title">Whats the occasion?</h1>
            <section className="grid grid-cols-2 gap-4 text-center">
              <section className="occasion">
                <input type="radio" name="occasion" className="block" id="new-house" />
                <label className="cursor-pointer" htmlFor="new-house">
                  We just moved to a new house
                  </label>
              </section>
              <section className="occasion">
                <input type="radio" name="occasion" className="block" id="update" />
                <label className="cursor-pointer" htmlFor="update">
                  I haven’t updated the look of my room in years
                  </label>
              </section>
              <section className="occasion">
                <input type="radio" name="occasion" className="block" id="baby" />
                <label className="cursor-pointer" htmlFor="baby">
                  Baby on the way
                  </label>
              </section>
              <section className="occasion">
                <input type="radio" name="occasion" className="block" id="furniture" />
                <label className="cursor-pointer" htmlFor="furniture">
                  My budget now allows for new furniture
                  </label>
              </section>
            </section>
          </section>
          <section className="flex justify-between items-center mt-12 mb-16">
            <PrevBtn
              onClick={() => Router.push('/plan-your-home')}
              type="button"
              className="focus:outline-none"
              padding="0.8rem 1.35rem;"
            >
              Previous
              </PrevBtn>
            <CTA
              onClick={() => Router.push('/products')}
              type="button"
              className="focus:outline-none"
              padding="0.8rem 1.85rem;"
            >
              Search Products
              </CTA>
          </section>
        </section>
      </Wrapper>
    </DashboardLayout>

  );
};

export default PYHSelection;
