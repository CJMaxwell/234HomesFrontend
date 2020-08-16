import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Masonry from 'react-masonry-css'

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import GalleryItem from '../Organisms/GalleryItem';
import Footer from './Footer';

const Wrapper = styled.section`


  .masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -1.05rem; /* gutter size offset */
    width: auto;
  }
  .masonry-grid_column {
    padding-left: 1.05rem; /* gutter size */
    background-clip: padding-box;
  }
  .masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    padding-top: 1.05rem;
    &.ad {
      flex-grow: 2;
    }
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
  .gallery-wrap {
    margin-bottom: 8.65rem;
  }
  .loading {
    margin-top: 8.4rem;
  }
`;

const Gallery = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto gallery-wrap">
        <Offering />

        <div className="flex justify-between items-center mb-6 mt-16">
          <div className="filter">
            <select>
                <option value="Category">Room Type</option>
                <option value="">Room Type</option>
            </select>
            <select>
              <option value="style">Style</option>
              <option value="">Style</option>
            </select>
            <select>
              <option value="cut">Cut</option>
              <option value="">Cut</option>
            </select><select>
              <option value="colour">Colour</option>
              <option value="">Colour</option>
            </select><select>
              <option value="location">Location</option>
              <option value="">Location</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="sort-by">Sort By</span>
            <select className="recommended">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
        </div>

        <Masonry
          breakpointCols={
            {
              default: 4,
              1100: 3,
              700: 2,
              500: 1
            }
          }
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          <div className="">
            <GalleryItem imgUrl="/img/gallery/sidekix-media-I_QC1JICzA0-unsplash.png" height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/francesca-tosolini-tHkJAMcO3QE-unsplash.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-31.png" height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-42.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/Adora_NH.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-30.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-25-1.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/Adora_NH-42.png" height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-8.png" height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/francesca-tosolini-w1RE0lBbREo-unsplash.png" height="16.95rem" />
          </div>
          <div className="ad">
            <GalleryItem imgUrl="/img/gallery/AH-18-3.png" height="24.1rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/two-white-rod-pocket-curtains-910458.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/2-seat-orange-leather-sofa-beside-wall-1866149.png" height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/interior-design-of-a-house-1571460.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-18-1.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-18-2.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/two-assorted-color-padded-chairs-near-side-table-1350789-1.png"  height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-6-1.png"  height="20.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/bathroom-cabinet-candles-faucet-342800.png" height="16.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/two-white-rod-pocket-curtains-910458.png" height="16.95rem" />
          </div>
          {/* <GalleryItem imgUrl="/img/gallery/sidekix-media-I_QC1JICzA0-unsplash.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/francesca-tosolini-tHkJAMcO3QE-unsplash.png" height="20.95rem" />
          <GalleryItem imgUrl="/img/gallery/AH-31.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/AH-42.png" height="20.95rem" />
          <GalleryItem imgUrl="/img/gallery/Adora_NH.png" height="4.5rem" />
          <GalleryItem imgUrl="/img/gallery/AH-30.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/B-25-1.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/Adora_NH-42.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/B-8.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/francesca-tosolini-w1RE0lBbREo-unsplash.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/AH-18-3.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/two-white-rod-pocket-curtains-910458.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/2-seat-orange-leather-sofa-beside-wall-1866149.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/interior-design-of-a-house-1571460.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/B-18-1.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/AH-18-2.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/two-assorted-color-padded-chairs-near-side-table-1350789-1.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/B-6-1.png" height="29.65rem" />
          <GalleryItem imgUrl="/img/gallery/bathroom-cabinet-candles-faucet-342800.png" height="29.65rem" /> */}
        </Masonry>
        <div className="flex justify-center items-center loading">
          <img src="/img/gallery/loading.svg" className="text-center h-20 w-20" alt="Loading" />
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Gallery
