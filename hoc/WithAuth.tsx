import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import cookies from 'next-cookies';
import redirect from '../utils/redirect';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export default function WithAuth(WrappedComponent: ComponentType<any>) {
  function fn(props: Props) {
    return <WrappedComponent {...props} />;
  }
  fn.defaultProps = {};
  fn.getInitialProps = async (ctx: any) => {
    const { accessToken } = cookies(ctx);
    console.log(accessToken, '===sdf========');
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

  hoistNonReactStatics(fn, WrappedComponent);
  return fn;
}
