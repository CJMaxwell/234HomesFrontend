import { useQuery } from '@apollo/react-hooks';
import { GALLERY } from '../graphql/queries/gallery';


export default function useGallery() {
  const { data, loading } = useQuery(GALLERY);
  return {
    galleries: data?.gallery,
    loading
  };

}