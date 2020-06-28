import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Button from '../atoms/Button';
import Navbar from '../Organisms/Navbar';
import Footer from './Footer';
import SiteLink from '../atoms/SiteLink';
import PostCard from '../Organisms/PostCard';
import ProfessionalCard from '../Organisms/ProfessionalCard';
import DIYCard from '../Organisms/DIYCard';
import { theme } from '../../styles/theme';

const HomeBannerBtn = styled(Button)`
  border-radius: 34px;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 35px;
  text-transform: uppercase;
  min-width: 9.8rem;
  height: 4.25rem;

  img {
    margin-right: 5.74px;
  }

  &.house-tours,
  &.stories,
  &.diy,
  &.directory {
    margin: 0;
    height: 100%;
  }

  &.house-tours {
    background: ${({ theme }) => theme.colors.orange1};
    border-radius: 7px 0px 0px 0px;
    min-width: 11rem;
  }

  &.stories {
    background: ${({ theme }) => theme.colors.yellow1};
    border-color: ${({ theme }) => theme.colors.yellow1};
    border-radius: 0;
    min-width: 8.2rem;
  }

  &.diy {
    background: ${({ theme }) => theme.colors.green1};
    border-color: ${({ theme }) => theme.colors.green1};
    border-radius: 0;
    min-width: 5.94rem;
  }

  &.directory {
    background: ${({ theme }) => theme.colors.gray5};
    border-color: ${({ theme }) => theme.colors.gray5};
    border-radius: 0px 7px 0px 0px;
    min-width: 8.875rem;
  }
`;

const HomeBanner = styled.section`
  height: 35.875rem;
  background: url('/Adora_NH.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .home-banner-tabs {
    height: 4.25rem;
  }

  .form {
    width: 71rem;
    border-radius: 0px 7px 7px 7px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 20px 20px 40px ${({ theme }) => theme.colors.gray16};
    padding: 18px;

    .input-group {
      display: block;

      label {
        font-weight: 400;
        display: block;
      }

      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.colors.gray17};
        padding-left: 23px;
      }
    }
  }
`;

const Connect = styled.section`
  background: ${({ theme }) => theme.colors.gray10};

  .title {
    color: ${({ theme }) => theme.colors.green1};
    text-transform: uppercase;
  }
`;

const HouseTour = styled.section`
  height: 610px;
  background-color: ${({ theme }) => theme.colors.orange1};

  h1 {
    font-size: 3.44rem;
    font-weight: 500;
  }

  .description {
    padding: 7.8rem 7.8rem 0 0;
  }

  .wrapper,
  .explore {
    height: 100%;
  }

  .prev-next {
    margin-top: 454px;
  }
`;

const LinkButton = styled(SiteLink)`
  background-color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 2.25rem;
`;

