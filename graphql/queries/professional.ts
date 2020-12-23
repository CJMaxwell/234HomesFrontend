import { gql } from 'apollo-boost';

export const PROFESSIONALS = gql`
  query professionals($where:UserSearchInput) {
    professionals(where: $where) {
      id
      firstName
      lastName
      phoneNumber
      profilePhoto
      city
      state
      occupation
    }
  }
`;