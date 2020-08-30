import React from 'react';
import { NextPage } from 'next';

import DashboardType from '../components/templates/DashboardType';
import WithAuth from '../hoc/WithAuth';

const DashboardTypePage: NextPage = () => {
  return <DashboardType />;
};

export default WithAuth(DashboardTypePage);
