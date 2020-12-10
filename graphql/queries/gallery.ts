import { gql } from 'apollo-boost';

export const GALLERY = gql`
  query gallery {
    gallery {
      id
      title
      media
    }
  }
`;
