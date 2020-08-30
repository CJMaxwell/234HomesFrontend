import React from 'react';
import { NextPage } from 'next';

import Dashboard from '../components/templates/Dashboard';
import WithAuth from '../hoc/WithAuth';
import withApollo from '../lib/withApollo';

const DashboardPage: NextPage = () => {
  return <Dashboard />;
};

export default withApollo()(WithAuth(DashboardPage));
