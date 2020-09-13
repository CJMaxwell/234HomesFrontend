import { useQuery } from '@apollo/react-hooks';
import { PROFESSIONALS } from '../graphql/queries/professional';

export default function useProfessional() {
  const { data, loading: ProfessionalLoading } = useQuery(PROFESSIONALS);

  return {
    professionals: data?.professionals,
    ProfessionalLoading
  };

}
