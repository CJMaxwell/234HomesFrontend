import React from 'react';
import styled from 'styled-componenents';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Offering from '../Organisms/Offering';
import Footer from './Footer';

const Wrapper = styled.section`


`;

const Membership = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto mb-48">
        <Offering />
        <ul className="breadcrumb flex items-center">
          <li>Company</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Membership Packages</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Membership
