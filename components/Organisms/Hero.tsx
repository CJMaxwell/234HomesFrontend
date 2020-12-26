import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import Button from '../atoms/Button';

interface Props {
  imgUrl?: string;
  title?: string;
  placeholder?: string;
  search: (params: {
    searchTerm: string;
    location: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => void;
  loading?: boolean;
}

interface HeroBannerProps {
  imgUrl?: string;
}

const HeroBanner = styled.section<HeroBannerProps>`
  height: 16.425rem;
  background-image: url('${({ imgUrl }) =>
    imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
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
  title = '',
  placeholder = '',
  search,
  loading,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <HeroBanner imgUrl={imgUrl} className="general-padding">
      <h1 className="text-center">{title}</h1>
      <Formik
        initialValues={{
          searchTerm: '',
          location: '',
        }}
        onSubmit={({ searchTerm, location }) => {
          search({ searchTerm, location });
        }}
      >
        {({ handleChange, handleSubmit, handleBlur, values }) => (
          <form className="flex items-center justify-center" onSubmit={handleSubmit}>
            <div className="flex items-center form-elements-wrap">
              <div className="border-r border-gray-400 h-full w-8/12">
                <input
                  name="searchTerm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.searchTerm}
                  className="outline-none w-full h-full"
                  type="text"
                  placeholder={placeholder}
                />
              </div>
              <div className="w-4/12 pl-3 h-full">
                <div className="flex items-center h-full w-full">
                  <img src="/img/map-pin.svg" className="map-pin" alt="Map Pin" />
                  <input
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    className="outline-none w-3/4 h-full"
                    type="text"
                    placeholder="Location"
                  />
                </div>
              </div>
            </div>
            <Search
              type="submit"
              className="uppercase font-semibold flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <Loader type="ThreeDots" color={theme.colors.white} height={20} width={60} />
              ) : (
                'Search'
              )}
            </Search>
          </form>
        )}
      </Formik>
    </HeroBanner>
  );
};

export default Hero;
