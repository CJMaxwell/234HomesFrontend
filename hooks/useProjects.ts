import { useMutation, useQuery } from '@apollo/react-hooks';
import { notify } from 'react-notify-toast';
import Router from 'next/router';

import { ADD_PROJECT } from '../graphql/mutations/project';
import { USER_PROJECTS } from '../graphql/queries/project';


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
        Router.push('/dashboard/projects');
      })
      .catch((err) => {
        notify.show('Project could not be added.', 'error');
      });
  };
  const { data, loading: projectLoading } = useQuery(USER_PROJECTS);

  return {
    addProject,
    addProjectLoading,
    projects: data?.userProjects,
    projectLoading
  };
}
