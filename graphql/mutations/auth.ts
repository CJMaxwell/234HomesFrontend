import { gql } from '@apollo/client';

export const SEND_PHONE_VERIFICATION = gql`
  mutation sendPhoneVerification($phoneNumber: String!) {
    sendPhoneVerification(phoneNumber: $phoneNumber) {
      message
    }
  }
`;

export const REGISTER_BY_PHONE = gql`
  mutation registerByPhone($input: RegisterByPhoneInput!) {
    registerByPhone(input: $input) {
      accessToken
      expiresAt
    }
  }
`;

export const LOGIN_BY_PHONE = gql`
  mutation loginByPhone($input: LoginByPhoneInput!) {
    loginByPhone(input: $input) {
      accessToken
      expiresAt
    }
  }
`;
