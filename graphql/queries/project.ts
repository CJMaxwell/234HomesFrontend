import { gql } from 'apollo-boost';
export const USER_PROJECTS = gql`
  query userProjects {
    userProjects {
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