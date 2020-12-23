import { gql } from 'apollo-boost';

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
