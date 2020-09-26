import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';
import Router from 'next/router';


import withApollo from '../../lib/withApollo';
import useProfile from '../../hooks/useProfile';
import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import AdminUserCard from '../Organisms/AdminUserCard';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import Footer from './Footer';

const Wrapper = styled.section`
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .main {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    margin-left: 1.7rem;
    padding: 0 2.65rem;
  }
  
  .profile-title{
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .section-wrap {
    margin-bottom: 6.6rem;
  }
  .add-button {
    box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
  }
  .user-search {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 5px;
    width: 22.6rem;
  }
  input::placeholder {
    color: ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
  }
  .filter {
    color: ${({ theme }) => theme.colors.gray5};
    select {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray17};
      padding-bottom: 0.25rem;
      font-size: 0.8rem;
    }
  }
  hr {
    color: ${({ theme }) => theme.colors.gray17};
  }
  .headings {
    color: ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
  }
`;

const Users = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto section-wrap">
        <Offering />
        <ul className="breadcrumb flex items-center uppercase">
          <li>Home</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Dashboard</li>
        </ul>
        <section className="flex justify-between">
          <section className="w-1/4">
            <DashboardSideBar />
          </section>
          <section className="main w-3/4">
            <section className="flex items-center justify-between">
              <h1 className="py-10 profile-title">User management</h1>
              <section className="user-search overflow-hidden h-10">
                <form className="flex items-center h-full">
                  <input
                    type="search"
                    name="user"
                    id="user"
                    placeholder="Search by name, email or phone number"
                    className="h-full w-full focus:outline-none px-4"
                  />
                  <img src="/img/user-search.svg" className="h-4 pr-4" alt="search for users" />
                </form>
              </section>
            </section>
            <section className="mt-8">
              <section className="mb-6">
                <div className="filter flex items-center justify-end space-x-4">
                  <select className="focus:outline-none">
                    <option value="">User Type</option>
                    <option value="professional">Professional</option>
                    <option value="vendor">Vendor</option>
                    <option value="user">User</option>
                  </select>
                  <select className="focus:outline-none">
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </section>
              <section className="mb-8">
                <hr />
              </section>
              <section className="flex items-center px-16 space-x-24 mb-4 headings uppercase">
                <p>Name</p>
                <p className="pl-20">Email</p>
                <p className="pl-8">Role</p>
                <p className="pl-4">Status</p>
                <p></p>
              </section>
              <AdminUserCard />
              <AdminUserCard />
              <AdminUserCard />
              <AdminUserCard />
              <AdminUserCard />
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(Users);
