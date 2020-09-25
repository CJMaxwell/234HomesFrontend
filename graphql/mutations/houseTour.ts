import { gql } from 'apollo-boost';

export const CREATE_HOUSE_TOUR = gql`
  mutation createHouseTour($input: HouseTourInput!) {
    createHouseTour(input: $input) {
      id
    }
  }
`;
