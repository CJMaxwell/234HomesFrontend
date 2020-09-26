import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';


interface Props {
  imgUrl?: string;
  height?: string;
  user?: string;
  profilePhoto?: string;
  email?: string;
  accountType?: string;
  status?: string
}

const Wrapper = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.gray17};
  border-radius: 6px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 0.65rem;

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
  imgUrl = "/img/profileImg.jpg",
  user = "Mohammed Ismail",
  profilePhoto,
  email,
  accountType,
  status,

}) => {
  return (
    <Wrapper>
      <section className="px-5 py-2 flex items-center justify-between">
        <section className="flex items-center">
          <Avatar className="h-10 w-10 rounded-full" imgUrl={imgUrl} />
          <section className="pl-3">
            <h1 className="username">Micheal Jackson</h1>
            <p className="phone">0809 053 4405</p>
          </section>
        </section>
        <section>
          <p>mjackson@gmail.com</p>
        </section>
        <section>
          <p>Professional</p>
        </section>
        <section>
          <p className="status">Active</p>
        </section>
        <section>
          <button className="focus:outline-none">
            <img className="w-6" src="/img/menu-more.svg" alt="More menu" />
          </button>
        </section>
      </section>
    </Wrapper>
  )
}

export default AdminUserCard
