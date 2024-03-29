import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';

import useVendor from '../../hooks/useVendor';
import Hero from '../Organisms/Hero';
import Offering from '../Organisms/Offering';
import SingleVendorCard from '../Organisms/SingleVendorCard';
import Layout from '../Layouts/Layout';

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

const Vendors = () => {
  const theme = useContext(ThemeContext);
  const { vendors, loading, search } = useVendor();
  return (
    <Layout>
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero
        title="Find A Vendor For Your Next Project!"
        imgUrl="/img/vendors/banner.png"
        placeholder="Search for a product..."
        search={search}
        loading={loading}
      />
      <Main className="container mx-auto general-padding my-20">
        <div className="flex justify-between items-center mb-12">
          <div className="filter">
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
            vendors &&
            vendors.map((vendor: any) => (
              <SingleVendorCard
                imgUrl={`${vendor.banner ||
                  '/img/vendors/single-vendor-sidekix-media-I_QC1JICzA0-unsplash.png'
                  }`}
                height="10.3rem"
                name={vendor.businessName}
                occupation={vendor.occupation}
                location={`${vendor.city}, ${vendor.state}`}
                phone={vendor.phoneNumber}
                key={vendor.id}
                path={`/vendors/${vendor.id}`}
              />
            ))
          }
        </section>
      </Main>
    </Layout>
  );
};

export default Vendors;
