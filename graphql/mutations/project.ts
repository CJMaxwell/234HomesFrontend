import { gql } from 'apollo-boost';

export const ADD_PROJECT = gql`
  mutation addProject($file: Upload!, $input: ProjectInput!) {
    addProject(file: $file, input: $input) {
      id
    }
  }
`;
