import { gql } from '@apollo/client';

export const ADD_STORY = gql`
  mutation addStory($file: Upload!, $input: PostInput!) {
    addPost(file: $file, input: $input) {
      id
    }
  }
`;
