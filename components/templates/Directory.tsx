import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Hero from '../Organisms/Hero';
import Favourite from '../molecules/Favourite';
import Footer from './Footer';
import Offering from '../Organisms/Offering';
import ProfessionalCard from '../Organisms/ProfessionalCard';

const Categories = styled.section`
  background-color:  ${({theme}) => theme.colors.orange4};
`;

const Main = styled.main`
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
`;

const Directory = () => {

  const theme = useContext(ThemeContext);

  return (
    <section>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="container mx-auto">
        <ProfileNavbar />
      </div>
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero title='Find A Professional For Your Project!' placeholder="What Services Do You Need?" />
      <Categories className="py-3">
        <ul className="container mx-auto general-padding flex items-center justify-between text-white">
          <li className="flex items-center uppercase">
            <span className="pr-3 font-semibold">All Categories</span>
            <span>
              <img src="/img/list.svg" alt="All Categories" />
            </span>
          </li>
          <li>Interior designers</li>
          <li>Carpenters</li>
          <li>Painters</li>
          <li>Decorators</li>
          <li>Landscaping</li>
          <li>Electricians</li>
          <li>Plumbers</li>
        </ul>
      </Categories>
      <Main className="container mx-auto general-padding my-20">
        <div className="flex justify-between items-center mb-12">
          <div className="filter">
            <select>
              <option value="Location">Location</option>
              <option value="">Location</option>
            </select>
            <select>
              <option value="Rating">Rating</option>
              <option value="">Rating</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="sort-by">Sort By</span>
            <select className="recommended">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
        </div>
        <section className="grid grid-cols-4 gap-6">
          <ProfessionalCard  name="Babatunde Maxwell" occupation="Interior Designer" location="Ikeja, Lagos" phone="0803 456 7890"/>
          <ProfessionalCard name="Alexandria Vladimir" occupation="Painter" location="Barnawa, Kaduna" phone="0809 053 4405" />
          <ProfessionalCard name="Babatunde Maxwell" occupation="Interior Designer" location="Ikeja, Lagos" phone="0803 456 7890" />
          <ProfessionalCard name="Alexandria Vladimir" occupation="Painter" location="Barnawa, Kaduna" phone="0809 053 4405" />
          <ProfessionalCard name="Micheal Jonna" occupation="Carpenter" location="Wuse, Abuja" phone="0812 456 8900" />
          <ProfessionalCard name="Wuraola Gbotemi" occupation="Plumber" location="Maitama, Abuja" phone="0809 053 4405" />
          <ProfessionalCard  name="Babatunde Maxwell" occupation="Interior Designer" location="Ikeja, Lagos" phone="0803 456 7890"/>
          <ProfessionalCard name="Alexandria Vladimir" occupation="Painter" location="Barnawa, Kaduna" phone="0809 053 4405" />
          <ProfessionalCard name="Babatunde Maxwell" occupation="Interior Designer" location="Ikeja, Lagos" phone="0803 456 7890" />
          <ProfessionalCard name="Alexandria Vladimir" occupation="Painter" location="Barnawa, Kaduna" phone="0809 053 4405" />
          <ProfessionalCard name="Micheal Jonna" occupation="Carpenter" location="Wuse, Abuja" phone="0812 456 8900" />
          <ProfessionalCard name="Wuraola Gbotemi" occupation="Plumber" location="Maitama, Abuja" phone="0809 053 4405" />
        </section>
      </Main>
      <Footer />
    </section>
  )
}

export default Directory
