import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';

import useVendorProfessionals from '../../hooks/useVendorProfessionals';
import Hero from '../Organisms/Hero';
import Offering from '../Organisms/Offering';
import ProfessionalCard from '../Organisms/ProfessionalCard';
import Layout from '../Layouts/Layout';

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
  const { professionals, loading, search } = useVendorProfessionals();

  return (
    <Layout>
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero
        title="Find A Professional For Your Project!"
        placeholder="What Services Do You Need?"
        search={search}
        loading={loading}
      />
      <Categories className="py-3">
        <ul className="container mx-auto general-padding flex items-center justify-between text-white">
          <li className="flex items-center uppercase">
            <span className="pr-3 font-semibold">All Categories</span>
            <span>
              <img src="/img/list.svg" alt="All Categories" />
            </span>
          </li>
          <li>
            <a>Interior designers</a>
          </li>
          <li>
            <a>Carpenters</a>
          </li>
          <li>
            <a>Painters</a>
          </li>
          <li>
            <a>Decorators</a>
          </li>
          <li>
            <a>Landscaping</a>
          </li>
          <li>
            <a>Electricians</a>
          </li>
          <li>
            <a>Plumbers</a>
          </li>
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
        {loading && (
          <section className="flex justify-center items-center mt-40">
            <Loader type="TailSpin" color={theme.colors.orange1} height={80} width={80} />
          </section>
        )}
        <section className="grid grid-cols-4 gap-6">
          {
            // @ts-ignore
            professionals &&
              professionals.map((professional: any) => (
                <ProfessionalCard
                  name={professional.businessName}
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
    </Layout>
  );
};

export default Directory;
