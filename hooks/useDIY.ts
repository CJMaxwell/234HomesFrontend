import { useQuery } from '@apollo/client';
import { DIY, DIYS } from '../graphql/queries/diy';

export default function useDIY(id?: string) {
  const query = id ? DIY : DIYS;
  const variables = id ? { id } : null;
  const { data, loading } = useQuery(query, {
    variables,
  });

  return {
    diy: data?.diy,
    diys: data?.diys,
    loading,
  };
}
