import { useQuery } from '@apollo/client';
import { FEATURED_HOUSE_TOUR } from '../graphql/queries/houseTour';

const useFeaturedHouseTours = () => {
  const { data, loading } = useQuery(FEATURED_HOUSE_TOUR);

  return {
    featuredHT: data?.featuredHouseTours,
    fHTLoading: loading,
  };
};

export default useFeaturedHouseTours;