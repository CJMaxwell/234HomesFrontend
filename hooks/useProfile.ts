import { useMutation, useQuery } from '@apollo/react-hooks';
import { useState, useEffect } from 'react';
import { UPDATE_PROFILE } from '../graphql/mutations/profile';
import { IProfile } from '../@types';
import { PROFILE } from '../graphql/queries/profile';

interface Query {
  profile?: IProfile;
}
export default function useProfile() {
  const [profile, setProfile] = useState<IProfile | undefined>(undefined);

  const [updateProfileMutation, { loading: updateProfileLoading }] = useMutation(UPDATE_PROFILE);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function updateProfile(variables: any, callback = () => {}) {
    updateProfileMutation(variables).then(({ data }) => {
      setProfile(data.updateProfile);
      callback();
    });
  }

  const { data, loading: getProfileLoading } = useQuery<Query>(PROFILE);

  useEffect(() => {
    setProfile(data?.profile);
  }, [data]);

  return {
    updateProfile,
    updateProfileLoading,
    profile,
    getProfileLoading,
  };
}
