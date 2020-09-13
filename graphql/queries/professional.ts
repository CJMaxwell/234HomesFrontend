import { gql } from 'apollo-boost';

export const PROFESSIONALS = gql`
  query professionals {
    professionals {
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