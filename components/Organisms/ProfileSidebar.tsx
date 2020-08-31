import React from 'react';
import styled from 'styled-components';
import useProfile from '../../hooks/useProfile';
import withApollo from '../../lib/withApollo';

const Wrapper = styled.section`
  width: 16rem;
  border: 1px solid ${({ theme }) => theme.colors.gray17};
  border-radius: 7px;

  li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray17};
    font-size: 0.8rem;
  }
  li:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.gray17};
  }
  .log-out {
    color: ${({ theme }) => theme.colors.gray17};
  }
  .user {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  a.active {
    color: ${({ theme }) => theme.colors.orange1};
  }
  .icon-img {
    height: 1rem;
  }
`;

const ProfileSidebar = () => {
  const { profile } = useProfile();
  return (
    <Wrapper>
      <section className="flex items-center justify-center py-10">
        <img
          className="icon-img"
          src="/img/dashboard/dashboardperson.svg"
          alt={`${profile?.firstName} ${profile?.lastName}`}
        />
      </section>
      <h1 className="text-center pb-12 user">{profile?.firstName}</h1>
      <section>
        <ul className="px-4">
          <li className="flex items-center py-4">
            <span className="pr-4">
              <img className="icon-img" src="/img/dashboard/active-user.svg" alt="User" />
            </span>
            <a className="active">My Profile</a>
          </li>
          <li className="flex items-center py-4">
            <span className="pr-4">
              <img className="icon-img" src="/img/dashboard/dashboardblog.svg" alt="Messages" />
            </span>
            <a>Messages</a>
          </li>
          <li className="flex items-center py-4">
            <span className="pr-4">
              <img className="icon-img" src="/img/dashboard/dashboardwork.svg" alt="Project" />
            </span>
            <a>My Projects</a>
          </li>
          <li className="flex items-center py-4">
            <span className="pr-4">
              <img className="icon-img" src="/img/dashboard/dashboardheart.svg" alt="Heart" />
            </span>
            <a>Saved Ideas</a>
          </li>
          <li className="flex items-center py-4">
            <span className="pr-4">
              <img className="icon-img" src="/img/dashboard/dashboardbox.svg" alt="Box" />
            </span>
            <a>Product Listing</a>
          </li>
          <li className="flex items-center py-4">
            <span className="pr-4">
              <img className="icon-img" src="/img/dashboard/dashboardsettings.svg" alt="Settingd" />
            </span>
            <a>Settings</a>
          </li>
        </ul>
        <section className="text-center p-12">
          <button type="button" className="uppercase log-out">
            Log Out
          </button>
        </section>
      </section>
    </Wrapper>
  );
};

export default withApollo()(ProfileSidebar);
