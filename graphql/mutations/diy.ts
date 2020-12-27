import { gql } from '@apollo/client';

export const ADD_DIY = gql`
  mutation addDiy($input: DiyInput!) {
    addDiy(input: $input) {
      id
    }
  }
`;
