import React from 'react';
import { NextPage, NextPageContext } from 'next';

import Verify from '../components/templates/Verify';
import withApollo from '../lib/withApollo';

const VerifyPage: NextPage = ({ query }: any) => {
  return (
    <>
      <Verify phone={query.phone} />
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  if (!ctx.query.phone) {
    ctx.res?.writeHead(302, { Location: '/signup' });
    ctx.res?.end();
  }

  return {
    props: {
      query: ctx.query,
    },
  };
}
export default withApollo()(VerifyPage);
