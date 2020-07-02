import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';


interface Props {
  imgUrl?: string;
  name?: string;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray15};
`;


const ProfessionalCard: React.FC<Props> = ({ imgUrl = '/img/jonathan.jpg', name }) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper className="max-w-sm rounded-sm px-4">
      <div className="w-full">
        <div className="text-center pt-8">
          <img
            className="w-20 h-20 rounded-full inline-block"
            src={imgUrl}
            alt={name}
          />
        </div>

        <div className="text-sm mt-4 text-center">
          <h1 className="font-bold">{name}</h1>
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
        <div className="pt-6">
          <h6>I am the right person for the job</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            velit assumenda officia unde inventore dignissimos!
          </p>
        </div>
        <button className="uppercase border-gray-600 text-gray-600 mt-4 w-full bg-white rounded-sm block text-center mb-10">
          Hire me
        </button>
      </div>
    </Wrapper>
  );
};

export default ProfessionalCard;
