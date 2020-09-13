import { NextPage } from 'next';
import React from 'react';

import Vendors from '../../components/templates/Vendors';
import WithAuth from '../../hoc/WithAuth';

const VendorPage: NextPage = () => {
  return (
    <>
      <Vendors />
    </>
  );
};

export default WithAuth(VendorPage);
