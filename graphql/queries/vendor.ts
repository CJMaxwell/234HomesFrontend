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
