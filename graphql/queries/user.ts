import { gql } from 'apollo-boost';

export const USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
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