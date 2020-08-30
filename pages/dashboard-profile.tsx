import { NextPage } from 'next';
import React from 'react';

import DashboardProfile from '../components/templates/DashboardProfile';
import withApollo from '../lib/withApollo';
import WithAuth from '../hoc/WithAuth';

const DashboardProfilePage: NextPage = () => {
  return (
    <>
      <DashboardProfile />
    </>
  );
};

export default withApollo()(WithAuth(DashboardProfilePage));
