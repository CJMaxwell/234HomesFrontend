import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import UserRatingCard from '../molecules/UserRatingCard';
import UserInfoCard from '../molecules/UserInfoCard';
import SingleVendorCard from '../Organisms/SingleVendorCard';
import Save from '../molecules/Save';
import Share from '../molecules/Share';
import Footer from './Footer';




const Wrapper = styled.section`

.title {
  color: ${({ theme }) => theme.colors.gray1};
}
.category {
  color: ${({ theme }) => theme.colors.orange1};
  font-size: 0.8rem;
}
.description {
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 0.8rem;
  width: 26rem;
}
.more-photos {
  color: ${({ theme }) => theme.colors.orange1};
}
.similiar-products, .sold-by {
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 0.8rem;
}
`;
const GalleryImg = styled.section`
  height: 35.875rem;
  background: url('/img/sidekix-media-I_QC1JICzA0-unsplash-gallery.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .save-share {
    position: absolute;
    top: 85%;
    left: 50%; 
    transform: translate(-50%, -50%);
  }
  .directional-btn {
    position: absolute;
    top: 50%;
    width: 100%
  }

@keyframes bounce {
  0% {
    transform: scale(1,1) translate(0px, 0px);
  }

  50%{
    transform: scale(1,0.8) translate(0px, 10px); 
  }

  100% {
    transform: scale(1,1) translate(0px, 0px);
  }
}

  .callout {
    position: absolute;
    top: 25%;
    left: 35%;
    width: 100%;
    animation: bounce 5s infinite;
  }

`;

const SingleGallery = () => {

  const [open, setOpen] = useState(false);


  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <section className="mb-48 mt-8 grid grid-cols-5">
        <section className="col-span-3" >
          <GalleryImg className="relative">
            <section className="flex items-center justify-between directional-btn">
              <button>
                <img className="h-8 px-16" src="/img/down-arrow-gallery-left.svg" alt="Left direction" />
              </button>
              <button>
                <img className="h-8 px-16" src="/img/down-arrow-gallery-right.svg" alt="Right direction" />
              </button>
            </section>
            <section className="flex items-end justify-center save-share">
              <section className="pr-6">
                <Save />
              </section>
              <Share />
            </section>
            <button onClick={() => setOpen(!open)} className="callout focus:outline-none">
              <img className="h-8" src="/img/callout-tab.svg" alt="See vendor that sold this product" />
            </button>
          </GalleryImg>
          {
            open && (
              <section className="pl-24">
                <h4 className="pt-8 pb-6 font-semibold sold-by">Products Sold By</h4>
                <section className="mb-16">
                  <UserInfoCard padding="1rem" />
                </section>
                <section className="flex items-center justify-between mb-6">
                  <p className="similiar-products font-semibold">Vendors With Similar Products</p>
                  <div className="flex item justify-between">
                    <img className="h-10 w-10 mr-4 p-2 border border-gray-700" src="/img/down-arrow_ss-right.svg" alt="" />
                    <img className="h-10 w-10 p-2 border border-gray-700" src="/img/down-arrow__s-s-left.svg" alt="" />
                  </div>
                </section>
                <section className="grid grid-cols-4 gap-2">
                  <SingleVendorCard
                    imgUrl="/img/vendors/single-vendor-sidekix-media-I_QC1JICzA0-unsplash.png"
                    height="10.3rem"
                    name="Nick Interiors Ltd"
                    occupation="Interior Designer"
                    location="Ikeja, Lagos"
                    phone="0803 456 7890"
                    fontSize="0.8rem"
                  />
                  <SingleVendorCard
                    imgUrl="/img/vendors/francesca-tosolini-tHkJAMcO3QE-unsplash.png"
                    height="10.3rem"
                    name="Lorem Furniture"
                    occupation="Painter"
                    location="Barnawa, Kaduna"
                    phone="0809 053 4405"
                    fontSize="0.8rem"
                  />
                  <SingleVendorCard
                    imgUrl="/img/vendors/jacek-dylag-Vve7XkiUq_Y-unsplash.png"
                    height="10.3rem"
                    name="Chuma & Sons Ltd"
                    occupation="Interior Designer"
                    location="Ikeja, Lagos"
                    phone="0803 456 7890"
                    fontSize="0.8rem"
                  />
                  <SingleVendorCard
                    imgUrl="/img/vendors/architecture-clouds-estate-exterior-280222-1.png"
                    height="10.3rem"
                    name="Consetetur Designs"
                    occupation="Painter"
                    location="Barnawa, Kaduna"
                    phone="0809 053 4405"
                    fontSize="0.8rem"
                  />
                </section>
              </section>

            )
          }

        </section>
        <section className="col-span-2 pl-12">
          <UserRatingCard />
          <hr className="mt-6" />
          <div className="capitalize mt-10 font-semibold text-4xl leading-10">
            <h1 className="title">dolor consetetur,</h1>
            <p>Lekki - Lagos</p>
          </div>
          <h6 className="category py-4">Kitchen</h6>
          <p className="description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
          <div className="font-semibold mt-10 mb-6">
            Other Photos in <span className="more-photos">Dolor Consetetur, Lekki - Lagos</span>
          </div>
          <div className="flex items-center">
            <img className="h-20 pr-2" src="/img/B-home-gallery.png" alt="" />
            <img className="h-20 pr-2" src="/img/Bart-gallery.png" alt="" />
            <img className="h-20 pr-2" src="/img/bseat-gallery.png" alt="" />
            <img className="h-20 pr-2" src="/img/bed-gallery.png" alt="" />
            <img className="h-20" src="/img/beed.png" alt="" />
          </div>
        </section>
      </section>
      <Footer />
    </Wrapper>
  )
}

export default SingleGallery
