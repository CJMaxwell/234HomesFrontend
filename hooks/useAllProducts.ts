import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS } from '../graphql/queries/product';


export default function useAllProducts() {
  const { data, loading } = useQuery(PRODUCTS);

  return {
    products: data?.products,
    loading
  }
}