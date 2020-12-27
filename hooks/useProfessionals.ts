import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { PROFESSIONALS } from '../graphql/queries/professional';

const useProfessionals = () => {
  const [query, { data, loading }] = useLazyQuery(PROFESSIONALS);
  const search = (params: { searchTerm: string; location: string }) => {
    const { searchTerm, location } = params;

    query({
      variables: {
        where: {
          searchTerm,
          location,
        },
      },
    });
  };

  useEffect(() => {
    query();
  }, []);

  return {
    search,
    professionals: data?.professionals,
    loading,
  };
};

export default useProfessionals;
