import { gql } from '@apollo/client';

export const VENDORS = gql`
  query vendors($where: UserSearchInput) {
    vendors(where: $where) {
      id
      businessName
      phoneNumber
      banner
      city
      state
    }
  }
`;

export const TOPVENDORS = gql`
  query topVendors {
    topVendors {
      id
      businessName
      banner
      address
      phoneNumber    
    }
  }
`;