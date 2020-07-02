import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-6">
      <Link href="/">
        <a className="flex items-center text-white mr-6">
          <img src="/img/234_Homes_final_logo.png" className="cursor-pointer" alt="+234Homes logo" />
        </a>
      </Link>
      <ul className="flex items-center mt-4 font-semibold uppercase">
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black hover:text-white mr-6">
            <img src="/img/plus.svg" alt="More menu Items" />
          </a>
        </li>
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black mr-6">
            Gallery
          </a>
        </li>
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black mr-6">Shop</a>
        </li>
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black mr-6">About</a>
        </li>
        <li>
          <a className="block lg:inline-block lg:mt-0 text-black mr-6">
            Log in
          </a>
        </li>
        <li>
          <Link href="/signup">
            <a className="inline-flex justify-center items-center h-12 w-32 text-sm px-2 py-2 leading-none border rounded-full bg-black text-white border-white">
              <img
                className="h-4 w-4 inline-block mr-2"
                src="/img/user.svg"
                alt="Sign up"
              />
              Sign up
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
