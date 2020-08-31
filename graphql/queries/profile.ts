import { gql } from 'apollo-boost';

export const PROFILE = gql`
  query profile {
    profile {
      id
      firstName
      lastName
      phoneNumber
      email
      phoneVerified
      emailVerified
      profilePhoto
      address
      bio
      city
      state
      accountType
      occupation
      experienceLevel
      skills
      education {
        id
        title
        major
        year
        country
        institution
      }
      createdAt
      updatedAt
    }
  }
`;
