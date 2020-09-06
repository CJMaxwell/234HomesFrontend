import React from 'react';
import styled from 'styled-components';

const User = styled.div`
  .name{
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
  }
`;

const UserRatingCard = () => {
  return (
    <User className="flex items-center">
      <div>
        <img src="/img/profileImg.jpg" className="h-10 w-10 rounded-full inline-block" alt="User" />
      </div>
      <div className="px-4">
        <h1 className="name font-semibold">Mohammed Madu</h1>
        <ul className="flex items-center mt-2">
          <li className="pr-1">
            <img src="/img/star-user-rating.svg" alt="stars" />
          </li>
          <li className="pr-1">
            <img src="/img/star-user-rating.svg" alt="stars" />
          </li>
          <li className="pr-1">
            <img src="/img/star-user-rating.svg" alt="stars" />
          </li>
          <li className="pr-1">
            <img src="/img/star-user-rating.svg" alt="stars" />
          </li>
          <li>
            <img src="/img/star-user-rating.svg" alt="stars" />
          </li>
        </ul>
      </div>
    </User>
  );
};

export default UserRatingCard;
