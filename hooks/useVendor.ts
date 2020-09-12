import { useQuery } from '@apollo/react-hooks';
import { VENDORS } from '../graphql/queries/vendor';

export default function useVendor() {
  const { data, loading: vendorLoading } = useQuery(VENDORS);

  return {
    vendors: data?.vendors,
    vendorLoading
  };

}
