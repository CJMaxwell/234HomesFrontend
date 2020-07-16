import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Button from '../atoms/Button';

interface Props {
  imgUrl?: string;
  title?: string;
  placeholder?: string
}


const HeroBanner = styled.section<Props>`
  height: 16.425rem;
  background-image: url('${({ imgUrl }) => imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;

  h1 {
    padding-top: 3.65rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 1.4rem;
    font-family: 'Raleway', sans-serif;

  }

  .form-elements-wrap {
    width: 30rem;
    background: ${({ theme }) => theme.colors.white};
    padding-left: 20px;
    height: 3.15rem;
    box-sizing: border-box; 
  }
  
  .map-pin {
    display: inline-block;
    padding-right: 0.5rem;
    height: 23px;
  }
`;

const Search = styled(Button)`
  border-radius: 0;
  height: 3.15rem;
  width: 7rem;
`;


const Hero: React.FC<Props> = ({
  imgUrl = '/img/vendors/banner.png',
  title = '', placeholder = ''
}) => {

  const theme = useContext(ThemeContext);

  return (
    <HeroBanner imgUrl={imgUrl} className="general-padding">
      <h1 className="text-center">
        {title}
      </h1>
      <form className="flex items-center justify-center">
        <div className="flex items-center form-elements-wrap">
          <div className="border-r border-gray-400 h-full w-8/12">
            <input
              className="outline-none w-full h-full"
              type="text"
              placeholder={placeholder}
            />
          </div>
          <div className="w-4/12 pl-3 h-full">
            <div className="flex items-center h-full w-full">
              <img src="/img/map-pin.svg" className="map-pin" alt="Map Pin" />
              <input
                className="outline-none w-3/4 h-full"
                type="text"
                placeholder="Location"
              />
            </div>
          </div>
        </div>
        <Search className="uppercase font-semibold">Search </Search>
      </form>
    </HeroBanner>
  )
}

export default Hero
