import { useQuery } from '@apollo/react-hooks';
import { USER, USERS } from '../graphql/queries/user';


export default function useUser(id?: string) {
  const query = id ? USER : USERS;
  const variables = id ? { id } : null;
  const { data, loading } = useQuery(query, {
    variables,
  });

  return {
    user: data?.user,
    users: data?.users,
    loading
  }
}