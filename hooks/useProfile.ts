import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { notify } from 'react-notify-toast';
import Router from 'next/router';

import { UPDATE_PROFILE, UPLOAD_PROFILE_PHOTO, UPLOAD_BANNER, INITIATE_RESET_PASSWORD, RESET_PASSWORD } from '../graphql/mutations/profile';
import { IProfile } from '../@types';
import { PROFILE } from '../graphql/queries/profile';

interface Query {
  profile?: IProfile;
}
export default function useProfile() {
  const [profile, setProfile] = useState<IProfile | undefined>(undefined);

  const [updateProfileMutation, { loading: updateProfileLoading }] = useMutation(UPDATE_PROFILE);
  const [profilePhotoMutate, { loading: profilePhotoLoading }] = useMutation(UPLOAD_PROFILE_PHOTO);
  const [bannerMutate, { loading: bannerLoading }] = useMutation(UPLOAD_BANNER);
  const [initiateResetPasswordMutation, {loading: initiateResetPasswordLoading}] = useMutation(INITIATE_RESET_PASSWORD);
  const [resetPasswordMutation, {loading: resetPasswordLoading}] = useMutation(RESET_PASSWORD);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function updateProfile(variables: any, callback = () => {}) {
    updateProfileMutation(variables)
      .then(({ data }) => {
        setProfile(data.updateProfile);
        notify.show('Profile updated successfully', 'success');
        callback();
      })
      .catch(() => {
        notify.show('Profile was not updated', 'error');
      });
  }

  const [getProfile, { loading: getProfileLoading, data, refetch }] = useLazyQuery<Query>(PROFILE);

  useEffect(() => {
    if (typeof window === undefined) {
      return;
    }
    const canMakeRequest = Cookies.get('Authorization');

    if (canMakeRequest) {
      getProfile();
    }

    setProfile(data?.profile);
  }, [data]);

  function uploadProfilePhoto(file: any) {
    profilePhotoMutate({ variables: { file } }).then(() => {
      refetch();
      notify.show('Profile Photo updated successfully', 'success');
    });
  }

  function uploadBanner(file: any) {
    bannerMutate({ variables: { file } })
      .then(() => {
        console.log('uploaded');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function initiateResetPassword(phoneNumber: string) {
    initiateResetPasswordMutation({
      variables: {
        phoneNumber,
      },
    })
      .then(() => {
        notify.show('A password reset code has been sent.', 'success');
        Router.push('/reset-password');
      })
      .catch((err) => {
        notify.show('Reset code was not sent.', 'error');
      });
  };
  function resetPassword(input: any) {
    resetPasswordMutation({
      variables: {
        input,
      },
    })
      .then(() => {
        notify.show('Successful password reset.', 'success');
        Router.push('/login');
      })
      .catch((err) => {
        notify.show('Unable to reset password.', 'error');
      });
  };

  return {
    updateProfile,
    updateProfileLoading,
    profile,
    getProfileLoading,
    uploadProfilePhoto,
    profilePhotoLoading,
    uploadBanner,
    bannerLoading,
    initiateResetPassword,
    initiateResetPasswordLoading,
    resetPassword,
    resetPasswordLoading
  };
}
