import React from 'react';
import { NextPage } from 'next';

import VendorProfileUpdate from '../../components/templates/VendorProfileUpdate';
import withApollo from '../../lib/withApollo';
import WithAuth from '../../hoc/WithAuth';

const VendorProfileUpdatePage: NextPage = () => {
  return (
    <>
      <VendorProfileUpdate />
    </>
  );
};

export default withApollo()(WithAuth(VendorProfileUpdatePage));
