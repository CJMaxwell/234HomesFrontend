import React from 'react';
import { NextPage } from 'next';

import ProfessionalProfileUpdate from '../../components/templates/ProfessionalProfileUpdate';
import withApollo from '../../lib/withApollo';
import WithAuth from '../../hoc/WithAuth';

const ProfessionalProfileUpdatePage: NextPage = () => {
  return (
    <>
      <ProfessionalProfileUpdate />
    </>
  );
};

export default withApollo()(WithAuth(ProfessionalProfileUpdatePage));
