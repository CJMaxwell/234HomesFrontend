import { useMutation, useLazyQuery } from '@apollo/client';
import { notify } from 'react-notify-toast';
import Router from 'next/router';
import { ADD_STORY } from '../graphql/mutations/post';
import { STORIES } from '../graphql/queries/post';

const useStories = () => {
  const [addStoryMutate, { loading }] = useMutation(ADD_STORY);

  const addStory = (file: any, input: any) => {
    addStoryMutate({
      variables: {
        file,
        input,
      },
    })
      .then(({ data }) => {
        if (input.status === 'draft') {
          notify.show('Saved as draft!', 'success');
          Router.push(`/dashboard/stories/${data.addPost.id}`);
        } else {
          notify.show('Published!', 'success');
          Router.push('/dashboard/stories');
        }
      })
      .catch((err) => {
        notify.show('Stories could not be added.', 'error');
      });
  };

  const [query, { loading: storiesLoading, data: stories }] = useLazyQuery(STORIES);

  const getStories = (filter: { status?: boolean }) => {
    query({
      variables: {
        input: filter,
      },
    });
  };

  return {
    addStory,
    loading,
    stories,
    storiesLoading,
    getStories,
  };
};

export default useStories;
