import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';

interface Props {
  imgUrl?: string;
  name?: string;
  occupation?: string;
  location?: string;
  phone?: string;
  height?: string;
  title?: string;
  width?: string;
  path?: string;
}

const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.gray15};
  .heading-text {
    font-size: 1.1rem;
  }
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray15};
`;
const ImgContainer = styled.div<Props>`
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: ${({ height }) => height};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px 5px 0 0;
`;

const SingleVendorCard: React.FC<Props> = ({
  imgUrl,
  name,
  height,
  width,
  location,
  phone,
  path = '/single-vendor',
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Link href={path}>
      <Main className="max-w-sm rounded-sm cursor-pointer">
        <div className="text-center">
          <ImgContainer imgUrl={imgUrl} height={height} width={width} />
        </div>
        <Wrapper className="py-4 px-4">
          <div className="text-sm">
            <h1 className="font-semibold heading-text">{name}</h1>
          </div>
          <div>
            <div className="text-xs pt-2 flex items-center">
              <img src="/img/home-professional-location.svg" alt="Location" />
              <span className="pl-2">{location}</span>
            </div>
            <div className="text-xs pt-2 flex items-center">
              <img src="/img/home-professional-phone.svg" alt="phone" />
              <span className="pl-2">{phone}</span>
            </div>
          </div>
          <button
            onClick={() => Router.push('/professional-about')}
            className="uppercase border-gray-600 text-gray-600 py-1 mt-4 w-full bg-white rounded-sm block text-center"
          >
            Send A Message
          </button>
        </Wrapper>
      </Main>
    </Link>
  );
};

export default SingleVendorCard;
