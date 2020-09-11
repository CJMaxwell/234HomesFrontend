import { useMutation } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import Router from 'next/router';

import { ADD_PRODUCT } from '../graphql/mutations/product';

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
  return {
    addProduct,
    addProductLoading,
  };
}