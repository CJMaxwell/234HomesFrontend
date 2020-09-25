import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const User = styled.div`
  .name,
  .postDate {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
  }
`;
interface Props {
  imgUrl?: string;
  height?: string;
  user?: string;
}

const Avatar = styled.div<Props>`
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
`;
const UserCard: React.FC<Props> = ({ imgUrl = "/img/profileImg.jpg", user = "Mohammed Ismail" }) => {
  const theme = useContext(ThemeContext);

  return (
    <User className="flex items-center">
      <Avatar className="h-10 w-10 rounded-full" imgUrl={imgUrl} />
      {/* <img src="/img/profileImg.jpg" className="h-10 w-10 rounded-full inline-block" alt="User" /> */}
      <span className="name font-semibold px-4">{user}</span>
      <span className="postDate">June 11, 2020</span>
    </User>
  );
};

export default UserCard;
