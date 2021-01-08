import { gql } from '@apollo/client';

export const USER_PROJECTS = gql`
  query userProjects($id: String!) {
    userProjects(id: $id) {
      id
      title
      category
      tags
      colors
      year
      city
      state
      media
      description
    }
  }
`;

export const PROJECT = gql`
  query project($id: String!) {
    project(id: $id) {
      id
      title
      category
      tags
      colors
      year
      city
      state
      media
      description
    }
  }
`;
export const PROJECTS = gql`
  query projects {
    projects {
      id
      title
      category
      tags
      colors
      year
      city
      state
      media
      description
    }
  }
`;
