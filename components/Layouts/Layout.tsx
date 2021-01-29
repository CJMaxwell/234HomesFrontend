import React from 'react';
import styled from 'styled-components';
import Navbar from '../Organisms/Navbar';
import Footer from '../templates/Footer';



const Wrapper = styled.section`
  .breadcrumb li:not(:last-child) {
     padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .main {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    margin-left: 1.7rem;
    padding: 0 2.65rem;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
