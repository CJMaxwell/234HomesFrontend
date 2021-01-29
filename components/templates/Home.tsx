import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

import Button from '../atoms/Button';
import Navbar from '../Organisms/Navbar';
import Footer from './Footer';
import SiteLink from '../atoms/SiteLink';
import PostCard from '../Organisms/PostCard';
import ProfessionalCard from '../Organisms/ProfessionalCard';
import DIYCard from '../Organisms/DIYCard';
import MostViewedProducts from '../Organisms/MostViewedProducts';
import TopRatedVendor from '../Organisms/TopRatedVendor';
import Layout from '../Layouts/Layout';

const HomeBannerBtn = styled(Button)`
  border-radius: 34px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  min-width: 7rem;
  height: 3.4rem;

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
    min-width: 8.95rem;
  }

  &.stories {
    background: ${({ theme }) => theme.colors.yellow1};
    border-color: ${({ theme }) => theme.colors.yellow1};
    border-radius: 0;
    min-width: 6.74rem;
  }

  &.diy {
    background: ${({ theme }) => theme.colors.green1};
    border-color: ${({ theme }) => theme.colors.green1};
    border-radius: 0;
    min-width: 4.158rem;
  }

  &.directory {
    background: ${({ theme }) => theme.colors.gray5};
    border-color: ${({ theme }) => theme.colors.gray5};
    border-radius: 0px 7px 0px 0px;
    min-width: 8rem;
  }
`;

const HomeBanner = styled.section`
  height: 35.875rem;
  background: url('/img/Adora_NH.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .home-banner-tabs {
    height: 3.4rem;
  }

  .form {
    width: 69rem;
    border-radius: 0px 7px 7px 7px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 20px 20px 40px ${({ theme }) => theme.colors.gray16};
    padding: 9px 12px;
    height: 4.85rem;
    box-sizing: border-box;

    .input-group {
      display: block;

      label {
        font-weight: 400;
        display: block;
        font-size: 15px;
      }

      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.colors.gray17};
        padding-left: 12px;
      }
    }
  }
`;

const Connect = styled.section`
  background: ${({ theme }) => theme.colors.gray10};

  .title {
    color: ${({ theme }) => theme.colors.green1};
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  h1 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gray1};
  }
  p {
    color: ${({ theme }) => theme.colors.gray5};
  }
  button {
    color: ${({ theme }) => theme.colors.gray2};
    border-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const HouseTour = styled.section`
  height: 570px;
  background-color: ${({ theme }) => theme.colors.orange1};

  h1 {
    font-size: 2.75rem;
    font-weight: 500;
  }

  .description {
    padding: 5.46rem 5.46rem 0 0;
  }

  .wrapper,
  .explore {
    height: 100%;
  }

  .prev-next {
    margin-top: 358.1px;
  }
`;

const LinkButton = styled(SiteLink)`
  background-color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 2.25rem;
`;

const PostGrid = styled.div`
  height: 646px;
`;

const NextPrev = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  width: 60px;
  height: 45px;

  img {
    height: 20px;
  }

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.gray6};
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.colors.gray6};
    border-radius: 0px 5px 5px 0px;
  }
`;

const Stories = styled.section`
  .view-more {
    background: ${({ theme }) => theme.colors.orange2};
    width: 125px;
    height: 39.2px;
    font-size: 12px;
  }
  h1 {
    font-size: 1.5rem;
  }
`;

const DIY = styled.section`
  background: ${({ theme }) => theme.colors.gray9};

  .get-started {
    background: ${({ theme }) => theme.colors.green1};
    border-radius: 36px;
  }
  .diy-title {
    color: ${({ theme }) => theme.colors.green1};
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const Directory = styled.div`
  .view-all {
    background: ${({ theme }) => theme.colors.gray5};
    border-radius: 36px;
    width: 125px;
    height: 39.2px;
    font-size: 12px;
  }
  .active-link {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray4};
    padding-bottom: 0.5rem;
  }
