import { gql } from '@apollo/client';

export const STORIES = gql`
  query posts($input: PostSearchInput!) {
    posts(input: $input) {
      id
      title
      banner
      status
      featured
    }
  }
`;
