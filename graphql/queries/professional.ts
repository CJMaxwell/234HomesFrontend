import { gql } from '@apollo/client';

export const PROFESSIONALS = gql`
  query professionals($where: UserSearchInput) {
    professionals(where: $where) {
      id
      businessName
      phoneNumber
      profilePhoto
      city
      state
      occupation
    }
  }
`;
