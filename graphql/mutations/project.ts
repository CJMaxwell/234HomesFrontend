import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject($file: Upload!, $input: ProjectInput!) {
    addProject(file: $file, input: $input) {
      id
    }
  }
`;
