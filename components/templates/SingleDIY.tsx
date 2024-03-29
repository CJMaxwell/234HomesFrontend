import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';

import Offering from '../Organisms/Offering';
import UserCard from '../molecules/UserCard';
import MostTalkedDIY from '../Organisms/MostTalkedDIY';
import useDIY from '../../hooks/useDIY';
import YouTubeContainer from '../Organisms/YouTubeContainer';
import Layout from '../Layouts/Layout';

const Main = styled.section`
  width: 47.5rem;

  .main-title {
    color: ${({ theme }) => theme.colors.gray1};
    /* padding-top: 4.25rem; */
  }
  .inline-title {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    padding-bottom: 1.05rem;
  }
  .inline-desc,
  .signup-comment {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
  .conversation {
    font-size: 1.4rem;
    font-weight: 600;
  }
  textarea::placeholder,
  .number-comments {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
`;

const MainWrap = styled.div`
  .breadcrumb {
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .most-talked {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

const SingleDIY = () => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const { diy, loading } = useDIY(id as string);

  return (
    <Layout>
      <MainWrap>
        <div className="general-padding container mx-auto">
          <Offering />
        </div>
        <section className="general-padding container mx-auto py-10">
          <ul className="flex items-center breadcrumb mb-12">
            <li>Do-It-Yourself</li>
            <li>
              <img src="/img/direction.svg" alt="Breadcrumb navigation" />
            </li>
            <li>{diy?.title}</li>
          </ul>
          {diy && <YouTubeContainer url={diy.video} thumbnail={diy.thumbnail} />}
        </section>

        <Main className="container mx-auto mb-16">
          <h1 className="capitalize main-title text-4xl font-semibold py-12">{diy?.title}</h1>
          <div className="pb-12">
            {diy && (
              <UserCard
                user={`${diy.createdBy?.firstName} ${diy.createdBy?.lastName}`}
                imgUrl={diy.createdBy?.profilePhoto}
              />
            )}
          </div>
          <article>
            <p className="inline-desc">{diy?.body}</p>
          </article>
          <section className="flex items-center mt-16">
            <span className="signup-comment font-semibold pr-2 capitalize">Sign Up to Comment</span>
            <img src="/img/comment_ss.svg" alt="comment" />
          </section>
          <section className="mt-10">
            <div className="flex items-center">
              <h1 className="conversation uppercase pr-1">CONVERSATION</h1>
              <span className="number-comments">(0) Comments</span>
            </div>
            <textarea
              className="border border-gray-200 mt-5 outline-none w-full h-20 pt-4 pl-6 rounded-md"
              name="discussion"
              id="discussion"
              placeholder="Join the discussion…"
            />
          </section>
        </Main>
        <hr />
        <h1 className="mt-12 mb-8 text-center font-semibold most-talked">Most Talked About</h1>
        <section className="container mx-auto general-padding grid grid-cols-3 gap-8 mb-20">
          <MostTalkedDIY imgUrl="/img/Image__Sss__9.png" />
          <MostTalkedDIY imgUrl="/img/Adora_NH_ss.png" />
          <MostTalkedDIY imgUrl="/img/Adora_NH---ss.png" />
          <MostTalkedDIY imgUrl="/img/sidekix-media-I_QC1JICzA0-un.png" />
          <MostTalkedDIY imgUrl="/img/amber-79ePIEybmzQ-unsplash.png" />
          <MostTalkedDIY imgUrl="/img/Adora_NH_single_story.png" />
        </section>
      </MainWrap>
    </Layout>
  );
};

export default SingleDIY;
