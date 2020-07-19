import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';


import ProfileNavbar from '../Organisms/ProfileNavbar';
import Offering from '../Organisms/Offering';
import StoryCard from '../Organisms/StoryCard';
import Button from '../atoms/Button';
import Footer from './Footer';
import DIYPostCard from '../Organisms/DIYPostCard';

const Wrapper = styled.div`

  .recommended {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5}
  }
  .recommended {
    font-weight: 600;
  }

  .next {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray1};
  }
  .prev {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .indicators {
    width: 1.3rem;
  }
  .stories-container {
    margin-top: 20rem;
  }
  .latest {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 1.2rem;
  }
  .sort-by {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
`;

const TopBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.blue3};
  height: 35.75rem;

  .title {
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
  .heading-intro {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.gray1};
    padding-top: 2.3rem;
  }
  .para-intro {
    max-width: 37.3rem;
    margin: auto;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const ImgBanner = styled.div`
  /* width: 59.9rem; */
  height: 33.7rem;
  background: url('/img/Adora_NH_baner_HT.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 10px;
`;

const FeaturedWrapper = styled.section`
  width: 22.7rem;
  background-color:  ${({ theme }) => theme.colors.gray1};
  position: absolute;
  top: 50%; 
  left: 80%;
  transform: translate(-50%,-50%);
  /* opacity: 0.95;
  background-blend-mode: overlay; */
  /* mix-blend-mode:multiply; */

  .featured {
    background-color:  ${({ theme }) => theme.colors.green1};
    font-size: 0.6rem;
    width: 4.85rem;
  }
  .featured-heading {
    font-size: 1.4rem;
  }
`;

const FeatButton = styled(Button)`
  border-radius: 44px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  width: 7.45rem;
  font-size: 0.7rem;
`;


const DIY = () => {

  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <TopBanner>
        <div className="general-padding container mx-auto">
          <h6 className="uppercase title pt-12">Do-IT-YOURSELF</h6>
          <div className="text-center pb-10">
            <h1 className="capitalize heading-intro font-semibold">
              DIY Projects For The Home
            </h1>
            <p className="pt-4 para-intro">
              Skip store bought decorations and personalize your space with items that you make yourself. Browse beautiful and easy-to-follow DIY projects for every room in your home.
            </p>
          </div>
          <ImgBanner>
            <FeaturedWrapper className="px-8 py-10">
              <h4 className="uppercase featured text-white font-semibold text-center py-2">featured</h4>
              <h3 className="featured-heading font-semibold pt-8 text-white capitalize">elitr sed diam nonumy eirmod tempor invidunt ut labore et</h3>
              <FeatButton onClick={() => Router.push('/single-story')} className="featured-button uppercase mt-10">WAtch Now</FeatButton>
            </FeaturedWrapper>
          </ImgBanner>
        </div>
      </TopBanner>
      <div className="general-padding container mx-auto mb-32 stories-container">
        <div className="flex justify-between items-center">
          <h1 className="uppercase latest font-semibold">Latest</h1>
          <div className="flex items-center">
            <span className="sort-by">Sort By</span>
            <select className="recommended">
              <option value="Recommended">Recommended</option>
            </select>
          </div>
        </div>
        <section className="grid grid-cols-3 gap-8 mb-20 mt-10">
          <DIYPostCard imgUrl="/img/brown-and-black-wooden-box-3889740er.png" />
          <DIYPostCard imgUrl="/img/Adora_NH (10).png" />
          <DIYPostCard imgUrl="/img/Adora_NH (42).png" />
          <DIYPostCard imgUrl="/img/AH (9).png" />
          <DIYPostCard imgUrl="/img/AH (31).png" />
          <DIYPostCard imgUrl="/img/B (6) (1).png" />
          <DIYPostCard imgUrl="/img/B (25) (1).png" />
          <DIYPostCard imgUrl="/img/brown-and-black-wooden-box-3889740.png" />
          <DIYPostCard imgUrl="/img/EO (42).png" />
          <DIYPostCard imgUrl="/img/francesca-tosolini-w1RE0lBbREo-unsplash.png" />
          <DIYPostCard imgUrl="/img/tiles-window-bathroom-marble-105934.png" />
          <DIYPostCard imgUrl="/img/two-white-rod-pocket-curtains-910458.png" />
        </section>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default DIY
