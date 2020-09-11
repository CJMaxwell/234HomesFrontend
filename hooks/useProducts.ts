import { useMutation, useQuery } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import Router from 'next/router';

import { ADD_PRODUCT } from '../graphql/mutations/product';
import { USER_PRODUCTS } from '../graphql/queries/product';


export default function useProducts() {
  const [mutate, { loading: addProductLoading }] = useMutation(ADD_PRODUCT);
  const addProduct = (file: any, input: any) => {
    mutate({
      variables: {
        file,
        input,
      },
    })
      .then(() => {
        Router.push('/dashboard/products');
      })
      .catch((err) => {
        notify.show('Product could not be added.', 'error');
      });
  };

  const { data, loading: productLoading } = useQuery(USER_PRODUCTS);
  return {
    addProduct,
    addProductLoading,
    products: data?.userProducts,
    productLoading
  };
}