import React from 'react';
import styled from 'styled-components';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import ProfileSidebar from '../Organisms/ProfileSidebar';
import PYHCard from '../Organisms/PYHCard';
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
  
  .title, .select-title {
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
  .budget,.occasion {
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
  section input[type="checkbox"]:checked {
    background-color: blue;
  }
  
`;
const PrevBtn = styled(CTA)`
  border: 1px solid ${({ theme }) => theme.colors.gray17};
  color: ${({ theme }) => theme.colors.gray17};
`;



const PYHSelection = () => {
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
            <section>
              <h1 className="py-6 select-title">What does your budget look like?</h1>
              <section className="grid grid-cols-3 gap-4">
                <section className="budget px-4 py-4 flex items-center">
                  <input type="radio" name="budget" id="huge" />
                  <label htmlFor="huge">N5,000,000 &amp; more</label>
                </section>
                <section className="budget px-4 py-4 flex items-center">
                  <input type="radio" name="budget" id="plus" />
                  <label htmlFor="plus">N500,000 - N1,000,000</label>
                </section>
                <section className="budget px-4 py-4 flex items-center">
                  <input type="radio" name="budget" id="fair" />
                  <label htmlFor="fair">N300,000 - N50,000</label>
                </section>
                <section className="budget px-4 py-4 flex items-center">
                  <input type="radio" name="budget" id="medium" />
                  <label htmlFor="medium">N100,000 - N200,000</label>
                </section>
                <section className="budget px-4 py-4 flex items-center">
                  <input type="radio" name="budget" id="min" />
                  <label htmlFor="min">N10,000 - N90,000</label>
                </section>
                <section className="budget px-4 py-4 flex items-center">
                  <input type="radio" name="budget" id="no-idea" />
                  <label htmlFor="no-idea">I have no idea</label>
                </section>
              </section>
            </section>
            <section>
              <h1 className="py-6 select-title">Whats the occasion?</h1>
              <section className="grid grid-cols-2 gap-4 text-center">
                <section className="occasion">
                  <input type="radio" name="occasion" className="block" id="new-house" />
                  <label htmlFor="new-house">We just moved to a new house</label>
                </section>
                <section className="occasion">
                  <input type="radio" name="occasion" className="block" id="update" />
                  <label htmlFor="update">I haven’t updated the look of my room in years</label>
                </section>
                <section className="occasion">
                  <input type="radio" name="occasion" className="block" id="baby" />
                  <label htmlFor="baby">Baby on the way</label>
                </section>
                <section className="occasion">
                  <input type="radio" name="occasion" className="block" id="furniture" />
                  <label htmlFor="furniture">My budget now allows for new furniture</label>
                </section>
              </section>
            </section>
            <section className="flex justify-between items-center mt-12 mb-16">
              <PrevBtn type="button" padding="0.8rem 1.35rem;">Previous</PrevBtn>
              <CTA type="button" padding="0.8rem 1.85rem;">Search Products</CTA>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default PYHSelection;
