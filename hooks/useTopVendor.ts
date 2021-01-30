import { useQuery } from '@apollo/client';
import { TOPVENDORS } from '../graphql/queries/vendor';

const useTopVendor = () => {
  const { data, loading } = useQuery(TOPVENDORS);

  return {
    vendors: data?.topVendors,
    loading,
  };
};

export default useTopVendor;