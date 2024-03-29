import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { useOnline } from '../../hooks/useAuth';
import useProfile from '../../hooks/useProfile';
import DropdownMenu from './DropdownMenu';

const Logo = styled.a`
  img {
    width: 4.71875rem;
    height: 5.33125rem;
  }
`;

const Wrapper = styled.nav`
  li {
    font-size: 14px;
  }

  .signupLink {
    width: 7rem;
  }
`;

const Navbar = () => {
  const { online } = useOnline();
  const { profile } = useProfile();

  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = () => setDropdown(!dropdown);

  return (
    <Wrapper className="container mx-auto flex items-center justify-between py-6 general-padding">
      <Link href="/">
        <Logo className="flex items-center text-white mr-6">
          <img
            src="/img/234_Homes_final_logo.png"
            className="cursor-pointer"
            alt="+234Homes logo"
          />
        </Logo>
      </Link>
      <ul className="flex items-center mt-4 font-semibold uppercase">
        <li>
          <Link href="/directory">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">
              Professionals
              {/* <img src="/img/plus.svg" className="h-5 w-5" alt="More menu Items" /> */}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/vendors">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">Vendors</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a className="block lg:inline-block lg:mt-0 text-black mr-6">About</a>
          </Link>
        </li>

        {!online && (
          <>
            <li>
              <Link href="/login">
                <a className="block lg:inline-block lg:mt-0 text-black mr-6">Log in</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className="inline-flex justify-center items-center h-12 signupLink text-sm px-2 py-2 leading-none border rounded-full bg-black text-white border-white">
                  <img className="h-4 w-4 inline-block mr-2" src="/img/user.svg" alt="Sign up" />
                  Sign up
                </a>
              </Link>
            </li>
          </>
        )}

        {online && (
          <li className="relative" onClick={toggleMenu}>
            <a>
              <img
                className="h-10 w-10 object-cover rounded-full inline-block mr-2"
                src={profile?.profilePhoto || '/img/dashboard/dashboardperson.svg'}
                alt=""
              />
            </a>
            {dropdown && <DropdownMenu toggleMenu={toggleMenu} />}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export default Navbar;
