import { useQuery } from '@apollo/react-hooks';
import { HOUSE_TOUR, HOUSE_TOURS } from '../graphql/queries/houseTour';

export default function useHouseTours(id?: string) {
  const query = id ? HOUSE_TOUR : HOUSE_TOURS;
  const variables = id ? { id } : null;
  const { data, loading } = useQuery(query, {
    variables,
  });

  return {
    houseTour: data?.houseTour,
    houseTours: data?.houseTours,
    loading,
  };
}
