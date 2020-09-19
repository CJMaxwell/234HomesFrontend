import { gql } from 'apollo-boost';
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
  query products {
    products {
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

