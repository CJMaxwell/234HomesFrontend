import { useQuery } from '@apollo/client';
import { MOST_VIEWED_PRODUCTS } from '../graphql/queries/product';

const useMostViewedProducts = () => {
  const { data, loading } = useQuery(MOST_VIEWED_PRODUCTS);

  return {
    mvps: data?.mostViewedProducts,
    mvpsLoading: loading,
  };
};

export default useMostViewedProducts;