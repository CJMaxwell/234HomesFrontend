import React from 'react';
import styled from 'styled-components';
import Hero from '../Organisms/Hero';

import Navbar from '../Organisms/Navbar'
import Offering from '../Organisms/Offering'
import ProjectListingCard from '../Organisms/ProjectListingCard';
import Footer from './Footer';

const Wrapper = styled.section`


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

const Projects = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero
        title="Find Inspiration For Your Next project!"
        imgUrl="/img/vendors/banner.png"
        placeholder="Search for a projects..."
      />

      <div className="general-padding container mx-auto mb-48">
        <div className="flex justify-between items-center mb-12 mt-20">
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
        <div className="grid grid-cols-3 gap-6">
          <ProjectListingCard
            imgUrl="/img/beazy-Q-nk9A5GsSM-unsplash.png"
          />
          <ProjectListingCard
            imgUrl="/img/francesca-tosolini-FX1EbT-jKBQ-unsplash.png"
          />
          <ProjectListingCard
            imgUrl="/img/francesca-tosolini-tHkJAMcO3QE-unsplash.png"
          />
          <ProjectListingCard
            imgUrl="/img/beazy-Q-nk9A5GsSM-unsplash.png"
          />

        </div>
      </div>
      <Footer />

    </Wrapper>
  )
}

export default Projects
