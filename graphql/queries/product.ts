import { gql } from '@apollo/client';

export const USER_PRODUCTS = gql`
  query userProducts($id: String!) {
    userProducts(id: $id) {
      id
      title
      category
      tags
      colors
      price
      city
      state
      media
      description
    }
  }
`;

export const PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      title
      category
      tags
      colors
      price
      city
      state
      media
      description
    }
  }
`;

export const PRODUCTS = gql`
  query products($where: ProductSearchInput) {
    products(where: $where) {
      id
      title
      category
      tags
      colors
      price
      city
      state
      media
      description
    }
  }
`;

export const MOST_VIEWED_PRODUCTS = gql`
  query mostViewedProducts {
    mostViewedProducts {
      id
      title
      category
      city
      description
      media
    }
  }
`;
