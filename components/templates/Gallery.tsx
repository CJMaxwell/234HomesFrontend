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
`;

const Gallery = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />


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
            <GalleryItem imgUrl="/img/gallery/sidekix-media-I_QC1JICzA0-unsplash.png" height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/francesca-tosolini-tHkJAMcO3QE-unsplash.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-31.png" height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-42.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/Adora_NH.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-30.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-25-1.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/Adora_NH-42.png" height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-8.png" height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/francesca-tosolini-w1RE0lBbREo-unsplash.png" height="20.95rem" />
          </div>
          <div className="ad">
            <GalleryItem imgUrl="/img/gallery/AH-18-3.png" height="24.1rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/two-white-rod-pocket-curtains-910458.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/2-seat-orange-leather-sofa-beside-wall-1866149.png" height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/interior-design-of-a-house-1571460.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-18-1.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/AH-18-2.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/two-assorted-color-padded-chairs-near-side-table-1350789-1.png"  height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/B-6-1.png"  height="29.65rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/bathroom-cabinet-candles-faucet-342800.png" height="20.95rem" />
          </div>
          <div className="">
            <GalleryItem imgUrl="/img/gallery/two-white-rod-pocket-curtains-910458.png" height="20.95rem" />
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
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Gallery
