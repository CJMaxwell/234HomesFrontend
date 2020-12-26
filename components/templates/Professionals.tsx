import React from 'react';
import styled from 'styled-components';

import Navbar from '../Organisms/Navbar';
import ProfessionalCard from '../Organisms/ProfessionalCard';
import Offering from '../Organisms/Offering';
import Footer from './Footer';

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
  .desc,
  .search-result,
  .sort-by,
  .recommended {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
  .recommended {
    font-weight: 600;
  }
  .house-tours {
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
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto mb-48">
        <Offering />
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
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam.
            </p>
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
          <ProfessionalCard
            name="Babatunde Maxwell"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <ProfessionalCard
            name="Alexandria Vladimir"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <ProfessionalCard
            name="Babatunde Maxwell"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <ProfessionalCard
            name="Alexandria Vladimir"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <ProfessionalCard
            name="Micheal Jonna"
            occupation="Carpenter"
            location="Wuse, Abuja"
            phone="0812 456 8900"
          />
          <ProfessionalCard
            name="Wuraola Gbotemi"
            occupation="Plumber"
            location="Maitama, Abuja"
            phone="0809 053 4405"
          />
          <ProfessionalCard
            name="Babatunde Maxwell"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <ProfessionalCard
            name="Alexandria Vladimir"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <ProfessionalCard
            name="Babatunde Maxwell"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <ProfessionalCard
            name="Alexandria Vladimir"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <ProfessionalCard
            name="Micheal Jonna"
            occupation="Carpenter"
            location="Wuse, Abuja"
            phone="0812 456 8900"
          />
          <ProfessionalCard
            name="Wuraola Gbotemi"
            occupation="Plumber"
            location="Maitama, Abuja"
            phone="0809 053 4405"
          />
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Professionals;
