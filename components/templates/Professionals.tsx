import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Footer from './Footer';
import ProfessionalCard from '../Organisms/ProfessionalCard';

const Wrapper = styled.div`

  .heading {
    color: ${({ theme }) => theme.colors.gray1};
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.75rem;
  }
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
  }
  .listing li {
    padding-right: 3rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
    font-weight: 600;
  }
  .listing li.active {
    color: ${({ theme }) => theme.colors.gray5}
  }
  .filter {
    color: ${({ theme }) => theme.colors.gray5};
    select {
      border: 1px solid ${({ theme }) => theme.colors.gray17};
      padding: 0.25rem 0.5rem;
    }
    select:not(:last-child) {
      margin-right: 1.35rem;
    }
  }
  
`;

const Professionals = () => {

  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding">
        <ul className="border-b border-gray-300 flex items-center listing uppercase py-3">
          <li className="pl-6">House Tours</li>
          <li>Stories</li>
          <li>DIY</li>
          <li className="active">Directory</li>
        </ul>
        <ul className="breadcrumb flex items-center">
          <li>Directory</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Professionals</li>
        </ul>
        <section className="flex justify-between items-center">
          <div>
            <h1 className="heading">Professionals</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam.</p>
          </div>
          <div className="filter">
            <select>
              <option value="service">Service</option>
              <option value="">Service</option>
            </select>
            <select>
              <option value="Category">Category</option>
              <option value="">Category</option>
            </select>
            <select>
              <option value="Location">Location</option>
              <option value="">Location</option>
            </select>
            <select>
              <option value="Rating">Rating</option>
              <option value="">Rating</option>
            </select>
          </div>
        </section>
        <div className="flex justify-between items-center mt-8 mb-6">
          <p>10,127 Services available</p>
          <div className="flex items-center">
            <span>Sort By</span>
            <select>
              <option value="Recommended">Recommended</option>
            </select>
          </div>
        </div>
        <section className="grid grid-cols-4 gap-6">
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
        </section>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Professionals
