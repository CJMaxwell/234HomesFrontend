import { gql } from 'apollo-boost';

export const VENDORS = gql`
  query vendors {
    vendors {
      id
      businessName
      banner
      phoneNumber
      profilePhoto
      city
      state
    }
  }

`;