const sectionStyle = {
  backgroundColor: '#F7681A',
};
const connectStyle = {
  color: theme.colors.green1,
};
const featPost = {
  height: '581px',
};

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <img src="/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <HomeBanner className="flex justify-center items-center">
        <div>
          <div className="home-banner-tabs">
            <HomeBannerBtn className="house-tours">House Tours</HomeBannerBtn>
            <HomeBannerBtn className="stories">Stories</HomeBannerBtn>
            <HomeBannerBtn className="diy">DIY</HomeBannerBtn>
            <HomeBannerBtn className="directory">Directory</HomeBannerBtn>
          </div>
          <form className="flex justify-between items-center bg-white form">
            <div className="input-group">
              <label>Type</label>
              <input
                className="outline-none"
                type="text"
                placeholder="Blahsldjfdslf"
              />
            </div>
            <div className="input-group">
              <label>Style</label>
              <input
                className="outline-none"
                type="text"
                placeholder="Blahsldjfdslf"
              />
            </div>
            <div className="input-group">
              <label>Location</label>
              <input
                className="outline-none"
                type="text"
                placeholder="Blahsldjfdslf"
              />
            </div>
            <div className="input-group">
              <label>Year Built</label>
              <input
                className="outline-none"
                type="text"
                placeholder="Blahsldjfdslf"
              />
            </div>
            <HomeBannerBtn
              className="uppercase flex justify-center items-center"
              type="submit"
            >
              <img src="/search.svg" alt="Search icon" /> Search
            </HomeBannerBtn>
          </form>
        </div>
      </HomeBanner>

      <Connect className="text-center pt-32 pb-32">
        <div className="title">
          <span>Connect</span> | <span>Share</span> |{' '}
          <span>Live Authentic</span>
        </div>
        <h1 className="mt-8 text-black">The Contemporary African Home</h1>
        <p className="mt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt
          <br />
          expedita alias repellendus reprehenderit architecto eos enim delectus
          optio libero.
        </p>
        <div className="mt-20">
          <button className="border-b-2 border-black">
            Learn More About Us
            <img
              className="inline-block h-4 pl-4"
              src="/left-arrow-button.svg"
              alt="View more"
            />
          </button>
        </div>
      </Connect>

      <HouseTour className="relative">
        <div className="container mx-auto flex wrapper">
          <div className="text-white w-1/2 description">
            <h3 className="pb-10">House Tour</h3>
            <h1 className="font-bold leading-none pb-6">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="pb-16">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="pb-32">
              <LinkButton>Get Inspired</LinkButton>
            </div>
          </div>

          <div className="z-50 w-1/2 prev-next flex justify-end">
            <Button>Prev</Button>
            <Button>Next</Button>
          </div>

          <div className="explore absolute w-1/2 right-0">
            <img
              src="/AH.png"
              className="w-full h-full object-cover"
              alt="Sample house"
            />
          </div>
        </div>
      </HouseTour>

      <section className="px-16 mb-24 mt-20 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl text-gray-700 uppercase">
            Stories
          </h1>
          <a className="inline-block font-semibold uppercase text-sm px-3 py-3 leading-none border rounded-full bg-gray-800 text-white border-white">
            View More
          </a>
        </div>
        <div className="grid grid-cols-4 mb-4 mt-12">
          <div className="pr-4">
            <div className="grid grid-rows-2 gap-4">
              <PostCard />
              <PostCard imgUrl={'/AH_dining.png'} />
            </div>
          </div>
          <div className="col-span-2">
            <PostCard
              imgUrl={'/two-white-and-brown-armchairs.png'}
              height={'583px'}
            />
          </div>
          <div className="pl-4">
            <div className="grid grid-rows-2 gap-4">
              <PostCard imgUrl={'/Adora_NH_grid.png'} />
              <PostCard imgUrl={'/Adora_NH_rope.png'} />
            </div>
          </div>
        </div>
      </section>
      <section className="diybg pt-12 pb-12 mb-24">
        <div className="px-16 container mx-auto mt-16 mb-20 ">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <DIYCard imgUrl={'/EO_kitchen.png'} />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div>
                <DIYCard imgUrl={'/EO_bedroom.png'} />
              </div>
              <div>
                <DIYCard imgUrl={'/EO_sitting_room.png'} />
              </div>
            </div>
            <div className="pl-8">
              <h4 className="pt-12" style={connectStyle}>
                DIY
              </h4>
              <h1 className="font-bold text-2xl pb-4 pt-4">
                Lorem Ipsum <br />
                Dolor Sit Amet
              </h1>
              <p className="pb-20">
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
              <SiteLink>Get Started</SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto pb-20">
        <div className="px-16">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl text-gray-700 uppercase">
              Our Directory
            </h1>
            <a className="inline-block font-semibold uppercase text-sm px-3 py-3 leading-none border rounded-full bg-gray-800 text-white border-white">
              View All
            </a>
          </div>
          <h1 className="pt-8 pb-8 font-bold text-3xl">
            Invidunt Labore Et Dolore
          </h1>
          <hr />
          <ul className="pt-6 pb-6 text-gray-500 grid grid-cols-3 gap-4">
            <li>Featured Professional</li>
            <li>Most views Products</li>
            <li>
              <a className="border-gray-900 border-b-2 pb-2">
                Top Rated Vendors
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-12">
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
