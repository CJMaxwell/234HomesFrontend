import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Button from '../atoms/Button';
import Navbar from '../Organisms/Navbar';
import Footer from './Footer';
import SiteLink from '../atoms/SiteLink';
import PostCard from '../Organisms/PostCard';
import ProfessionalCard from '../Organisms/ProfessionalCard';
import DIYCard from '../Organisms/DIYCard';
import { theme } from '../../styles/theme';

const LandingStyle = {
  top: '50%',
  left: '13%',
};

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
      <section>
        <div className="relative">
          <img src="/Adora_NH.png" alt="Home banner" />
        </div>
        <div className="absolute" style={LandingStyle}>
          <h1 className="text-white font-bold text-4xl">
            Design Your Universe
          </h1>
          <div>
            <Button>House Tour</Button>
            <Button
              bgColor={theme.colors.yellow1}
              border={theme.colors.yellow1}
              borderRadius={'0px'}
            >
              Stories
            </Button>
            <Button
              bgColor={theme.colors.green1}
              border={theme.colors.green1}
              borderRadius={'0px'}
            >
              DIY
            </Button>
            <Button
              bgColor={theme.colors.gray2}
              border={theme.colors.gray2}
              borderRadius={'0 0.25rem 0 0'}
            >
              Directory
            </Button>
          </div>
          <div>
            <form>
              <div className="flex bg-white p-2">
                <div>
                  <div>
                    <label>Type</label>
                  </div>
                  <input type="text" required placeholder="Enter the type" />
                </div>
                <div>
                  <div>
                    <label>Style</label>
                  </div>
                  <input type="text" required placeholder="Enter style" />
                </div>
                <div>
                  <div>
                    <label>Location</label>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter the location"
                  />
                </div>
                <div>
                  <div>
                    <label>Year Built</label>
                  </div>
                  <input type="text" required placeholder="Enter year built" />
                </div>
                {/* <div className="mt-5 ml-1">
                  <SiteLink bgColor={theme.colors.orange1}>
                    <img src="/search.svg" alt="Search" />
                    Search
                  </SiteLink>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 text-center pt-24 pb-24">
        <div style={connectStyle}>
          <span>Connect</span> | <span>Share</span> |{' '}
          <span>Live Authentic</span>
        </div>
        <h1 className="pt-6 text-black font-semibold">
          The Contemporary African Home
        </h1>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt
          <br />
          expedita alias repellendus reprehenderit architecto eos enim delectus
          optio libero.
        </p>
        <div className="pt-16">
          <button className="border-b-2 border-black">
            Learn More About Us
            <img
              className="inline-block h-4 pl-4"
              src="/left-arrow-button.svg"
              alt="View more"
            />
          </button>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="p-16 text-white" style={sectionStyle}>
          <h3>House Tour</h3>
          <h1 className="font-bold text-5xl leading-none pb-4 pt-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="pb-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <SiteLink bgColor={theme.colors.orange1} border={'1px solid #FFF'}>
            Get Inspired
          </SiteLink>
        </div>
        <div>
          <img
            src="/AH.png"
            alt="Section Image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="px-16 mb-24 container mx-auto mt-20 bg-white">
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
