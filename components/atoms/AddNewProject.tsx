import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray22};
  border: 1px dashed ${({ theme }) => theme.colors.orange1};
  border-radius: 7px;
  .add-new {
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.8rem;
  }
`;

const AddNewProject = () => {
  return (
    <Wrapper className="flex justify-center items-center">
      <a>
        <section className="flex justify-center items-center">
          <img src="/img/add-project.svg" className="h-8 w-8" alt="Add new Project" />
        </section>
        <p className="add-new pt-4">Add New Project</p>
      </a>
    </Wrapper>
  )
}

export default AddNewProject
