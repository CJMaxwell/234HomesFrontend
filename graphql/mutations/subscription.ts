import { gql } from 'apollo-boost';

export const SUBSCRIBE = gql`
  mutation subscribe($input: SubscriptionInput!) {
    subscribe(input: $input) {
      paymentLink
    }
  }
`;
