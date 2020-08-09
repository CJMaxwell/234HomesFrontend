import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Hero from '../Organisms/Hero';
import Favourite from '../molecules/Favourite';
import Footer from './Footer';
import Offering from '../Organisms/Offering';

const InitialDirectory = () => {

  const theme = useContext(ThemeContext);

  return (
    <section>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="container mx-auto">
        <ProfileNavbar />
      </div>
      <hr />
      <div className="container mx-auto">
        <Offering />
      </div>
      <Hero title='Find A Professional For Your Project!' placeholder="What Services Do You Need?" />
      <section className="container mx-auto general-padding mt-20 mb-32 grid grid-cols-3 gap-12">
        <Favourite imgUrl='/img/AH-fav.png' height='15rem' width='22rem' title='Interior Designers' />
        <Favourite imgUrl='/img/pink-and-purple-wallpaper-1616403.png' height='15rem' width='22rem' title='Painters' />
        <Favourite imgUrl='/img/B-test.png' height='15rem' width='22rem' title='Decorators' />
        <Favourite imgUrl='/img/2-man-on-construction-site-during-daytime-159306.png' height='15rem' width='22rem' title='Design & Construction' />
        <Favourite imgUrl='/img/architecture-clouds-estate-exterior-280222.png' height='15rem' width='22rem' title='Landscape Design' />
        <Favourite imgUrl='/img/bathroom-cabinet-candles-faucet-342800.png' height='15rem' width='22rem' title='Baths, Saunas & Pools' />
        <Favourite imgUrl='/img/black-dslr-camera-mounted-on-black-tripod-212372.png' height='15rem' width='22rem' title='Phtographers' />
        <Favourite imgUrl='/img/close-up-of-telephone-booth-257736.png' height='15rem' width='22rem' title='Electrical Installations' />
        <Favourite imgUrl='/img/person-holding-black-pen-1109541.png' height='15rem' width='22rem' title='Architect' />
        <Favourite imgUrl='/img/adult-building-business-clean-209271.png' height='15rem' width='22rem' title='Cleaning Apartments' />
        <Favourite imgUrl='/img/tierra-mallorca-rgJ1J8SDEAY-unsplash.png' height='15rem' width='22rem' title='Real Estate Agents' />
        <Favourite imgUrl='/img/two-assorted-color-padded-chairs-near-side-table-1350789.png' height='15rem' width='22rem' title='Furniture & Accessories' />
      </section>
      <Footer />
    </section>
  )
}

export default InitialDirectory
