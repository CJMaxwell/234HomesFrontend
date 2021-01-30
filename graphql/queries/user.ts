import { gql } from '@apollo/client';

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

export const USERS = gql`
  query users {
    users {
      id
      firstName
      lastName
      phoneNumber
      accountType
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

export const FEATURED_PROFESSIONALS = gql`
  query featuredProfessionals {
    featuredProfessionals {
      id
      firstName
      lastName
      phoneNumber
      profilePhoto
      occupation
      banner
      city
      state
    }
  }
`;
