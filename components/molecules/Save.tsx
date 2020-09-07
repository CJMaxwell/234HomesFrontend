import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  .save {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
`;

const Save = () => {
  return (

    <Wrapper className="flex items-center justify-center py-2 px-4 focus:outline-none">
      <img className="h-4 w-4" src="/img/heart-gallery-single.svg" alt="Save item" />
      <p className="save pl-2">Save</p>
    </Wrapper>

  )
}

export default Save
