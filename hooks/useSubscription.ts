import { useMutation } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import { SUBSCRIBE } from '../graphql/mutations/subscription';

export default function useProjects() {
  const [mutate, { loading: subscribeLoading, data }] = useMutation(SUBSCRIBE);
  const subscribe = (input: any) => {
    mutate({
      variables: {
        input,
      },
    })
      .then(() => {
        window.location.replace(data.subscribe.paymentLink);
      })
      .catch((err) => {
        console.error({ err });
        notify.show('Project could not be added.', 'error');
      });
  };

  return {
    subscribe,
    subscribeLoading,
  };
}
