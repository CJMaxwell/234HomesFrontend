import React, { useState, useCallback } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import video from "@react-page/plugins-video";
import spacer from "@react-page/plugins-spacer";
import divider from "@react-page/plugins-divider";
import background from "@react-page/plugins-background";

import withApollo from '../../lib/withApollo';
import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import Footer from './Footer';


const Wrapper = styled.section`
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .main {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    margin-left: 1.7rem;
    padding: 0 2.65rem;
  }
  
`;

const plugins = {
  content: [slate(), image, video, spacer, divider],
  // layout: [background({defaultPlugin: slate()})]
};

const AddStory = () => {
  const [editorValue, setEditorValue] = useState();
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto mb-16">
        <Offering />
        <ul className="breadcrumb flex items-center uppercase">
          <li>Home</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Dashboard</li>
        </ul>
        <section className="flex justify-between">
          <section className="w-1/4">
            <DashboardSideBar />
          </section>
          <section className="main w-3/4">
            <Editor
              plugins={plugins}
              defaultPlugin={slate()}
              value={editorValue}
              onChange={setEditorValue} />
          </section>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default withApollo()(AddStory);
