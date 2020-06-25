import React from 'react';
const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/234_Homes_final_logo.png" alt="+234Homes logo" />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto uppercase">
        <ul className="flex w-full justify-end  mt-4 font-semibold">
          <li>
            <a className="block lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
              <img src="/plus.svg" alt="More menu Items" />
            </a>
          </li>
          <li>
            <a className="block lg:inline-block lg:mt-0 text-black mr-4">
              Gallery
            </a>
          </li>
          <li>
            <a className="block lg:inline-block lg:mt-0 text-black mr-4">
              Shop
            </a>
          </li>
          <li>
            <a className="block lg:inline-block lg:mt-0 text-black mr-4">
              About
            </a>
          </li>
          <li>
            <a className="block lg:inline-block lg:mt-0 text-black mr-4">
              Log in
            </a>
          </li>
          <li>
            <a className="inline-block text-sm px-2 py-2 leading-none border rounded-full bg-black text-white border-white">
              <img
                className="h-4 w-4 inline-block"
                src="/user.svg"
                alt="Sign up"
              />
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
