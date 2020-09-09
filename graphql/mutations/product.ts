import { gql } from 'apollo-boost';

export const ADD_PRODUCT = gql`
  mutation addProduct($file: Upload!, $input: ProductInput!) {
    addProduct(file: $file, input: $input) {
      id
    }
  }
`;
