import { useMutation } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import Router from 'next/router';
import { ADD_PROJECT } from '../graphql/mutations/project';

export default function useProjects() {
  const [mutate, { loading: addProjectLoading }] = useMutation(ADD_PROJECT);
  const addProject = (file: any, input: any) => {
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
        notify.show('Project could not be added.', 'error');
      });
  };

  return {
    addProject,
    addProjectLoading,
  };
}
