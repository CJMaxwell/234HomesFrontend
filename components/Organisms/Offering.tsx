import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  .listing li {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
    font-weight: 600;
    display: inline-block;
    padding: 0.75rem 1.5rem;
  }
  .listing li.active {
    color: ${({ theme }) => theme.colors.gray5};
  }
  .house-tours {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange1};
  }
  .stories {
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow1};
  }
  .diy {
    border-bottom: 3px solid ${({ theme }) => theme.colors.green1};
  }
  .directory {
    border-bottom: 3px solid ${({ theme }) => theme.colors.gray5};
  }
  .projects {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange2};
  }
`;

const Offering = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <ul className="cursor-pointer border-b border-gray-300 flex items-center listing uppercase">
        <Link href="/house-tours">
          <li className="cursor-pointer pl-6 house-tours h-full">House Tours</li>
        </Link>
        <Link href="/stories">
          <li className="cursor-pointer stories">Stories</li>
        </Link>
        <Link href="/diy">
          <li className="cursor-pointer diy">DIY</li>
        </Link>
        <Link href="/directory">
          <li className="cursor-pointer directory">Directory</li>
        </Link>
        <Link href="/projects">
          <li className="cursor-pointer projects active">Projects</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

export default Offering;
