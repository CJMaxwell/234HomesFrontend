import { gql } from '@apollo/client';

export const SUBSCRIBE = gql`
  mutation subscribe($input: SubscriptionInput!) {
    subscribe(input: $input) {
      paymentLink
    }
  }
`;
