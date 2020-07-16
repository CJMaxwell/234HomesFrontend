import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';


import ProfileNavbar from '../Organisms/ProfileNavbar';
import ProductListCard from '../Organisms/ProductListCard'
import Footer from './Footer';

const Wrapper = styled.div`

  .htitle {
    color: ${({ theme }) => theme.colors.gray1};
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
  .listing li {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
    font-weight: 600;
    display: inline-block;
    padding: 0.75rem 1.5rem;
  }
  .listing li.active {
    color: ${({ theme }) => theme.colors.gray5}
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
  .house-tours{
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
  .product-list {

  }
`;

const ProductList = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto mb-48">
        <ul className="cursor-pointer border-b border-gray-300 flex items-center listing uppercase">
          <li className="cursor-pointer pl-6 house-tours h-full">House Tours</li>
          <li className="cursor-pointer stories">Stories</li>
          <li className="cursor-pointer diy">DIY</li>
          <Link href="/directory">
            <li className="cursor-pointer directory active">Directory</li>
          </Link>
        </ul>
        <ul className="breadcrumb flex items-center">
          <li>Directory</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Vendors</li>
        </ul>
        <section className="flex justify-between items-center">
          <div>
            <h1 className="htitle">Arts & Crafts</h1>
            <p className="desc pt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam.</p>
          </div>
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
        </section>
        <div className="flex justify-between items-center mt-8 mb-6">
          <p className="search-result">10,127 Products available</p>
          <div className="flex items-center">
            <span className="sort-by">Sort By</span>
            <select className="recommended">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
        </div>
        <div className="product-list border border-gray-200">
          <div className="px-8 pt-8 pb-3">
            <ProductListCard imgUrl='/img/BArt.png' logo='/img/Image-11.png' />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl='/img/B-18-B.png' logo='/img/Image 16.png' ad={true} />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl='/img/brown-and-black-wooden-box-3889740.png' logo='/img/Image14er.png' />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl='/img/B-7.png' logo='/img/Image-11.png' ad={true} />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl='/img/Bullish.png' logo='/img/Image17.png' ad={true} />
          </div>
          <hr />
          <div className="px-8 pt-3 pb-8">
            <ProductListCard imgUrl='/img/prince-abid-pEvPkPmuHzo-unsplash.png' logo='/img/Image-11.png' />
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>

  )
}

export default ProductList
