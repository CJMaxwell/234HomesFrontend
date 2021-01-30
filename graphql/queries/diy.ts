import { gql } from '@apollo/client';

export const DIY = gql`
  query diy($id: String!) {
    diy(id: $id) {
      id
      title
      video
      thumbnail
      featured
      body
      createdBy {
        firstName
        lastName
        profilePhoto
      }
      createdAt
    }
  }
`;

export const DIYS = gql`
  query diys {
    diys {
      id
      title
      video
      thumbnail
      featured
      body
      createdBy {
        firstName
        lastName
        profilePhoto
      }
      createdAt
    }
  }
`;

export const FEATUREDDIYS = gql`
  query featuredDiys {
    featuredDiys {
      id
      title
      thumbnail
    }
  }
`;
