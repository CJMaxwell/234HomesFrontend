import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';


interface Props {
  imgUrl?: string;
  height?: string;
  user?: string;
  profilePhoto?: string;
  email?: string;
  accountType?: string;
  status?: string;
  phoneNumber?: string;
}


const Wrapper = styled.tr`
  border: 1px solid ${({ theme }) => theme.colors.gray17};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray1};
  &.row-wrap {
    margin-bottom: 10px;
  }

  .username {
    font-weight: 600;
  }
  .status {
    border-radius: 12px;
    background-color:#4A854A1C;
    color: ${({ theme }) => theme.colors.green3};
    padding:0.15rem 0.7rem;
  }
  .phone{
    color: ${({ theme }) => theme.colors.gray24};
    padding-top: 0.2rem;
  }
`;

const Avatar = styled.div<Props>`
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
`;

const AdminUserCard: React.FC<Props> = ({
  imgUrl,
  user,
  email,
  accountType,
  status,
  phoneNumber

}) => {
  return (
    <Wrapper className="row-wrap">
      <td className="px-4 py-2 flex items-center">
        <Avatar className="h-10 w-10 rounded-full" imgUrl={imgUrl || "/img/profileImg.jpg"} />
        <section className="pl-3">
          <h1 className="username">{user}</h1>
          <p className="phone">{phoneNumber}</p>
        </section>
      </td>
      <td className="px-4 py-2">
        <section>
          <p>{email}</p>
        </section>
      </td>
      <td className="px-4 py-2 capitalize">
        {accountType}
      </td>
      <td className="px-4 py-2">
        <p className="status">Active</p>
      </td>
      <td className="px-4 py-2">
        <button className="focus:outline-none">
          <img className="w-6" src="/img/menu-more.svg" alt="More menu" />
        </button>
      </td>
    </Wrapper>
  )
}

export default AdminUserCard
