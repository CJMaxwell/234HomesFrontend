import { useQuery } from '@apollo/client';
import { PROJECT } from '../graphql/queries/project';

export default function useProject(id = '') {
  const { data, loading: projectLoading } = useQuery(PROJECT, {
    variables: { id },
  });

  return {
    project: data?.project,
    projectLoading,
  };
}
