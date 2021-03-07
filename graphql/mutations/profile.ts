import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      firstName
      lastName
      phoneNumber
      email
      phoneVerified
      emailVerified
      profilePhoto
      banner
      businessName
      website
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

export const UPLOAD_PROFILE_PHOTO = gql`
  mutation uploadProfilePhoto($file: Upload!) {
    uploadProfilePhoto(file: $file) {
      profilePhoto
    }
  }
`;

export const UPLOAD_BANNER = gql`
  mutation uploadBanner($file: Upload!) {
    uploadBanner(file: $file) {
      banner
    }
  }
`;

export const INITIATE_RESET_PASSWORD = gql`
  mutation initiateResetPassword($phoneNumber: String!) {
    initiateResetPassword(phoneNumber: $phoneNumber){
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetpassword($input:ResetPasswordInput!){
    resetPassword(input: $input){
      message
    }
  }
`;