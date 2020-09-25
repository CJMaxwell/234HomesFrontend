import { useQuery } from '@apollo/react-hooks';
import { PROJECT } from '../graphql/queries/project';


export default function useProject(id: string) {
  const { data, loading: projectLoading } = useQuery(PROJECT, {
    variables: { id },
  });

  return {
    project: data?.project,
    projectLoading
  }
}