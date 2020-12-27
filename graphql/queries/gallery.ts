import { gql } from '@apollo/client';

export const GALLERY = gql`
  query gallery {
    gallery {
      id
      title
      media
    }
  }
`;
