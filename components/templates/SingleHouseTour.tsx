import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar'
import Offering from '../Organisms/Offering'
import UserCard from '../molecules/UserCard';
import MostTalkedHouseTours from '../Organisms/MostTalkedHouseTours';
import HouseTourImage from '../atoms/HouseTourImage';
import Footer from './Footer';

const HouseTourBanner = styled.div`
  height: 37.5rem;
  background: url('/img/AH-house-tours-banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .carousel-indicators{
    position: absolute;
    top: 80%; 
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
  .designer-info {
    color: ${({ theme }) => theme.colors.gray5};
  }
  .designer-title {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
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

const SingleHouseTour = () => {

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
        <ul className="flex items-center breadcrumb">
          <li>Stories</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
          </li>
        </ul>
      </section>
      <HouseTourBanner>
        <div className="flex items-center pt-4 carousel-indicators">
          <div className="h-16 w-16 mr-6">
            <img src="/img/down-arrow_ss-right.svg" className="inline-block bg-white py-1 px-6 h-full w-full" alt="Left arrow" />
          </div>
          <div className="h-16 w-16">
            <img src="/img/down-arrow__s-s-left.svg" className="inline-block bg-white py-1 px-6 h-full w-full" alt="Left arrow" />
          </div>
        </div>
      </HouseTourBanner>
      <Main className="container mx-auto mb-16">
        <h1 className="capitalize main-title text-4xl font-semibold py-12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy</h1>
        <div className="pb-12">
          <UserCard />
        </div>
        <section>
          <div>
            <span className="designer-title">Name:</span><span className="designer-info"> India, Harry, and Lily the Russian blue kitten</span>
          </div>
          <div className="pt-2">
            <span className="designer-title">Location:</span><span className="designer-info"> Edinburgh, Scotland</span>
          </div>
          <div className="pt-2">
            <span className="designer-title">Size:</span><span className="designer-info"> 465 square feet</span>
          </div>
          <div className="pt-2">
            <span className="designer-title">Years lived in:</span><span className="designer-info"> 1 year, owned</span>
          </div>
        </section>
        <article className="pt-8">
          <h1 className="capitalize inline-title">
            Living Room
          </h1>
          <p className="inline-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="pt-16">
            <HouseTourImage imgUrl="/img/AH-inner-one.png" />
          </div>
        </article>
        <article className="pt-16">
          <h1 className="capitalize inline-title">
            Bedroom
          </h1>
          <p className="inline-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="pt-16">
            <HouseTourImage imgUrl="/img/AH--inner-two.png" />
          </div>
        </article>
        <article className="pt-16">
          <h1 className="capitalize inline-title">
            Kitchen
          </h1>
          <p className="inline-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="pt-16">
            <HouseTourImage imgUrl="/img/AH--inner-three.png" />
          </div>
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
        <MostTalkedHouseTours imgUrl="/img/Image__Sss__9.png" />
        <MostTalkedHouseTours imgUrl="/img/Adora_NH_ss.png" />
        <MostTalkedHouseTours imgUrl="/img/Adora_NH---ss.png" />
        <MostTalkedHouseTours imgUrl="/img/sidekix-media-I_QC1JICzA0-un.png" />
        <MostTalkedHouseTours imgUrl="/img/amber-79ePIEybmzQ-unsplash.png" />
        <MostTalkedHouseTours imgUrl="/img/Adora_NH_single_story.png" />
      </section>
      <Footer />
    </MainWrap>
  )
}

export default SingleHouseTour
