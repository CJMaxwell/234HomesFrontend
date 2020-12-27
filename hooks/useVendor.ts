import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { VENDORS } from '../graphql/queries/vendor';

const useVendor = () => {
  const [query, { data, loading }] = useLazyQuery(VENDORS);
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
    vendors: data?.vendors,
    loading,
  };
};

export default useVendor;
