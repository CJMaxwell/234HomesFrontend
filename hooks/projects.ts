import { useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { PROJECTS, USER_PROJECTS } from '../graphql/queries/project';

export const useRprojects = (id?: string) => {
  const { data, loading } = useQuery(USER_PROJECTS, {
    variables: { id },
  });

  return {
    projects: data?.projects || data?.userProjects,
    loading,
  };
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
