import { useQuery } from '@apollo/react-hooks';
import { PROFESSIONALS } from '../graphql/queries/professional';

export default function useVendor() {
  const { data, loading: ProfessionalLoading } = useQuery(PROFESSIONALS);

  return {
    professionals: data?.professionals,
    ProfessionalLoading
  };

}
