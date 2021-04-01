import { gql } from '@apollo/client';

export const VENDOR_PROFESSIONALS = gql`
  query professionals($where: UserSearchInput) {
    professionals(where: $where) {
      id
      phoneNumber
      email
      profilePhoto
      banner
      website
      businessName
      address
      bio
      city
      state
      occupation
      experienceLevel
      createdAt
    }
  }
`;
