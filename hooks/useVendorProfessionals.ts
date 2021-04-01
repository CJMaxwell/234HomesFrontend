import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { VENDOR_PROFESSIONALS } from '../graphql/queries/vendorProfessional';

const useVendorProfessionals = () => {
  const [query, { data, loading }] = useLazyQuery(VENDOR_PROFESSIONALS);
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

export default useVendorProfessionals;
