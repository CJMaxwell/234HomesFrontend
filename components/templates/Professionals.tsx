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
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .listing li {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
    font-weight: 600;
    display: inline-block;
    padding: 0.75rem 1.5rem;

    /* &:not(:first-child) {
      padding: 0 1.5rem;
    } */
  }
  .listing li.active {
    color: ${({ theme }) => theme.colors.gray5}
  }
  .filter {
    color: ${({ theme }) => theme.colors.gray5};
    select {
      border: 1px solid ${({ theme }) => theme.colors.gray17};
      padding: 0.25rem 0.5rem;
      font-size: 0.8rem;
    }
    select:not(:last-child) {
      margin-right: 1.35rem;
    }
  }
  .desc, .search-result, .sort-by,.recommended {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5}
  }
  .recommended {
    font-weight: 600;
  }
  .house-tours{
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange1};
  }
  .stories {
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow1};
  }
  .diy {
    border-bottom: 3px solid ${({ theme }) => theme.colors.green1};
  }
  .directory {
    border-bottom: 3px solid ${({ theme }) => theme.colors.gray5};
  }
`;

const Professionals = () => {

  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto mb-48">
        <ul className="border-b border-gray-300 flex items-center listing uppercase">
          <li className="pl-6 house-tours h-full">House Tours</li>
          <li className="stories">Stories</li>
          <li className="diy">DIY</li>
          <li className="directory active">Directory</li>
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
            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam.</p>
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
          <p className="search-result">10,127 Services available</p>
          <div className="flex items-center">
            <span className="sort-by">Sort By</span>
            <select className="recommended">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
        </div>
        <section className="grid grid-cols-4 gap-6">
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
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
