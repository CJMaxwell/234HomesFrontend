import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';

interface Props {
  profilePhoto?: string;
  name?: string;
  occupation?: string;
  location?: string;
  phone?: string;
  path?: string;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray15};
  .heading-text {
    font-size: 1.1rem;
  }
`;

const ProfessionalCard: React.FC<Props> = ({
  profilePhoto,
  name,
  occupation,
  location,
  phone,
  path = '/professional-about',
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Link href={`${path || ''}`}>
      <Wrapper className="max-w-sm rounded-sm px-4 cursor-pointer">
        <div className="w-full">
          <div className="text-center pt-8">
            <img className="w-20 h-20 rounded-full inline-block" src={profilePhoto} alt={name} />
          </div>

          <div className="text-sm mt-4 text-center">
            <h1 className="font-semibold heading-text">{name}</h1>
          </div>
          <div className="flex items-center justify-center pt-2  pb-6">
            <svg
              className="w-5 h-5 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-5 h-5 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
          <hr />
          <div className="pt-6 text-center">
            <h6 className="text-sm">{occupation}</h6>
            <div className="text-xs pt-4 flex items-center justify-center">
              <img src="/img/home-professional-phone.svg" alt="phone" />
              <span className="pl-2">{phone}</span>
            </div>
            <div className="text-xs pt-4 flex items-center justify-center">
              <img src="/img/home-professional-location.svg" alt="Location" />
              <span className="pl-2">{location}</span>
            </div>
          </div>
          <button
            onClick={() => Router.push('/professional-about')}
            className="uppercase border-gray-600 text-gray-600 mt-4 w-full bg-white rounded-sm block text-center mb-10"
          >
            Hire me
          </button>
        </div>
      </Wrapper>
    </Link>
  );
};

export default ProfessionalCard;
