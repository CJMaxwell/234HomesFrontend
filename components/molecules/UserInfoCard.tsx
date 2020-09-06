import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

interface Props {
  marginTtop?: string;
  padding?: string
}
const ProfileCard = styled.section<Props>`
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
  .vendor-details,.desc,.vendor-name {
    padding-left: ${({ padding }) => padding || ''};
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

const UserInfoCard: React.FC<Props> = ({ marginTtop, padding }) => {
  return (
    <ProfileCard padding={padding} className={`flex border ${marginTtop} border-gray-200 rounded-md bg-white p-8`}>
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
  )
}

export default UserInfoCard
