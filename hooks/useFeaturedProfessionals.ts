import { useQuery } from '@apollo/client';
import { FEATURED_PROFESSIONALS } from '../graphql/queries/user';

const useFeaturedProfessionals = () => {
  const { data, loading } = useQuery(FEATURED_PROFESSIONALS);

  return {
    featPros: data?.featuredProfessionals,
    featProLoading: loading,
  };
};

export default useFeaturedProfessionals;