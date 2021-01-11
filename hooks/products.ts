import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { PRODUCTS, USER_PRODUCTS } from '../graphql/queries/product';

export const useRproducts = () => {
  const [query, { data, loading }] = useLazyQuery(USER_PRODUCTS);

  const get = (userId: string) => {
    query({
      variables: {
        id: userId,
      },
    });
  };

  return {
    products: data?.userProducts,
    loading,
    get,
  } as const;
};

export const useProducts = () => {
  const [getProducts, { data, loading }] = useLazyQuery(PRODUCTS);
  const search = (params: {
    searchTerm: string;
    location: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => {
    const {
      searchTerm,
      // location,
      category,
      minPrice,
      maxPrice,
    } = params;

    getProducts({
      variables: {
        where: {
          searchTerm,
          // location,
          category,
          minPrice,
          maxPrice,
        },
      },
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    search,
    loading,
    products: data?.products,
  };
};
