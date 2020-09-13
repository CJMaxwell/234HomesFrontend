import { gql } from 'apollo-boost';

export const USER = gql`
  query user($id: String!) {
    user(id: $id) {
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
      certifications {
        id
        title
        institution
        year
      }
      createdAt
    }
  }

`;