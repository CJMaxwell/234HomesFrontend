import { useQuery } from '@apollo/react-hooks';
import { USER } from '../graphql/queries/user';


export default function useUser(id: string) {
  const { loading: userLoading, data } = useQuery(USER, {
    variables: { id },
  });

  return {
    user: data?.user,
    userLoading
  }
}