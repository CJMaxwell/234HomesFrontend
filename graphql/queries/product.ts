import { gql } from 'apollo-boost';
export const USER_PRODUCTS = gql`
  query userProducts {
    userProducts {
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

