import { gql } from 'apollo-boost';

export const VENDORS = gql`
  query vendors {
    vendors {
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