import { useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { PRODUCTS, USER_PRODUCTS } from '../graphql/queries/product';


export const useUserProducts = (id: string) => {
  const query = id ? USER_PRODUCTS : PRODUCTS;

  const { data, loading } = useQuery(query, {
    variables: { id },
  });

  return {
    products: data?.userProducts,
    return {
      products: data?.userProducts,
      loading,
    }
  }
}

export const useProducts = () => {
  const [getProducts, { data, loading }] = useLazyQuery(PRODUCTS);
  const search = (
    searchTerm: string,
    location: string,
    category: string,
    minPrice: number,
    maxPrice: number
  ) => {
    getProducts({
      variables: {
        where: {
          searchTerm,
          location,
          category,
          minPrice,
          maxPrice
        }
      }
    });
  };


  useEffect(() => {
    getProducts()
  }, [])

  return {
    search,
    loading
  };
}}}}