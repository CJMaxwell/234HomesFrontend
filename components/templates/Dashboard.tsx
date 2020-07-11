import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Footer from './Footer';
import Favourite from '../molecules/Favourite';
const Hero = styled.section`
  height: 12.425rem;
  background: url('/img/Hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Dashboard = () => {
  return (
    <section>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="general-padding container mx-auto">
        <ProfileNavbar />
      </div>
      <Hero />
      <section className="container mx-auto general-padding mt-20 mb-32">
        <div className="flex justify-between items-center">
          <Favourite imgUrl={'/img/AH-fav.png'} height={'15rem'} width={'22rem'} title={'Interior Designers'} />
          <Favourite imgUrl={'/img/pink-and-purple-wallpaper-1616403.png'} height={'15rem'} width={'22rem'} title={'Painters'} />
          <Favourite imgUrl={'/img/B-test.png'} height={'15rem'} width={'22rem'} title={'Decorators'} />
        </div>
        <div className="flex justify-between items-center mt-12">
          <Favourite imgUrl={'/img/2-man-on-construction-site-during-daytime-159306.png'} height={'15rem'} width={'22rem'} title={'Design & Construction'} />
          <Favourite imgUrl={'/img/architecture-clouds-estate-exterior-280222.png'} height={'15rem'} width={'22rem'} title={'Landscape Design'} />
          <Favourite imgUrl={'/img/bathroom-cabinet-candles-faucet-342800.png'} height={'15rem'} width={'22rem'} title={'Baths, Saunas & Pools'} />
        </div>
        <div className="flex justify-between items-center mt-12">
          <Favourite imgUrl={'/img/black-dslr-camera-mounted-on-black-tripod-212372.png'} height={'15rem'} width={'22rem'} title={'Phtographers'} />
          <Favourite imgUrl={'/img/close-up-of-telephone-booth-257736.png'} height={'15rem'} width={'22rem'} title={'Electrical Installations'} />
          <Favourite imgUrl={'/img/person-holding-black-pen-1109541.png'} height={'15rem'} width={'22rem'} title={'Architect'} />
        </div>
        <div className="flex justify-between items-center mt-12">
          <Favourite imgUrl={'/img/adult-building-business-clean-209271.png'} height={'15rem'} width={'22rem'} title={'Cleaning Apartments'} />
          <Favourite imgUrl={'/img/tierra-mallorca-rgJ1J8SDEAY-unsplash.png'} height={'15rem'} width={'22rem'} title={'Real Estate Agents'} />
          <Favourite imgUrl={'/img/two-assorted-color-padded-chairs-near-side-table-1350789.png'} height={'15rem'} width={'22rem'} title={'Furniture & Accessories'} />
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default Dashboard
