import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import withApollo from '../../lib/withApollo';
import useProfessional from '../../hooks/useProfessional';
import Navbar from '../Organisms/Navbar';
import Hero from '../Organisms/Hero';
import Favourite from '../molecules/Favourite';
import Footer from './Footer';
import Offering from '../Organisms/Offering';
import ProfessionalCard from '../Organisms/ProfessionalCard';

const Categories = styled.section`
  background-color: ${({ theme }) => theme.colors.orange4};
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
`;

const Directory = () => {
  const theme = useContext(ThemeContext);
  const { professionals, ProfessionalLoading } = useProfessional();
  console.log(professionals);
  return (
    <section>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="container mx-auto">
        <Navbar />
      </div>
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero
        title="Find A Professional For Your Project!"
        placeholder="What Services Do You Need?"
      />
      <Categories className="py-3">
        <ul className="container mx-auto general-padding flex items-center justify-between text-white">
          <li className="flex items-center uppercase">
            <span className="pr-3 font-semibold">All Categories</span>
            <span>
              <img src="/img/list.svg" alt="All Categories" />
            </span>
          </li>
          <li><a>Interior designers</a></li>
          <li><a>Carpenters</a></li>
          <li><a>Painters</a></li>
          <li><a>Decorators</a></li>
          <li><a>Landscaping</a></li>
          <li><a>Electricians</a></li>
          <li><a>Plumbers</a></li>
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
          {
            // @ts-ignore
            professionals && professionals.map(professional => (
              <ProfessionalCard
                name={`${professional.firstName} ${professional.lastName}`}
                occupation={professional.occupation}
                location={`${professional.city}, ${professional.state}`}
                phone={professional.phoneNumber}
                profilePhoto={professional.profilePhoto || '/img/dashboard/dashboardperson.svg'}
                key={professional.id}
                path={`/directory/${professional.id}`}
              />
            ))
          }

        </section>
      </Main>
      <Footer />
    </section>
  );
};

export default withApollo()(Directory);
