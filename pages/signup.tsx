import { NextPage } from 'next';

import Signup from '../components/templates/Signup';
import withApollo from '../lib/withApollo';

const SignupPage: NextPage = () => {
  // const theme = useContext(ThemeContext);
  return (
    <>
      <Signup />
    </>
  );
};

// export default SignupPage;
export default withApollo()(SignupPage);
