/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';

import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Offering from '../Offering';
import Navbar from '../Navbar';
import DashboardSideBar from '../DashboardSideBar';
import CTA from '../../atoms/CTA';

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
  .profile-title {
    text-transform: uppercase;
  }
  .profile-title,
  .profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .section-wrap {
    margin-bottom: 7.1rem;
  }
  
`;

const Div = styled.div`

  .wrapper-class {
    /* padding: 1rem; */
  }
  .editor-class {
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .toolbar-class {
    border: 1px solid #ccc;
  }
`;
const Editor: React.FC = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    console.log(currentContentAsHTML);
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const onSave = () => {
    // Saving ...
  };

  const onPublish = () => {
    // Publishing ...
  };

  const onDelete = () => {
    // Deleting...
  };

  const [loading, setLoading] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto section-wrap">
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
            <div className="flex items-center justify-between">
              <h1 className="py-10 profile-title">Create a story</h1>
              <section className="flex items-center space-x-4 h-24">
                <CTA
                  type="submit"
                  padding="5px 1rem"
                  color={theme.colors.green1}
                  borderColor={theme.colors.green1}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color={theme.colors.orange1}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Publish'
                    )}
                </CTA>
                <CTA
                  type="submit"
                  padding="5px 1rem"
                  color={theme.colors.blue2}
                  borderColor={theme.colors.blue2}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color={theme.colors.orange1}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Save As Draft'
                    )}
                </CTA>
                <CTA
                  type="submit"
                  padding="5px 1rem"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color={theme.colors.orange1}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Delete'
                    )}
                </CTA>
              </section>
            </div>

            <Div>
              <DraftEditor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />

              <section className="flex justify-end items-center space-x-4 h-24">
                <CTA
                  type="submit"
                  padding="5px 1rem"
                  color={theme.colors.green1}
                  borderColor={theme.colors.green1}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color={theme.colors.orange1}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Publish'
                    )}
                </CTA>
                <CTA
                  type="submit"
                  padding="5px 1rem"
                  color={theme.colors.blue2}
                  borderColor={theme.colors.blue2}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color={theme.colors.orange1}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Save As Draft'
                    )}
                </CTA>
                <CTA
                  type="submit"
                  padding="5px 1rem"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color={theme.colors.orange1}
                      height={20}
                      width={60}
                    />
                  ) : (
                      'Delete'
                    )}
                </CTA>
              </section>
            </Div>

          </section>
        </section>
      </div>
    </Wrapper>

  );
};

export default Editor;
