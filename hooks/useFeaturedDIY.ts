import { useQuery } from '@apollo/client';
import { FEATUREDDIYS } from '../graphql/queries/diy';

const useFeaturedDIY = () => {
  const { data, loading } = useQuery(FEATUREDDIYS);

  return {
    featuredDiy: data?.featuredDiys,
    fDiyLoading: loading,
  };
};

export default useFeaturedDIY;