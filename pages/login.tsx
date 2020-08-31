import React from 'react';
import { NextPage } from 'next';
import Login from '../components/templates/Login';
import withApollo from '../lib/withApollo';

const LoginPage: NextPage = () => {
  return <Login />;
};

export default withApollo()(LoginPage);
