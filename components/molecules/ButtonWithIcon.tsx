import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import SiteLink from '../atoms/SiteLink';

const iconStyle = {
  display: 'inline-block',
  height: '15px',
};

const ButtonWithIcon = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <SiteLink className="text-center">
        <img className="inline pr-1" style={iconStyle} src="/user.svg" alt="Sign up" />
        Sign up
      </SiteLink>
    </>
  );
};

export default ButtonWithIcon;
