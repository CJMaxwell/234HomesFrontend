import { useMutation, useApolloClient } from '@apollo/client';
import Router from 'next/router';
import { notify } from 'react-notify-toast';
import Cookies from 'js-cookie';
import {
  SEND_PHONE_VERIFICATION,
  REGISTER_BY_PHONE,
  LOGIN_BY_PHONE,
  LOG_OUT,
} from '../graphql/mutations/auth';
import { useLocalStorage } from './storage';

export function useOnline() {
  const { data: online, setData } = useLocalStorage<boolean>('online', false);

  const setOnline = async () => {
    setData(true);
  };

  return { online, setOnline } as const;
}

export default function useAuth() {
  const { setOnline } = useOnline();
  const { clear } = useLocalStorage('online', false);

  const [sendPhoneVerification, { loading: sendPhoneVerificationLoading }] = useMutation(
    SEND_PHONE_VERIFICATION,
  );
  const [registerByPhoneMutation, { loading: registerByPhoneLoading }] = useMutation(
    REGISTER_BY_PHONE,
  );
  const [loginByPhoneMutation, { loading: loginByPhoneLoading }] = useMutation(LOGIN_BY_PHONE);
  const [logoutMutute] = useMutation(LOG_OUT);

  const registerByPhone = (variables: any) => {
    registerByPhoneMutation(variables)
      .then(() => {
        setOnline();
        if (variables?.input?.accountType !== 'individual') {
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
        Cookies.set('Authorization', response.accessToken, {
          expires: 7323233,
          path: '/',
          domain: '.herokuapp.com',
        });
        // setOnline();
        // Router.push('/dashboard');
      })
      .catch((err) => {
        notify.show(err.graphQLErrors?.[0].message, 'error');
      });
  };

  const client = useApolloClient();
  const logOut = async () => {
    clear();
    await client.clearStore();
    await logoutMutute();
    Router.push('/login');
  };

  return {
    sendPhoneVerification,
    sendPhoneVerificationLoading,
    registerByPhone,
    registerByPhoneLoading,
    logOut,
    loginByPhoneLoading,
    loginByPhone,
  } as const;
}
