import { NextPage } from 'next';
import React from 'react';

import Vendor from '../components/templates/Vendor';
import WithAuth from '../hoc/WithAuth';

const VendorPage: NextPage = () => {
  return (
    <>
      <Vendor />
    </>
  );
};

export default WithAuth(VendorPage);
