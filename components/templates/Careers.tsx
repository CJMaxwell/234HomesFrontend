import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import Footer from './Footer';

const Wrapper = styled.section`


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
  .join {
    background-color: ${({ theme }) => theme.colors.gray15};
  }
  .bg-join-side {
    height: 23.15rem;
    max-width: 32.7rem;
    background: url('/img/man-and-woman-smiling-inside-building-1367269-about.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .join-desc {
    width: 27rem;
  }
  .title {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    width: 20rem;
  }

  .bg-possibility {
    background-color: ${({ theme }) => theme.colors.green1};
  }
  .idea-desc {
    padding-left: 4.45rem;
  }
  .big-idea-desc {
    width: 25.6rem;
  }
  .bg-possible {
    height: 27.3rem;
    background: url('/img/three-woman-sitting-beside-brown-wooden-conference-table-1181431-about.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .love-monday {
    font-size: 1.75rem;
    width: 25rem;
  }
`;

const Careers = () => {
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
          <li>Careers</li>
        </ul>
      </div>
      
      <section className="join">
        <div className="general-padding container mx-auto flex items-center justify-between">
          <div>
            <h1 className="title">
              Join Our Passionate Team
            </h1>
            <p className="join-desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
            </p>
          </div>
          <div className="bg-join-side w-full">
          </div>
        </div>
      </section>
      <section className="bg-possibility text-white">
        <div className="w-full flex">
          <div className="bg-possible w-1/2">
          </div>
          <div className="w-1/2  pt-20 idea-desc">
            <h1 className="love-monday font-semibold">It’s possible to love Monday mornings!</h1>
            <p className="big-idea-desc pt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center">
        <section>
          <h1>Apply Today</h1>
          <p>
            We’re looking for success driven candidates! Feeling up to the challenge? 
            Please fill out the form below &amp; upload your resume and cover letter.
          </p>
        </section>
        <form>
          <div>
            <input type="text" name="firstName" className="bg-gray-400"/>
            <input type="text" name="LastName" className="bg-gray-400"/>
          </div>
          <div>
            <input type="text" name="phoneNumber" className="bg-gray-400"/>
            <input type="email" name="Email" className="bg-gray-400"/>
          </div>
          <div>
            <input type="text" name="desiredPosition" className="bg-gray-400"/>
          </div>
          <div>
            <input type="file" name="resume" className=""/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </Wrapper>
  )
}

export default Careers
