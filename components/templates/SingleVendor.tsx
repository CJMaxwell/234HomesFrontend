import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router'

import withApollo from '../../lib/withApollo';
import useUser from '../../hooks/useUser';
import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import Footer from './Footer';
import ProductListCard from '../Organisms/ProductListCard';
import UserInfoCard from '../molecules/UserInfoCard';

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


const SingleVendor: React.FC<Props> = ({ imgUrl }) => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;

  const { user, userLoading } = useUser(id as string);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      {
        user && (
          <section>
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
            <UserBanner imgUrl={`${user.banner || '/img/vendor-profile-banner.png'}`} />
            <section className="container mx-auto general-padding mb-24">
              {/*  */}

              <UserInfoCard
                marginTtop="-mt-40"
                businessName={user.businessName}
                bio={user.bio}
                address={user.address}
                city={user.city}
                state={user.state}
                phoneNumber={user.phoneNumber}
                logo={user.profilePhoto}
                website={user.website}
              />


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
          </section>
        )
      }
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(SingleVendor);