`;

const Home = () => {
  const theme = useContext(ThemeContext);
  const [tab, setTab] = useState('professional');

  return (
    <Layout>
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
              <input className="outline-none" type="text" placeholder="Enter type" />
            </div>
            <div className="input-group">
              <label>Style</label>
              <input className="outline-none" type="text" placeholder="Enter style" />
            </div>
            <div className="input-group">
              <label>Location</label>
              <input className="outline-none" type="text" placeholder="Enter location" />
            </div>
            <div className="input-group">
              <label>Year Built</label>
              <input className="outline-none" type="text" placeholder="Enter year built" />
            </div>
            <HomeBannerBtn className="uppercase flex justify-center items-center" type="submit">
              <img src="/img/search.svg" alt="Search icon" className="h-4" /> Search
            </HomeBannerBtn>
          </form>
        </div>
      </HomeBanner>

      <Connect className="text-center pt-24 pb-24">
        <div className="title">
          <span>Connect</span> | <span>Share</span> | <span>Live Authentic</span>
        </div>
        <h1 className="mt-6 font-semibold">The Contemporary African Home</h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt
          <br />
          expedita alias repellendus reprehenderit architecto eos enim delectus optio libero.
        </p>
        <div className="mt-12">
          <Link href="/about-us">
            <a className="border-b-2 border-gray-700 pb-1">
              Learn More About Us
              <img
                className="inline-block h-4 pl-4"
                src="/img/left-arrow-button.svg"
                alt="View more"
              />
            </a>
          </Link>
        </div>
      </Connect>

      <HouseTour className="relative">
        <div className="container mx-auto general-padding flex wrapper">
          <div className="text-white w-1/2 description">
            <h3 className="pb-6">House Tour</h3>
            <h1 className="font-bold text-4xl leading-none pb-4">
              Lorem ipsum dolor <br />
              sit amet
            </h1>
            <p className="pb-16 text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <div className="pb-32">
              <LinkButton onClick={() => Router.push('/house-tours')}>Get Inspired</LinkButton>
            </div>
          </div>

          <div className="z-50 w-1/2 prev-next flex justify-end">
            <NextPrev className="inline-flex justify-center items-center">
              <img src="/img/arrow-left.svg" alt="Previous" />
            </NextPrev>
            <NextPrev className="inline-flex justify-center items-center">
              <img src="/img/arrow-right.svg" alt="Next" />
            </NextPrev>
          </div>

          <div className="explore absolute w-1/2 right-0">
            <img src="/img/AH.png" className="w-full h-full object-cover" alt="Sample house" />
          </div>
        </div>
      </HouseTour>

      <Stories className="container mx-auto general-padding mt-12 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-gray-700">Stories</h1>
          <Link href="/stories">
            <a className="view-more inline-flex justify-center items-center font-semibold uppercase leading-none border rounded-full text-white border-white">
              View More
            </a>
          </Link>
        </div>
        <PostGrid className="grid grid-cols-4 mb-4 mt-8">
          <div className="pr-4">
            <div className="grid grid-rows-2 gap-4">
              <PostCard height="248px" />
              <PostCard imgUrl="/img/AH_dining.png" height="248px" />
            </div>
          </div>
          <div className="col-span-2 cursor-pointer" onClick={() => Router.push('/single-story')}>
            <PostCard imgUrl="/img/two-white-and-brown-armchairs.png" height="507px" />
          </div>
          <div className="pl-4">
            <div className="grid grid-rows-2 gap-4">
              <PostCard imgUrl="/img/Adora_NH_grid.png" height="248px" />
              <PostCard imgUrl="/img/Adora_NH_rope.png" height="248px" />
            </div>
          </div>
        </PostGrid>
      </Stories>

      <DIY className="pt-8 pb-8 mb-16">
        <div className="mt-16 container mx-auto general-padding mb-20 ">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="cursor-pointer" onClick={() => Router.push('/single-diy')}>
                <DIYCard imgUrl="/img/EO_kitchen.png" height="414.5px" />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div>
                  <DIYCard imgUrl="/img/EO_bedroom.png" height="199.5px" />
                </div>
                <div>
                  <DIYCard imgUrl="/img/EO_sitting_room.png" height="199.5px" />
                </div>
              </div>
            </div>
            <div className="pl-8">
              <h4 className="pt-12 diy-title">DIY</h4>
              <h1 className="font-bold pb-4 pt-4">
                Lorem Ipsum <br />
                Dolor Sit Amet
              </h1>
              <p className="pb-16 text-sm">
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
              </p>
              <SiteLink onClick={() => Router.push('/diy')} className="get-started text-white">
                Get Started
              </SiteLink>
            </div>
          </div>
        </div>
      </DIY>

      <Directory className="container mx-auto pb-12">
        <div className="px-16">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-700 uppercase">Our Directory</h1>
            <Link href="/directory">
              <a className="font-semibold uppercase leading-none text-white view-all inline-flex justify-center items-center">
                View All
              </a>
            </Link>
          </div>
          <h1 className="pt-6 pb-6 font-bold text-2xl">Invidunt Labore Et Dolore</h1>
          <hr />
          <div className="flex justify-between items-center pb-10 pt-5">
            <ul className="text-gray-500 flex text-sm">
              <li className="pr-8">
                <a
                  onClick={() => setTab('professional')}
                  className={`${tab === 'professional' && 'active-link'}`}
                >
                  Featured Professional
                </a>
              </li>
              <li className="pr-8">
                <a
                  onClick={() => setTab('products')}
                  className={`${tab === 'products' && 'active-link'}`}
                >
                  Most views Products
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTab('vendors')}
                  className={`${tab === 'vendors' && 'active-link'}`}
                >
                  Top Rated Vendors
                </a>
              </li>
            </ul>
            <div className="inline-flex">
              <button className="pr-4">
                <img src="/img/chveron-left.svg" className="h-4" alt="Scroll left" />
              </button>
              <button>
                <img src="/img/chveron-right.svg" className="h-4" alt="Scroll right" />
              </button>
            </div>
          </div>
          {tab === 'professional' && (
            <div className="grid grid-cols-4 gap-4 mb-12">
              <ProfessionalCard
                name="Babatunde Maxwell"
                occupation="Interior Designer"
                location="Ikeja, Lagos"
                phone="0803 456 7890"
              />
              <ProfessionalCard
                name="Alexandria Vladimir"
                occupation="Painter"
                location="Barnawa, Kaduna"
                phone="0809 053 4405"
              />
              <ProfessionalCard
                name="Micheal Jonna"
                occupation="Carpenter"
                location="Wuse, Abuja"
                phone="0812 456 8900"
              />
              <ProfessionalCard
                name="Wuraola Gbotemi"
                occupation="Plumber"
                location="Maitama, Abuja"
                phone="0809 053 4405"
              />
            </div>
          )}
          {tab === 'products' && (
            <div className="grid grid-cols-2 gap-4">
              <MostViewedProducts imgUrl="/img/BArt.png" />
              <MostViewedProducts imgUrl="/img/B-18-B.png" />
            </div>
          )}

          {tab === 'vendors' && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              <TopRatedVendor
                imgUrl="/img/vendors/sidekix-media-I_QC1JICzA0-unsplash.png"
                height="15rem"
                name="Nick Interior LTD"
                location="77, Central Park South, Ikeja, Lagos"
                phone="0812 456 8900, 0812 456 8900"
              />
              <TopRatedVendor
                imgUrl="/img/vendors/francesca-tosolini-tHkJAMcO3QE-unsplash.png"
                height="15rem"
                name="Lorem Furniture"
                location="77, Central Park South, Ikeja, Lagos"
                phone="0812 456 8900, 0812 456 8900"
              />
              <TopRatedVendor
                imgUrl="/img/vendors/francesca-tosolini-w1RE0lBbREo-unsplash.png"
                height="15rem"
                name="Chuma & Sons LTD"
                location="77, Central Park South, Ikeja, Lagos"
                phone="0812 456 8900, 0812 456 8900"
              />
              <TopRatedVendor
                imgUrl="/img/vendors/two-white-rod-pocket-curtains-910458.png"
                height="15rem"
                name="Consetetur Designs"
                location="77, Central Park South, Ikeja, Lagos"
                phone="0812 456 8900, 0812 456 8900"
              />
            </div>
          )}
        </div>
      </Directory>
    </Layout>
  );
};

export default Home;
