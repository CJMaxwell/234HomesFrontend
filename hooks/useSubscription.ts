import { useMutation } from '@apollo/client';
import { notify } from 'react-notify-toast';
import { SUBSCRIBE } from '../graphql/mutations/subscription';

export default function useProjects() {
  const [mutate, { loading: subscribeLoading }] = useMutation(SUBSCRIBE);
  const subscribe = (input: any) => {
    mutate({
      variables: {
        input,
      },
    })
      .then(({ data }) => {
        window.location.replace(data?.subscribe?.paymentLink);
      })
      .catch((err) => {
        console.error({ err });
        notify.show('Failed to initiate payment.', 'error');
      });
  };

  return {
    subscribe,
    subscribeLoading,
  };
}
