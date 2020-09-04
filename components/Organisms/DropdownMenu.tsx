import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useAuth from '../../hooks/useAuth';
import { Items } from '../../submenu/MenuItems';


const Wrapper = styled.ul`
  li.dropdown-menu-item {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: none;
  }
`;
const ToggleBtn = styled.button`
  height: calc(100% - 134px);
`;

const DropdownMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const { logOut } = useAuth();

  return (
    <>
      <ToggleBtn onClick={toggleMenu} className="fixed right-0 left-0 bottom-0 h-full w-full opacity-0 cursor-default" />
      <Wrapper className="right-0 z-50 mt-4 py-2 w-48 bg-white absolute rounded-lg shadow-2xl capitalize">
        {
          Items.map((item, index) => {
            return (
              <li key={index} className="dropdown-menu-item">
                <Link href={item.path}>
                  <a className="block px-4 py-2">
                    {item.title}
                  </a>
                </Link>
              </li>
            )
          })
        }
        <li className="dropdown-menu-item" onClick={logOut}>
          <a className="block px-4 py-2">
            Sign Out
        </a>
        </li>
      </Wrapper>
    </>
  );
};

export default DropdownMenu;
