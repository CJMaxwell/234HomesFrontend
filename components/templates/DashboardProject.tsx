import React, { useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';
import Router from 'next/router';

import useProfile from '../../hooks/useProfile';
import { useRprojects } from '../../hooks/projects';
import DashboardProjectCard from '../Organisms/DashboardProjectCard';
import DashboardLayout from '../Layouts/DashboardLayout';


const Wrapper = styled.section`
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
  const { projects, loading, get } = useRprojects();

  useEffect(() => {
    if (profile) {
      get(profile.id);
    }
  }, [profile, projects]);

  return (
    <DashboardLayout>
      <Wrapper>
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
            {/* <AddNewProject /> */}
          </section>
        )}
      </Wrapper>
    </DashboardLayout>

  );
};

export default DashboardProject;
