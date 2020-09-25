import { useQuery } from '@apollo/react-hooks';
import { PROJECTS, USER_PROJECTS } from '../graphql/queries/project';


export default function useAllProjects(id?: string) {
  const query = id ? USER_PROJECTS : PROJECTS;
  const variables = id ? { id } : null;
  const { data, loading } = useQuery(query, {
    variables
  });

  return {
    projects: data?.projects || data?.userProjects,
    loading
  }
}