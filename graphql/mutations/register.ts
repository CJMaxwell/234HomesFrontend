import { gql } from 'apollo-boost';

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
