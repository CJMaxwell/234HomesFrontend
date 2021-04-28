import { useQuery } from '@apollo/client';
import { USER_PROJECTS } from '../graphql/queries/project';

export default function useProject(id = '') {
  const { data, loading: projectsLoading } = useQuery(USER_PROJECTS, {
    variables: { id },
  });

  return {
    projects: data?.project,
    projectsLoading,
  };
}
