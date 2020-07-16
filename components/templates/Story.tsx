import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';


import ProfileNavbar from '../Organisms/ProfileNavbar';
import Offering from '../Organisms/Offering';
import Footer from './Footer';

const Wrapper = styled.div`

  .recommended {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5}
  }
  .recommended {
    font-weight: 600;
  }
  
`;

const Story = () => {

  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto mb-48">
        <Offering />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Story
