import { gql } from '@apollo/client';

export const STORIES = gql`
  query posts($input: PostSearchInput!) {
    posts(input: $input) {
      id
      title
      banner
      status
      featured
      summary
      createdAt
    }
  }
`;

export const STORY = gql`
  query post($id: String!) {
    post(id: $id) {
      id
      title
      slug
      summary
      banner
      featured
      status
      body
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const FEATUREDSTORY = gql`
  query featuredPosts {
    featuredPosts {
      id
      title
      summary
      banner
      body
      createdAt
    }
  }
`;
