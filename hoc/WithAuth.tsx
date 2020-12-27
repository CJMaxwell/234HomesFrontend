import React, { ComponentType } from 'react';
import cookies from 'next-cookies';
import redirect from '../utils/redirect';

export default function WithAuth(WrappedComponent: ComponentType<any>) {
  function fn(props: Record<string, unknown>) {
    return <WrappedComponent {...props} />;
  }
  fn.defaultProps = {};
  fn.getInitialProps = async (ctx: any) => {
    const { accessToken } = cookies(ctx);
    // if (!accessToken && role !== 'user') {
    //   redirect(ctx.res, '/login');
    // }
    if (!accessToken) {
      redirect(ctx.res, '/login');
    }
    return {
      accessToken,
    };
  };

  return fn;
}
