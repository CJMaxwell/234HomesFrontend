import { useQuery } from '@apollo/client';
import { PRODUCT } from '../graphql/queries/product';

export default function useProduct(id: string) {
  const { data, loading: productLoading } = useQuery(PRODUCT, {
    variables: { id },
  });

  return {
    product: data?.product,
    productLoading,
  };
}
