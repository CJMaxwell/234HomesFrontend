import { useMutation, useQuery } from '@apollo/react-hooks';
import { useState, useEffect } from 'react';
import { notify } from 'react-notify-toast';
import { UPDATE_PROFILE, UPLOAD_PROFILE_PHOTO } from '../graphql/mutations/profile';
import { IProfile } from '../@types';
import { PROFILE } from '../graphql/queries/profile';

interface Query {
  profile?: IProfile;
}
export default function useProfile() {
  const [profile, setProfile] = useState<IProfile | undefined>(undefined);

  const [updateProfileMutation, { loading: updateProfileLoading }] = useMutation(UPDATE_PROFILE);
  const [profilePhotoMutate, { loading: profilePhotoLoading }] = useMutation(UPLOAD_PROFILE_PHOTO);


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function updateProfile(variables: any, callback = () => { }) {
    updateProfileMutation(variables).then(({ data }) => {
      setProfile(data.updateProfile);
      notify.show('Profile updated successfully', 'success');
      callback();
    });
  }

  const { data, refetch, loading: getProfileLoading } = useQuery<Query>(PROFILE);

  useEffect(() => {
    setProfile(data?.profile);
  }, [data]);


  function uploadProfilePhoto(file: any) {
    profilePhotoMutate({ variables: { file } }).then(() => {
      refetch();
      notify.show('Profile Photo updated successfully', 'success');
    });
  }

  return {
    updateProfile,
    updateProfileLoading,
    profile,
    getProfileLoading,
    uploadProfilePhoto,
    profilePhotoLoading
  };
}
