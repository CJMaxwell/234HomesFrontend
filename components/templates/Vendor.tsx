import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Hero from '../Organisms/Hero';
import Footer from './Footer';
import Offering from '../Organisms/Offering';
import SingleVendorCard from '../Organisms/SingleVendorCard';

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

const Vendor = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="container mx-auto">
        <ProfileNavbar />
      </div>
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero
        title="Find A Vendor For Your Next Project!"
        imgUrl="/img/vendors/banner.png"
        placeholder="Search for a product..."
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
        <section className="grid grid-cols-4 gap-6">
          <SingleVendorCard
            imgUrl="/img/vendors/single-vendor-sidekix-media-I_QC1JICzA0-unsplash.png"
            height="10.3rem"
            name="Nick Interiors Ltd"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/francesca-tosolini-tHkJAMcO3QE-unsplash.png"
            height="10.3rem"
            name="Lorem Furniture"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/jacek-dylag-Vve7XkiUq_Y-unsplash.png"
            height="10.3rem"
            name="Chuma & Sons Ltd"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/architecture-clouds-estate-exterior-280222-1.png"
            height="10.3rem"
            name="Consetetur Designs"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/pink-and-purple-wallpaper-1616403.png"
            height="10.3rem"
            name="Lorem Furniture"
            occupation="Carpenter"
            location="Wuse, Abuja"
            phone="0812 456 8900"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/single-vendor-AH.png"
            height="10.3rem"
            name="Chuma & Sons Ltd"
            occupation="Plumber"
            location="Maitama, Abuja"
            phone="0809 053 4405"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/single-vendor-AK.png"
            height="10.3rem"
            name="Nick Interiors Ltd"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/apartment-chair-contemporary-design-259580.png"
            height="10.3rem"
            name="Lorem Furniture"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/P1010562-2.png"
            height="10.3rem"
            name="Nick Interiors Ltd"
            occupation="Interior Designer"
            location="Ikeja, Lagos"
            phone="0803 456 7890"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/person-holding-black-pen-1109541.png"
            height="10.3rem"
            name="Chuma & Sons Ltd"
            occupation="Painter"
            location="Barnawa, Kaduna"
            phone="0809 053 4405"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/P1010562.png"
            height="10.3rem"
            name="Consetetur Designs"
            occupation="Carpenter"
            location="Wuse, Abuja"
            phone="0812 456 8900"
          />
          <SingleVendorCard
            imgUrl="/img/vendors/DSC_0029cop.png"
            height="10.3rem"
            name="Lorem Furniture"
            occupation="Plumber"
            location="Maitama, Abuja"
            phone="0809 053 4405"
          />
        </section>
      </Main>
      <Footer />
    </div>
  );
};

export default Vendor;
