import { NextPage } from "next";
import withApollo from "../lib/withApollo";

import Home from "../components/templates/Home";

const IndexPage: NextPage = () => {
  //const theme = useContext(ThemeContext);
  return (
    <>
      <Home />
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);
