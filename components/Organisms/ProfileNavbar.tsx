import React, { useContext } from 'react';
import Link from 'next/link';
import styled, { ThemeContext } from 'styled-components';

const Logo = styled.a`
  img {
    width: 4.71875rem;
    height: 5.33125rem;
  }
`;

const Wrapper = styled.nav`
  height: 7rem;
  li{
      font-size: 14px;
  }
  .signupLink {
    width: 7rem;
  }
`;
const MainWrapper = styled.div`
  hr {
    color: ${({ theme }) => theme.colors.gray17}
  }
`;

const ProfileNavbar = () => {

  const theme = useContext(ThemeContext);

  return (
    <Wrapper className="flex items-center justify-between container mx-auto general-padding py-6">
      <Link href="/">
        <Logo className="flex items-center text-white mr-6">
          <img src="/img/234_Homes_final_logo.png" className="cursor-pointer" alt="+234Homes logo" />
        </Logo>
      </Link>
      <ul className="flex items-center mt-4 font-semibold uppercase">
        {/* <li>
          <a className="block lg:inline-block lg:mt-0 text-black hover:text-white mr-6">
            <img src="/img/plus.svg" className="h-5 w-5" alt="More menu Items" />
          </a>
        </li> */}
        <li>
          <Link href="/directory">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">
              Professionals
            </a>
          </Link>
        </li>
        <li>
          <Link href="/vendors">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">
              Vendors
            </a>
          </Link>
        </li>
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black mr-6">
            Gallery
          </a>
        </li>
        <li>
          <Link href="/products">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">Shop</a>
          </Link>
        </li>
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black mr-6">About</a>
        </li>
        <li>
          <Link href="/">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">
              Log out
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a className="">
              <img
                className="h-10 w-10 rounded-full inline-block mr-2"
                src="/img/profileImg.jpg"
                alt="User Profile Picture"
              />
            </a>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default ProfileNavbar;
