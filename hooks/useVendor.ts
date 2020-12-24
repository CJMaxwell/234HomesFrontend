import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { VENDORS } from '../graphql/queries/vendor';

export const useVendor = () => {
  const [query, { data, loading }] = useLazyQuery(VENDORS);
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
    vendors: data?.vendors,
    loading
  };

}

export default useVendor;
