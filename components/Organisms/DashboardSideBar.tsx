import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import useProfile from '../../hooks/useProfile';
import useAuth from '../../hooks/useAuth';

interface Props {
  imgUrl?: string;
  height?: string;
}

const Avatar = styled.section<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

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
`;

const DashboardSideBar: React.FC<Props> = ({ imgUrl }) => {
  const { profile, uploadProfilePhoto } = useProfile();
  const { logOut } = useAuth();

  return (
    <Wrapper>
      <section className="flex items-center justify-center relative py-10">
        <input
          className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
          name="file"
          id="file"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            uploadProfilePhoto(event.target.files?.[0]);
          }}
          type="file"
        />
        <Avatar
          className="rounded-full w-40 h-40"
          imgUrl={profile?.profilePhoto || '/img/dashboard/dashboardperson.svg'}
        />
      </section>
      <h1 className="text-center pb-12 user">
        {profile?.accountType === 'professional' ? profile?.firstName : profile?.businessName}
      </h1>
      <section>
        <ul className="px-4">
          <Link href="/dashboard">
            <li className="flex items-center py-4 cursor-pointer">
              <span className="pr-4">
                <img src="/img/dashboard/dashboarduser.svg" alt="User" />
              </span>
              <a>Your 234Home</a>
            </li>
          </Link>
          {profile?.accountType !== 'individual' && (
            <li className="flex items-center py-4 cursor-pointer">
              <span className="pr-4">
                <img src="/img/dashboard/dashboardblog.svg" alt="Messages" />
              </span>
              <a>Messages</a>
            </li>
          )}
          {profile?.accountType === 'professional' && (
            <Link href="/dashboard/projects">
              <li className="flex items-center py-4 cursor-pointer">
                <span className="pr-4">
                  <img src="/img/dashboard/dashboardwork.svg" alt="Project" />
                </span>
                <a>My Projects</a>
              </li>
            </Link>
          )}

          <Link href="/saved-item">
            <li className="flex items-center py-4 cursor-pointer">
              <span className="pr-4">
                <img src="/img/dashboard/dashboardheart.svg" alt="Heart" />
              </span>
              <a>Saved Ideas</a>
            </li>
          </Link>
          {profile?.accountType === 'individual' && (
            <Link href="/plan-your-home">
              <li className="flex items-center py-4 cursor-pointer">
                <span className="pr-4">
                  <img src="/img/dashboard/plan-your-home.svg" alt="Plan" />
                </span>
                <a>Plan Your Home</a>
              </li>
            </Link>
          )}
          {profile?.accountType === 'vendor' && (
            <Link href="/dashboard/products">
              <li className="flex items-center py-4 cursor-pointer">
                <span className="pr-4">
                  <img src="/img/dashboard/dashboardbox.svg" alt="Box" />
                </span>
                <a>Product Listing</a>
              </li>
            </Link>
          )}

          {profile?.accountType === 'admin' && (
            <>
              <Link href="/dashboard/house-tours">
                <li className="flex items-center py-4 cursor-pointer">
                  <span className="pr-4">
                    <img src="/img/dashboard/dashboardbox.svg" alt="Box" />
                  </span>
                  <a>House Tours</a>
                </li>
              </Link>
              <Link href="/dashboard/diy">
                <li className="flex items-center py-4 cursor-pointer">
                  <span className="pr-4">
                    <img src="/img/dashboard/plan-your-home.svg" alt="DIY" />
                  </span>
                  <a>DIY</a>
                </li>
              </Link>
              <Link href="/dashboard/stories/">
                <li className="flex items-center py-4 cursor-pointer">
                  <span className="pr-4">
                    <img src="/img/dashboard/dashboardbox.svg" alt="Box" />
                  </span>
                  <a>Stories</a>
                </li>
              </Link>
              <Link href="/dashboard/users">
                <li className="flex items-center py-4 cursor-pointer">
                  <span className="pr-4">
                    <img src="/img/users.svg" alt="users" />
                  </span>
                  <a>User Management</a>
                </li>
              </Link>
            </>
          )}
          <Link href="/dashboard/profile">
            <li className="flex items-center py-4 cursor-pointer">
              <span className="pr-4">
                <img src="/img/dashboard/dashboardsettings.svg" alt="Settingd" />
              </span>
              <a>Settings</a>
            </li>
          </Link>
        </ul>
        <section className="text-center p-12">
          <button type="button" className="uppercase log-out" onClick={logOut}>
            Log Out
          </button>
        </section>
      </section>
    </Wrapper>
  );
};

export default DashboardSideBar;
