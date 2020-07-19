import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar'
import Offering from '../Organisms/Offering'
import UserCard from '../molecules/UserCard';
import MostTalkedDIY from '../Organisms/MostTalkedDIY';
import Footer from './Footer';

const DIYBanner = styled.div`
  height: 37.5rem;
  background: url('/img/DIY_hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 10px;

  .playBtn{
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%,-50%);
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
  .inline-desc, .signup-comment {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
  .conversation {
    font-size: 1.4rem;
    font-weight: 600;
  }
  textarea::placeholder, .number-comments {
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

  return (
    <MainWrap>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <section className="general-padding container mx-auto py-10">
        <ul className="flex items-center breadcrumb mb-12">
          <li>Do-It-Yourself</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
          </li>
        </ul>
        <DIYBanner>
          <div className="flex items-center pt-4 playBtn">
            <img src="/img/diy-play.svg" className="h-16 w-16" alt="Play" />
          </div>
        </DIYBanner>
      </section>

      <Main className="container mx-auto mb-16">
        <h1 className="capitalize main-title text-4xl font-semibold py-12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy</h1>
        <div className="pb-12">
          <UserCard />
        </div>
        <article>
          <p className="inline-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
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
          <textarea className="border border-gray-200 mt-5 outline-none w-full h-20 pt-4 pl-6 rounded-md" name="discussion" id="discussion" placeholder="Join the discussion…"></textarea>
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
      <Footer />
    </MainWrap>
  )
}

export default SingleDIY
