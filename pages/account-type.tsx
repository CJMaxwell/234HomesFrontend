import React from 'react';
import { NextPage } from 'next';

import DashboardType from '../components/templates/DashboardType';
import WithAuth from '../hoc/WithAuth';
import withApollo from '../lib/withApollo';

const DashboardTypePage: NextPage = () => {
  return <DashboardType />;
};

export default withApollo()(WithAuth(DashboardTypePage));
