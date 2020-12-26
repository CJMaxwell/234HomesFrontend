import React from 'react';
import styled from 'styled-components';

import withApollo from '../../lib/withApollo';
import { useProducts } from '../../hooks/products';
import useProfile from '../../hooks/useProfile';
import Navbar from '../Organisms/Navbar';
import ProductListCard from '../Organisms/ProductListCard';
import Offering from '../Organisms/Offering';
import Footer from './Footer';
import Hero from '../Organisms/Hero';

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

const Products = () => {
  const { loading, search, products } = useProducts();

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <Hero
        title="Find A Product For Your Next Project!"
        imgUrl="/img/vendors/banner.png"
        placeholder="Search for a product..."
        loading={loading}
        search={search}
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
        <div className="product-list border border-gray-200">
          {products &&
            // @ts-ignore
            products.map((product) => (
              <section key={product.id}>
                <div className="px-8 pt-8 pb-3">
                  <ProductListCard
                    imgUrl={product.media}
                    title={product.title}
                    description={product.description}
                    logo="/img/Image-11.png"
                    city={product.city}
                    category={product.category}
                    path={`/products/${product.id}`}
                  />
                </div>
                <hr />
              </section>
            ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(Products);
