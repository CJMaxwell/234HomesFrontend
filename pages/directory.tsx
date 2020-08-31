import { NextPage } from 'next';
import React from 'react';

import Directory from '../components/templates/Directory';
import withApollo from '../lib/withApollo';
import WithAuth from '../hoc/WithAuth';

const DirectoryPage: NextPage = () => {
  return (
    <>
      <Directory />
    </>
  );
};

export default withApollo()(WithAuth(DirectoryPage));
