import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Link from 'next/link';

import useGallery from '../../hooks/useGallery';
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
  .masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
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
  .gallery-wrap {
    margin-bottom: 8.65rem;
  }
  .loading {
    margin-top: 8.4rem;
  }
`;

const Gallery = () => {
  const { galleries, loading } = useGallery();

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
            </select>
            <select>
              <option value="colour">Colour</option>
              <option value="">Colour</option>
            </select>
            <select>
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
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          <Link href="gallery/single-gallery">
            <div className="cursor-pointer">
              <GalleryItem
                imgUrl="/img/gallery/sidekix-media-I_QC1JICzA0-unsplash.png"
                height="20.65rem"
              />
            </div>
          </Link>
          {
            // @ts-ignore
            galleries &&
              galleries.map((gallery) => (
                <Link href={`gallery/${gallery.id}`}>
                  <div className="cursor-pointer">
                    <GalleryItem imgUrl={gallery.media} title={gallery.title} height="20.65rem" />
                  </div>
                </Link>
              ))
          }
        </Masonry>
        <div className="flex justify-center items-center loading">
          <img src="/img/gallery/loading.svg" className="text-center h-20 w-20" alt="Loading" />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Gallery;
