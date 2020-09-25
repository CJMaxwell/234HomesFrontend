import { gql } from 'apollo-boost';

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
    }
  }
`;
