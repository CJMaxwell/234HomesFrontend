import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';
import Router from 'next/router';

import useProfile from '../../hooks/useProfile';
import { useRprojects } from '../../hooks/projects';
import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import DashboardProjectCard from '../Organisms/DashboardProjectCard';
import AddNewProject from '../atoms/AddNewProject';
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
  .profile-title {
    text-transform: uppercase;
  }
  .profile-title,
  .profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .section-wrap {
    margin-bottom: 6.6rem;
  }
  .add-button {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

const DashboardProject = () => {
  const theme = useContext(ThemeContext);
  const { profile, updateProfile, updateProfileLoading: profileLoading } = useProfile();
  const { projects, loading } = useRprojects(profile?.id);
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
              <h1 className="py-10 profile-title">My Projects</h1>
              <button
                type="button"
                onClick={() => Router.push('/dashboard/add-project')}
                className="h-8 w-8 rounded-full add-button flex items-center justify-center focus:outline-none"
              >
                <img src="/img/add-project.svg" className="h-4 w-4" alt="Add new Project" />
              </button>
            </section>
            {loading && (
              <section className="flex justify-center items-center mt-40">
                <Loader type="TailSpin" color={theme.colors.orange1} height={80} width={80} />
              </section>
            )}
            {projects && (
              <section className="grid grid-cols-3 gap-4 mb-16">
                {
                  // @ts-ignore
                  projects.map((project) => (
                    <DashboardProjectCard
                      imgUrl={project.media}
                      title={project.title}
                      tags={project.tags}
                      location={` | ${project.state}`}
                      key={project?.id}
                    />
                  ))
                }
                <AddNewProject />
              </section>
            )}
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default DashboardProject;
