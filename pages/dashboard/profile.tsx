import { NextPage } from 'next';
import React from 'react';

import DashboardProfile from '../../components/templates/DashboardProfile';

import WithAuth from '../../hoc/WithAuth';

const DashboardProfilePage: NextPage = () => {
  return (
    <>
      <DashboardProfile />
    </>
  );
};

export default WithAuth(DashboardProfilePage);
