import { NextPage } from 'next';

import Home from '../components/templates/Home';
// import { useContext } from 'react';
// import { ThemeContext } from 'styled-components';

// import Navbar from '../components/Organisms/Navbar';
// import PostCard from '../components/Organisms/PostCard';
// import ProfessionalCard from '../components/Organisms/ProfessionalCard';
// import DIYCard from '../components/Organisms/DIYCard';
// import Footer from '../components/templates/Footer';

const IndexPage: NextPage = () => {
  //const theme = useContext(ThemeContext);
  return (
    <>
      <Home />
      {/* <Navbar />
      <PostCard />
      <ProfessionalCard />
      <DIYCard />
      <Footer /> */}
    </>
  );
};

export default IndexPage;
