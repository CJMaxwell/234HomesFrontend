import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS, USER_PRODUCTS } from '../graphql/queries/product';


export default function useAllProducts(id?: string) {
  const query = id ? USER_PRODUCTS : PRODUCTS;
  const variables = id ? { id } : null;
  const { data, loading } = useQuery(query, {
    variables
  });

  return {
    products: data?.products || data?.userProducts,
    loading
  }
}