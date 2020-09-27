import { gql } from 'apollo-boost';

export const ADD_DIY = gql`
  mutation addDiy($input: DiyInput!) {
    addDiy(input: $input) {
      id
    }
  }
`;
