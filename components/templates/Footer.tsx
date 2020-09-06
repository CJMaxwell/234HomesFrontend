import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FormButton = styled.button`
  top: -57px;
  left: 85%;
  height: 45px;
`;
const Logo = styled.a`
  img {
    width: 59.5px;
    object-fit: cover;
  }
`;

const P = styled.p`
  margin-bottom: 35px;
`;

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="text-white grid grid-cols-4 gap-4 container mx-auto pt-16 general-padding">
          <div>
            <Logo>
              <img src="/img/234_Homes_footer_logo.png" className="pb-8" alt="+234Homes logo" />
            </Logo>
            <p className="text-sm leading-loose">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam.
            </p>
            <ul className="flex justify-start pt-8">
              <li className="pr-3">
                <a>
                  <img src="/img/instagram.svg" className="h-6 w-6" alt="Link to Instagram page" />
                </a>
              </li>
              <li className="pr-3">
                <a>
                  <img src="/img/facebook.svg" className="h-6 w-6" alt="Link to Facebook page" />
                </a>
              </li>
              <li className="pr-3">
                <a>
                  <img src="/img/twitter.svg" className="h-6 w-6" alt="Link to Twitter page" />
                </a>
              </li>
              <li>
                <a>
                  <img src="/img/linkedin.svg" className="h-6 w-6" alt="Link to LinkedIn page" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="pb-12 font-bold">Company</h6>
            <ul className="text-sm leading-loose">
              <Link href="/about-us">
                <li>
                  <a>About +234Homes</a>
                </li>
              </Link>
              <Link href="/careers">
                <li>
                  <a>Careers</a>
                </li>
              </Link>
              <li>
                <a>Terms &amp; Privacy</a>
              </li>
              <li>
                <a>Cookie Policy</a>
              </li>
              <li>
                <a>Mobile App</a>
              </li>
              <li>
                <a>Copyright &amp; Trademarks</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="pb-12 font-bold">Quick Links</h6>
            <ul className="text-sm leading-loose">
              <li>
                <a>Register As A Professional</a>
              </li>
              <Link href="/professionals">
                <li>
                  <a>Professional</a>
                </li>
              </Link>
              <Link href="/vendors">
                <li>
                  <a>Vendors</a>
                </li>
              </Link>
              <Link href="/stories">
                <li>
                  <a>Blog Stories</a>
                </li>
              </Link>

              <li>
                <a>Advert Placement</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <Link href="/house-tours">
                <li>
                  <a>House Tour</a>
                </li>
              </Link>
              <Link href="/gallery">
                <li>
                  <a>Gallery</a>
                </li>
              </Link>
              <li>
                <a>Advertise</a>
              </li>
              <li>
                <a>Partner</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="pb-12 font-bold">News Letter Subscription</h6>
            <p className="text-sm">
              Subscribe to our newsletter and we will inform you of our latest nenwson directory and
              promotion.
            </p>
            <form className="relative pt-6">
              <input
                type="text"
                required
                className="appearance-none block w-full bg-gray-700 text-white border border-gray-700 rounded-full py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter email address"
              />
              <FormButton
                type="submit"
                className="relative bg-gray-600 text-white font-bold rounded-full py-3 px-3"
              >
                <img src="/img/left-arrow-submit.svg" alt="Chevron right" />
              </FormButton>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <img src="/img/footer_bg.svg" alt="Brand image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
