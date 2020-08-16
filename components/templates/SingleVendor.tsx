import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Offering from '../Organisms/Offering';
import Button from '../atoms/Button';
import Footer from './Footer';
import ProductListCard from '../Organisms/ProductListCard';

interface Props {
  imgUrl?: string;
  height?: string;
}

const Wrapper = styled.div`
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

  .filter {
    color: ${({ theme }) => theme.colors.gray5};
    select {
      border: 1px solid ${({ theme }) => theme.colors.gray17};
      padding: 0.25rem 0.5rem;
      font-size: 0.8rem;
    }
    select:not(:last-child) {
      margin-right: 1.35rem;
    }
  }

  .filter-heading {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  .main-content {
    margin-top: 4.65rem;
  }
`;

const UserBanner = styled.div<Props>`
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 29rem;
`;

const ProfileCard = styled.section`
  .logo {
    border: 1.45rem solid ${({ theme }) => theme.colors.blue4};
  }
  .registered {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray11};
    padding-top: 0.85rem;
  }
  .vendor-name {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 1.75rem;
  }
  .vendor-details {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
  }
  .desc {
    color: ${({ theme }) => theme.colors.gray11};
    padding-top: 1.85rem;
    font-size: 0.8rem;
  }
  .star-ratings img:not(:last-child) {
    padding-right: 0.2575rem;
  }
`;

const MessageBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  background-color: ${({ theme }) => theme.colors.white};
  width: 8.8rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const SingleVendor: React.FC<Props> = ({ imgUrl = '' }) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <ProfileNavbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
        <ul className="breadcrumb flex items-center">
          <li>Directory</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Vendors</li>
        </ul>
      </div>
      <UserBanner imgUrl="/img/vendor-profile-banner.png" />
      <section className="container mx-auto general-padding mb-24">
        <ProfileCard className="flex items-center border border-gray-200 rounded-md bg-white -mt-40 p-8">
          <div className="w-1/4">
            <img src="/img/vendor-logo.png" className="logo" alt="Vendor Logo" />
            <p className="registered">Member since 2019</p>
          </div>
          <div className="w-3/4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="capitalize vendor-name font-semibold">MCITY VENTURES LTD</h1>
                <div className="vendor-details font-semibold">
                  <div className="flex items-center pt-4">
                    <span className="pr-3">
                      <img src="/img/vendor-loc.svg" alt="Vendor location" />
                    </span>
                    <span>No. 4 Idrissu Abdulmalik Street, Shomolu, Lagos</span>
                  </div>
                  <div className="flex items-center pt-4">
                    <span className="pr-3">
                      <img src="/img/phone.svg" alt="vendor's phone number" />
                    </span>
                    <span>+234 809 053 4405, 812 234 6780</span>
                  </div>
                  <div className="flex items-center pt-4">
                    <span className="pr-3">
                      <img src="/img/www.svg" alt="vendor's website" />
                    </span>
                    <span>www.mcityventures.com</span>
                  </div>
                </div>
              </div>
              <div>
                <MessageBtn className="uppercase">Send Message</MessageBtn>
                <div className="flex items-center justify-end  mt-6 star-ratings">
                  <img src="/img/star-vendor.svg" alt="star rating" />
                  <img src="/img/star-vendor.svg" alt="star rating" />
                  <img src="/img/star-vendor.svg" alt="star rating" />
                  <img src="/img/star-vendor.svg" alt="star rating" />
                  <img src="/img/star-vendor.svg" alt="star rating" />
                </div>
              </div>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est.
            </p>
          </div>
        </ProfileCard>

        <section className="flex justify-between items-center main-content">
          <div>
            <h1 className="filter-heading">Product Listings</h1>
          </div>
          <div className="filter">
            <select>
              <option value="Category">Category</option>
              <option value="">Category</option>
            </select>
          </div>
        </section>
        <section className="product-list border border-gray-200 mt-6">
          <div className="px-8 pt-8 pb-3">
            <ProductListCard imgUrl="/img/BArt.png" logo="/img/Image-11.png" />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl="/img/B-18-B.png" logo="/img/Image 16.png" ad />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard
              imgUrl="/img/brown-and-black-wooden-box-3889740.png"
              logo="/img/Image14er.png"
            />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl="/img/B-7.png" logo="/img/Image-11.png" ad />
          </div>
          <hr />
          <div className="px-8 py-3">
            <ProductListCard imgUrl="/img/Bullish.png" logo="/img/Image17.png" ad />
          </div>
          <hr />
          <div className="px-8 pt-3 pb-8">
            <ProductListCard
              imgUrl="/img/prince-abid-pEvPkPmuHzo-unsplash.png"
              logo="/img/Image-11.png"
            />
          </div>
        </section>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default SingleVendor;
