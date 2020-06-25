import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Button from '../atoms/Button';
import Navbar from '../Organisms/Navbar';
import Footer from './Footer';
import SiteLink from '../atoms/SiteLink';
import PostCard from '../Organisms/PostCard';
import ProfessionalCard from '../Organisms/ProfessionalCard';
import DIYCard from '../Organisms/DIYCard';

const LandingStyle = {
  top: '50%',
  left: '13%',
};

const sectionStyle = {
  backgroundColor: '#F7681A',
};
// const imageStyle = {
//   height: '300px',
// };

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
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
      <section className="bg-gray-200 text-center">
        <div>
          <span>Connect</span> | <span>Share</span> |{' '}
          <span>Live Authentic</span>
        </div>
        <h1>The Contemporary African Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt
          <br />
          expedita alias repellendus reprehenderit architecto eos enim delectus
          optio libero.
        </p>
        <button>Learn More About Us</button>
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
      <section>
        <div>
          <h1>Stories</h1>
        </div>
        <div className="flex mb-4">
          <div className="w-1/4 pr-4">
            <PostCard />
            <PostCard />
          </div>
          <div className="w-2/4">
            <PostCard />
          </div>
          <div className="w-1/4 pl-4">
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3">
          <div>
            <DIYCard />
          </div>
          <div>
            <div>
              <DIYCard />
            </div>
            <div>
              <DIYCard />
            </div>
          </div>
          <div>
            <h4>DIY</h4>
            <h1>Lorem Ipsum Dolor Sit Amet</h1>
            <p>
              Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
            <SiteLink>Get Started</SiteLink>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>Our Directory</h1>
        </div>
        <h1>Invidunt Labore Et Dolore</h1>
        <hr />
        <ul>
          <li>Featured Professional</li>
          <li>Most views Products</li>
          <li>Top Rated Vendors</li>
        </ul>
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
