import { gql } from 'apollo-boost';

export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: UpdateMeInput!) {
    updateProfile(input: $input) {
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
      createdAt
      updatedAt
    }
  }
`;
