import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { PROJECTS, USER_PROJECTS } from '../graphql/queries/project';

export const useRprojects = () => {
  const [query, { data, loading }] = useLazyQuery(USER_PROJECTS);

  const get = (userId: string) => {
    query({
      variables: {
        id: userId,
      },
    });
  };

  return {
    projects: data?.userProjects,
    loading,
    get,
  } as const;
};

export const useProjects = () => {
  const [getProjects, { data, loading }] = useLazyQuery(PROJECTS);
  const search = (params: { searchTerm: string; location: string }) => {
    const { searchTerm, location } = params;

    getProjects({
      variables: {
        where: {
          searchTerm,
          location,
        },
      },
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return {
    search,
    loading,
    projects: data?.projects,
  };
};
