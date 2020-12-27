import React from 'react';
import { NextPage } from 'next';

import Dashboard from '../../components/templates/Dashboard';
import WithAuth from '../../hoc/WithAuth';

const DashboardPage: NextPage = () => {
  return <Dashboard />;
};

export default WithAuth(DashboardPage);
