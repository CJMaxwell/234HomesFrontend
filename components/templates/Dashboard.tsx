import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Footer from './Footer';
import Favourite from '../molecules/Favourite';
import Button from '../atoms/Button';


const Hero = styled.section`
  height: 16.425rem;
  background: url('/img/Hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    padding-top: 3.65rem;
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 1.4rem;
    font-family: 'Raleway', sans-serif;

  }

  .form-elements-wrap {
    width: 30rem;
    background: ${({ theme }) => theme.colors.white};
    padding-left: 20px;
    height: 3.15rem;
    box-sizing: border-box; 
  }
  
  .map-pin {
    display: inline-block;
    padding-right: 0.5rem;
    height: 23px;
  }
`;
const Search = styled(Button)`
  border-radius: 0;
  height: 3.15rem;
  width: 7rem;
`;


const Dashboard = () => {

  const theme = useContext(ThemeContext);

  return (
    <section>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="container mx-auto">
        <ProfileNavbar />
      </div>
      <Hero className="general-padding">
        <h1 className="text-center">
          Find A Professional For Your Project!
        </h1>
        <form className="flex items-center justify-center">
          <div className="flex items-center form-elements-wrap">
            <div className="border-r border-gray-400 h-full w-8/12">
              <input
                className="outline-none w-full h-full"
                type="text"
                placeholder="What Services Do You Need?"
              />
            </div>
            <div className="w-4/12 pl-3 h-full">
              <div className="flex items-center h-full w-full">
                <img src="/img/map-pin.svg" className="map-pin" alt="Map Pin" />
                <input
                  className="outline-none w-3/4 h-full"
                  type="text"
                  placeholder="Location"
                />
              </div>
            </div>
          </div>
          <Search className="uppercase font-semibold">Search </Search>
        </form>
      </Hero>
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
