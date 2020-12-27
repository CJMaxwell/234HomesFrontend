import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { notify } from 'react-notify-toast';
import Cookies from 'js-cookie';
import {
  SEND_PHONE_VERIFICATION,
  REGISTER_BY_PHONE,
  LOGIN_BY_PHONE,
} from '../graphql/mutations/auth';

function useOnline() {
  const [online, setOnline] = useState(false);
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      setOnline(true);
    }
  }, []);
  // const client = useApolloClient();

  function logOut() {
    // client.clearStore().then(() => {
    Cookies.remove('accessToken');
    Router.push('/login');
    // });
  }

  return { online, logOut };
}

export default function useAuth() {
  const [sendPhoneVerification, { loading: sendPhoneVerificationLoading }] = useMutation(
    SEND_PHONE_VERIFICATION,
  );

  const [registerByPhoneMutation, { loading: registerByPhoneLoading }] = useMutation(
    REGISTER_BY_PHONE,
  );

  const [loginByPhoneMutation, { loading: loginByPhoneLoading }] = useMutation(LOGIN_BY_PHONE);

  const { online, logOut } = useOnline();

  const registerByPhone = (variables: any) => {
    registerByPhoneMutation(variables)
      .then(({ data: { registerByPhone: response } }: any) => {
        Cookies.set('accessToken', response.accessToken);
        // Cookies.set('role', response.user.role);

        if (variables.input.accountType !== 'individual') {
          Router.push('/membership-package');
        } else {
          Router.push('/dashboard');
        }
      })
      .catch((err) => {
        notify.show(err.graphQLErrors?.[0].message, 'error');
      });
  };

  const loginByPhone = (variables: any) => {
    loginByPhoneMutation(variables)
      .then(({ data: { loginByPhone: response } }) => {
        Cookies.set('accessToken', response.accessToken);
        Router.push('/dashboard');
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
    online,
    logOut,
    loginByPhoneLoading,
    loginByPhone,
  };
}
