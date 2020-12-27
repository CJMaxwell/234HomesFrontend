import { gql } from '@apollo/client';

export const HOUSE_TOURS = gql`
  query houseTours {
    houseTours {
      id
      title
      summary
      category
      featured
      slides {
        photo
        description
      }
      createdBy {
        firstName
        lastName
      }
      createdAt
    }
  }
`;

export const HOUSE_TOUR = gql`
  query houseTour($id: String!) {
    houseTour(id: $id) {
      id
      title
      summary
      category
      featured
      slides {
        photo
        description
      }
      createdBy {
        firstName
        lastName
      }
      createdAt
    }
  }
`;
