import React, { useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';

import useStories from '../../hooks/useStories';
import Offering from '../Organisms/Offering';
import UserCard from '../molecules/UserCard';
import MostTalkedCard from '../Organisms/MostTalkedCard';
import StoryImage from '../atoms/StoryImage';
import Layout from '../Layouts/Layout';

interface Props {
  url?: string;
}

const StoryBanner = styled.div<Props>`
  height: 37.5rem;
  background: url('${({ url }) => url}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .carousel-indicators {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

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

const SingleStory = () => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const { getStory, storyLoading, story } = useStories();

  useEffect(() => {
    if (id) {
      getStory(id as string);
    }
  }, []);


  return (
    <Layout>
      {
        story && (
          <MainWrap>
            <div className="general-padding container mx-auto">
              <Offering />
            </div>
            <section className="general-padding container mx-auto py-10">
              <ul className="flex items-center breadcrumb">
                <li>Stories</li>
                <li>
                  <img src="/img/direction.svg" alt="Breadcrumb navigation" />
                </li>
                <li>
                  {story.post.title}
                </li>
              </ul>
            </section>
            <StoryBanner url={story.post.banner}>
              {/* <div className="flex items-center pt-4 carousel-indicators">
                <div className="h-16 w-16 mr-6">
                  <img
                    src="/img/down-arrow_ss-right.svg"
                    className="inline-block bg-white py-1 px-6 h-full w-full"
                    alt="Left arrow"
                  />
                </div>
                <div className="h-16 w-16">
                  <img
                    src="/img/down-arrow__s-s-left.svg"
                    className="inline-block bg-white py-1 px-6 h-full w-full"
                    alt="Left arrow"
                  />
                </div>
              </div> */}
            </StoryBanner>
            <Main className="container mx-auto mb-16">
              <h1 className="capitalize main-title text-2xl font-semibold py-12">
                {story.post.title}
              </h1>
              <div className="pb-12">
                <UserCard postDate={story.post.createdAt} />
              </div>
              <article dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(story.post.body)
              }} />


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
              <MostTalkedCard imgUrl="/img/Image__Sss__9.png" />
              <MostTalkedCard imgUrl="/img/Adora_NH_ss.png" />
              <MostTalkedCard imgUrl="/img/Adora_NH---ss.png" />
              <MostTalkedCard imgUrl="/img/sidekix-media-I_QC1JICzA0-un.png" />
              <MostTalkedCard imgUrl="/img/amber-79ePIEybmzQ-unsplash.png" />
              <MostTalkedCard imgUrl="/img/Adora_NH_single_story.png" />
            </section>
          </MainWrap>
        )
      }

    </Layout>
  );
};

export default SingleStory;
