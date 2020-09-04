import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';

import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import StoryCard from '../Organisms/StoryCard';
import Button from '../atoms/Button';
import Footer from './Footer';

const Wrapper = styled.div`
  .recommended {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5};
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
  background-color: ${({ theme }) => theme.colors.pink1};
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
  background: url('/img/two-white-and-brown-armchairs.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const FeaturedWrapper = styled.section`
  width: 22.7rem;
  background-color: ${({ theme }) => theme.colors.yellow4};
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  /* opacity: 0.95;
  background-blend-mode: overlay; */
  /* mix-blend-mode:multiply; */

  .featured {
    background-color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.6rem;
    width: 4.85rem;
  }
  .featured-heading {
    font-size: 1.4rem;
  }
  .featured-desc {
    font-size: 0.8rem;
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

const Story = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <TopBanner>
        <div className="general-padding container mx-auto">
          <h6 className="uppercase title pt-12">Stories</h6>
          <div className="text-center pb-10">
            <h1 className="capitalize heading-intro font-semibold">
              eirmod tempor invidunt ut labore et
            </h1>
            <p className="pt-4 para-intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <ImgBanner>
            <FeaturedWrapper className="px-8 py-10">
              <h4 className="uppercase featured text-white font-semibold text-center py-2">
                featured
              </h4>
              <h3 className="featured-heading font-semibold pt-8 text-white capitalize">
                elitr sed diam nonumy eirmod tempor invidunt ut labore et
              </h3>
              <p className="pt-5 featured-desc text-white pb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
              <FeatButton
                onClick={() => Router.push('/single-story')}
                className="featured-button uppercase"
              >
                Read Story
              </FeatButton>
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
        <StoryCard
          imgUrl="/img/Bed_story.png"
          user="Wuraola Gbotemi"
          PostDate="June 11, 2020"
          category="INTERIOR DESIGN"
        />
        <StoryCard
          imgUrl="/img/Adora_NH_story.png"
          sponsored
          user="Wuraola Gbotemi"
          PostDate="June 11, 2020"
          category="LIFESTYLE"
        />
        <StoryCard
          imgUrl="/img/AH_stroy.png"
          user="Wuraola Gbotemi"
          PostDate="June 11, 2020"
          category="INTERIOR DESIGN"
        />
        <StoryCard
          imgUrl="/img/Adora_N_story_H.png"
          user="Wuraola Gbotemi"
          PostDate="June 11, 2020"
          category="LIFESTYLE"
        />
        <StoryCard
          imgUrl="/img/AH_story.png"
          user="Wuraola Gbotemi"
          PostDate="June 11, 2020"
          category="LIFESTYLE"
        />
        <StoryCard
          imgUrl="/img/A_story_H.png"
          user="Wuraola Gbotemi"
          PostDate="June 11, 2020"
          category="HOME DECOR"
        />
        <hr className="mt-20" />
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <span className="indicators pr-2">
              <img src="/img/prev.svg" alt="Previous" />
            </span>
            <span className="prev uppercase">Previous</span>
          </div>
          <div className="flex items-center">
            <span className="next uppercase">Next</span>
            <span className="indicators pl-2">
              <img src="/img/next.svg" alt="Next" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Story;
