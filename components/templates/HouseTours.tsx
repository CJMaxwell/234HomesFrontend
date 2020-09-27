import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';
import moment from 'moment';

import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import HouseTourCard from '../Organisms/HouseTourCard';
import Button from '../atoms/Button';
import Footer from './Footer';
import useHouseTours from '../../hooks/useHouseTours';
import withApollo from '../../lib/withApollo';

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
  background-color: ${({ theme }) => theme.colors.pink2};
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
`;

const ImgBanner = styled.div`
  /* width: 59.9rem; */
  height: 33.7rem;
  background: url('/img/AH-house-tours-banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const FeaturedWrapper = styled.section`
  width: 22.7rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  /* opacity: 0.95;
  background-blend-mode: overlay; */
  /* mix-blend-mode:multiply; */

  .featured {
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.6rem;
    width: 4.85rem;
  }
  .featured-heading {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray1};
  }
  .featured-desc {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const FeatButton = styled(Button)`
  border-radius: 44px;
  color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  background-color: transparent;
  width: 7.45rem;
  font-size: 0.7rem;
`;

const HouseTours = () => {
  const theme = useContext(ThemeContext);
  const { houseTours, loading } = useHouseTours();

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
          <h6 className="uppercase title pt-12">House Tours</h6>
          <div className="text-center pb-10">
            <h1 className="capitalize heading-intro font-semibold">
              Get inspired by these stylish homes, from innovative tiny homes to chic apartments and
              more.
            </h1>
          </div>
          <ImgBanner>
            <FeaturedWrapper className="px-8 py-10">
              <h4 className="uppercase featured font-semibold text-center py-2">featured</h4>
              <h3 className="featured-heading font-semibold pt-8 capitalize">
                elitr sed diam nonumy eirmod tempor invidunt ut labore et
              </h3>
              <p className="pt-5 featured-desc pb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
              <FeatButton
                onClick={() => Router.push('/single-house-tour')}
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

        {houseTours &&
          houseTours.map((ht: any) => (
            <HouseTourCard
              key={ht.id}
              imgUrl={ht.slides[0].photo}
              user="Wuraola Gbotemi"
              PostDate={moment(ht.createdAt).format('ll')}
              category={ht.category}
              title={ht.title}
              summary={ht.summary}
              path={`/house-tours/${ht.id}`}
            />
          ))}

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

export default withApollo()(HouseTours);
