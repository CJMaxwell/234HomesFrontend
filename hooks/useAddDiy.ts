import { useMutation } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import Router from 'next/router';

import { ADD_DIY } from '../graphql/mutations/diy';

export default function useAddDiy() {
  const [mutate, { loading }] = useMutation(ADD_DIY);
  const addDiy = (input: any) => {
    mutate({
      variables: {
        input,
      },
    })
      .then(() => {
        Router.push('/dashboard/diy');
      })
      .catch((err) => {
        notify.show('DIY could not be added.', 'error');
      });
  };

  return {
    addDiy,
    loading,
  };
}
