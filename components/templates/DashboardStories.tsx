import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';

import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import DashboardStoryCard from '../Organisms/DashboardStoryCard';
import Button from '../atoms/Button';
import Footer from './Footer';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import Loader from 'react-loader-spinner';

const Wrapper = styled.div`

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
  .section-wrap {
    margin-bottom: 6.6rem;
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
  .add-button {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
  .stories-container {
    margin-top: 20rem;
  }
  
`;

const DashboardStories = () => {
  const theme = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

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

          <div className="main w-3/4">

            <section className="flex items-center justify-between">
              <h1 className="py-10 profile-title">Stories</h1>
              <button
                type="button"
                onClick={() => Router.push('/dashboard/stories/create')}
                className="h-8 w-8 rounded-full add-button flex items-center justify-center focus:outline-none"
              >
                <img src="/img/add-project.svg" className="h-4 w-4" alt="Add new story" />
              </button>
            </section>
            {loading && (
              <section className="flex justify-center items-center mt-40">
                <Loader type="TailSpin" color={theme.colors.orange1} height={80} width={80} />
              </section>
            )}

            <section className="grid grid-cols-3 gap-4">
              <DashboardStoryCard
                imgUrl="/img/Bed_story.png"
                title="Why you should hire a Designer for your next project"
              />
              <DashboardStoryCard
                imgUrl="/img/Adora_NH_story.png"
                sponsored
                title="Nigerian contemporary homes"
              />
              <DashboardStoryCard
                imgUrl="/img/AH_stroy.png"
                title="The 7 elements of interior design"
              />
              <DashboardStoryCard
                imgUrl="/img/Adora_N_story_H.png"
                title="Things are not as expensive as you think..."
              />
            </section>
          </div>

        </section>

      </div>

      <Footer />
    </Wrapper>
  );
};

export default DashboardStories;
