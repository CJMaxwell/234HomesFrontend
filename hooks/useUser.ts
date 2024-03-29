import { useQuery } from '@apollo/client';
import { USER, USERS } from '../graphql/queries/user';

export default function useUser(id?: string) {
  const query = id ? USER : USERS;
  const variables = id ? { id } : null;
  const { data, loading: userLoading } = useQuery(query, {
    variables,
  });

  return {
    user: data?.user,
    users: data?.users,
    userLoading,
  };
}
