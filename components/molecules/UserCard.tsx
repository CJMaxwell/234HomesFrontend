import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const User = styled.div`
  .name,
  .postDate {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
  }
`;

const UserCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <User className="flex items-center">
      <img src="/img/profileImg.jpg" className="h-10 w-10 rounded-full inline-block" alt="User" />
      <span className="name font-semibold px-4">Mohammed Ismail</span>
      <span className="postDate">June 11, 2020</span>
    </User>
  );
};

export default UserCard;
