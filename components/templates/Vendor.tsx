import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';


import ProfileNavbar from '../Organisms/ProfileNavbar';
import Hero from '../Organisms/Hero';
import Favourite from '../molecules/Favourite';
import Footer from './Footer';



const Vendor = () => {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <div className="container mx-auto">
        <ProfileNavbar />
      </div>
      <Hero title='Find Any Product For Your Home!' imgUrl='/img/vendors/banner.png' placeholder="Search for a product..." />
      <section className="container mx-auto general-padding mt-20 mb-32 grid grid-cols-3 gap-12">
        <Favourite imgUrl='/img/vendors/2-seat-orange-leather-sofa-beside-wall-1866149.png' height='15rem' width='22rem' title='Furniture & Accessories' />
        <Favourite imgUrl='/img/vendors/two-white-rod-pocket-curtains-910458.png' height='15rem' width='22rem' title='Curtains & Blinds' />
        <Favourite imgUrl='/img/vendors/adh.png' height='15rem' width='22rem' title='Wallpaper' />
        <Favourite imgUrl='/img/vendors/sidekix-media-I_QC1JICzA0-unsplash.png' height='15rem' width='22rem' title='Kitchen' />
        <Favourite imgUrl='/img/vendors/francesca-tosolini-tHkJAMcO3QE-unsplash.png' height='15rem' width='22rem' title='Living Room' />
        <Favourite imgUrl='/img/vendors/BeArt.png' height='15rem' width='22rem' title='Arts & Crafts' />
        <Favourite imgUrl='/img/vendors/Bull.png' height='15rem' width='22rem' title='Hand Made' />
        <Favourite imgUrl='/img/vendors/amber-kipp-79ePIEybmzQ-unsplash.png' height='15rem' width='22rem' title='Lighting' />
        <Favourite imgUrl='/img/vendors/francesca-tosolini-w1RE0lBbREo-unsplash.png' height='15rem' width='22rem' title='Bedroom' />
        <Favourite imgUrl='/img/vendors/EO.png' height='15rem' width='22rem' title='Decoration Materials' />
        <Favourite imgUrl='/img/vendors/jacek-dylag-Vve7XkiUq_Y-unsplash.png' height='15rem' width='22rem' title='Plumbing Materials' />
        <Favourite imgUrl='/img/vendors/tiles-window-bathroom-marble-105934.png' height='15rem' width='22rem' title='Baths, Saunas & Pools' />
      </section>
      <Footer />
    </div>
  )
}

export default Vendor
