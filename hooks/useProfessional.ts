import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { PROFESSIONALS } from '../graphql/queries/professional';

const useProfessionals = () => {
  const [query, { data, loading }] = useLazyQuery(PROFESSIONALS);
  const search = (searchTerm: string, location: string) => {
    query({
      variables: {
        where: {
          searchTerm,
          location
        }
      }
    });
  };


  useEffect(() => {
    query()
  }, [])


  return {
    search,
    professionals: data?.professionals,
    loading
  };
}

export default useProfessionals;