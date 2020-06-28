import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import SiteLink from '../atoms/SiteLink';

const iconStyle = {
  display: 'inline-block',
  height: '15px',
};

const ButtonWithIcon = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <SiteLink bgColor={theme.colors.gray1} className="text-center">
        <img
          className="inline pr-1"
          style={iconStyle}
          src="/user.svg"
          alt="Sign up"
        />
        Sign up
      </SiteLink>
    </>
  );
};

export default ButtonWithIcon;