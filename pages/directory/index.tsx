import { NextPage } from 'next';
import React from 'react';

import Directory from '../../components/templates/Directory';

import WithAuth from '../../hoc/WithAuth';

const DirectoryPage: NextPage = () => {
  return (
    <>
      <Directory />
    </>
  );
};

export default WithAuth(DirectoryPage);
