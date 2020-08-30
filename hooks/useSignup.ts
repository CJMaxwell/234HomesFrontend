import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
import { notify } from 'react-notify-toast';
import Cookies from 'js-cookie';
import { SEND_PHONE_VERIFICATION, REGISTER_BY_PHONE } from '../graphql/mutations/register';

export default function useSignUp() {
  const [sendPhoneVerification, { loading: sendPhoneVerificationLoading }] = useMutation(
    SEND_PHONE_VERIFICATION,
  );

  const [registerByPhoneMutation, { loading: registerByPhoneLoading }] = useMutation(
    REGISTER_BY_PHONE,
  );
  const registerByPhone = (variables: any) => {
    registerByPhoneMutation(variables)
      .then(({ data: { registerByPhone: response } }: any) => {
        Cookies.set('accessToken', response.accessToken);
        // Cookies.set('role', response.user.role);

        Router.push('/account-type');
      })
      .catch((err) => {
        notify.show(err.graphQLErrors?.[0].message, 'error');
      });
  };

  return {
    sendPhoneVerification,
    sendPhoneVerificationLoading,
    registerByPhone,
    registerByPhoneLoading,
  };
}
