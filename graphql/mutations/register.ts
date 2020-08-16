import { gql } from "apollo-boost";

export const SEND_PHONE_VERIFICATION = gql`
  mutation sendPhoneVerification($phoneNumber: String!) {
    sendPhoneVerification(phoneNumber: $phoneNumber) {
      message
    }
  }
`;
