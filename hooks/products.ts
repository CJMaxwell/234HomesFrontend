import { useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { PRODUCTS, USER_PRODUCTS } from '../graphql/queries/product';

export const useRproducts = (id?: string) => {
  const { data, loading } = useQuery(USER_PRODUCTS, {
    variables: { id },
  });

  return {
    products: data?.userProducts,
    loading,
  };
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
