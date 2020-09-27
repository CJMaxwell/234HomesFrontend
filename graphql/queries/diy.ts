import { gql } from 'apollo-boost';

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
      }
      createdAt
    }
  }
`;