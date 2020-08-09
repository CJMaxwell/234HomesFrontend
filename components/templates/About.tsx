import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import Footer from './Footer';

const Wrapper = styled.section`
  position: relative;
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .who-we-are,.bg-big-idea {
    background-color: ${({ theme }) => theme.colors.gray15};
  }
  .promise-and-culture {
    background-color: ${({ theme }) => theme.colors.orange1};
  }
  .we-are-one {
    height: 23.15rem;
    background: url('/img/562398-PL0OI8-379.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .we-are-two {
    height: 11.1rem;
    background: url('/img/AH-about.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .we-are-three {
    height: 11.1rem;
    background: url('/img/2-seat-about-orange-leather-sofa-beside-wall-1866149.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .description {
    max-width: 21.15rem;
    padding-top: 1.75rem;
  }
  .title {
    font-size: 1.75rem;
  }
  .about-title, .the-idea,.team-title,.name {
    color: ${({ theme }) => theme.colors.gray1};
  }
  .big-idea {
    height: 33.95rem;
    background: url('/img/15706.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .big-idea-desc {
    width: 25.6rem;
  }
  .team-mate-one{
    height: 33.95rem;
    background: url('/img/woman-wearing-gray-notch-lapel-suit-jacket-2381069.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .team-mate-two{
    height: 33.95rem;
    background: url('/img/man-leaning-on-beige-post-3206078.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .team-mate-three{
    height: 33.95rem;
    background: url('/img/woman-in-blue-blazer-while-standing-3727461.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .about-people {
    padding: 4.55rem 0;
  }
  .idea-desc {
    padding-left: 4.45rem;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
        <ul className="breadcrumb flex items-center uppercase">
          <li>Company</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>About +234Homes</li>
        </ul>
      </div>
      <section className="who-we-are">
        <div className="general-padding container mx-auto grid grid-cols-2 gap-4 py-20">
          <div>
           <h1 className="about-title title font-semibold">Who We are</h1>
           <p className="description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
           </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="we-are-one row-span-2">
            </div>
            <div className="we-are-two">
            </div>
            <div className="we-are-three">
            </div>
          </div>
        </div>
      </section>
      <section className="promise-and-culture text-white">
        <div className="container mx-auto flex about-people">
          <div className="pr-32">
            <h1 className="font-semibold title">Our Promise</h1>
            <p className="pt-8">Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
          </div>
          <div className="pr-32">
           <h1 className="font-semibold title">Our Culture</h1>
           <p className="pt-8">Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</p>
          </div>
        </div>
      </section>

      <section className="bg-big-idea">
        <div className="w-full flex">
          <div className="big-idea w-1/2">
          </div>
          <div className="w-1/2  pt-20 idea-desc">
            <h1 className="the-idea title font-semibold">The Big Idea</h1>
            <p className="big-idea-desc pt-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      <section className="Our-team mt-20 mb-24">
        <div className="general-padding container mx-auto">
          <h1 className="team-title title  mb-12 font-semibold">Our Team</h1>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="team-mate-one"></div>
              <div>
                <h4 className="name font-semibold pt-6 pb-2">Adora John Doe</h4>
                <p className="role">Founder / CEO</p>
              </div>
            </div>
            <div>
              <div className="team-mate-two"></div>
              <div>
                <h4 className="name font-semibold pt-6 pb-2">Chuma Anagbado</h4>
                <p className="role">Managing Partner</p>
              </div>
            </div>
            <div>
              <div className="team-mate-three"></div>
              <div>
                <h4 className="name font-semibold pt-6 pb-2">Anita Okoro</h4>
                <p className="role">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  )
}

export default About
