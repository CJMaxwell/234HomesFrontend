import React, { useContext, useRef } from 'react';
import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import styled, { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';
import { Formik } from 'formik';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import CTA from '../atoms/CTA';
import fileToDataURI from '../../lib/fileToDataURI';
import Img from '../atoms/Img';
import useEditor from '../../hooks/useEditor';
import DashboardLayout from '../Layouts/DashboardLayout';

const Wrapper = styled.section`
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

  .profile-title,
  .profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .upload-section {
    border: 1px dashed ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    padding: 2.55rem 5.25rem;
  }
  legend {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
  }
  .section-wrap {
    margin-bottom: 7.1rem;
  }
  .upload-section {
    border: 1px dashed ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    padding: 2.55rem 5.25rem;
  }
  .img-type {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .drag-and-drop {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 1.2rem;
  }
  .browse {
    color: ${({ theme }) => theme.colors.orange1};
    font-weight: 600;
  }

  .fieldset-input {
    padding: 0.7rem 1rem 1rem 1rem;
  }
  .profile-label {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
  textarea::placeholder,
  input::placeholder {
    color: ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
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

interface EditorProps {
  mode?: 'edit' | 'create';
  id?: string;
}
const Editor: React.FC<EditorProps> = ({ mode, id }) => {
  const theme = useContext(ThemeContext);
  const {
    editorState,
    handleEditorChange,
    handleSaveDraft,
    handlePublish,
    featuredImg,
    setFeaturedImg,
    loading,
  } = useEditor(id, mode);
  const formRef = useRef(null);

  const actions = (
    <section className="flex items-center space-x-4 h-24">
      <CTA
        type="submit"
        padding="5px 1rem"
        color={theme.colors.green1}
        borderColor={theme.colors.green1}
        disabled={loading}
      >
        {loading ? (
          <Loader type="ThreeDots" color={theme.colors.orange1} height={20} width={60} />
        ) : (
          'Publish'
        )}
      </CTA>
      <CTA
        type="button"
        padding="5px 1rem"
        color={theme.colors.blue2}
        borderColor={theme.colors.blue2}
        disabled={loading}
        onClick={() => {
          const { title, featured } = formRef.current.values;
          handleSaveDraft({ title, featured });
        }}
      >
        {loading ? (
          <Loader type="ThreeDots" color={theme.colors.orange1} height={20} width={60} />
        ) : (
          'Save As Draft'
        )}
      </CTA>
      <CTA type="button" padding="5px 1rem" disabled={loading}>
        {loading ? (
          <Loader type="ThreeDots" color={theme.colors.orange1} height={20} width={60} />
        ) : (
          'Cancel'
        )}
      </CTA>
    </section>
  );

  return (
    <DashboardLayout>
      <Wrapper>
        <div className="flex items-center justify-between">
          <h1 className="py-10 profile-title">Create a story</h1>
          {actions}
        </div>

        <Formik
          onSubmit={(payload) => {
            handlePublish(payload);
          }}
          initialValues={{
            title: '',
            featured: false,
          }}
          innerRef={formRef}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <section className="flex items-center justify-between pb-4">
                <fieldset className="w-full">
                  <legend className="profile-label">Title</legend>
                  <input
                    className="fieldset-input profile-desc w-full focus:outline-none"
                    placeholder="Title of the story..."
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </fieldset>
              </section>

              <section className="upload-section relative mb-4">
                {featuredImg && <Img promise={fileToDataURI(featuredImg)} />}
                <input
                  className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
                  name="featuredImg"
                  id="featuredImg"
                  required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    // setFieldValue('file', event?.currentTarget?.files?.[0]);
                    setFeaturedImg(event.target.files?.[0]);
                  }}
                  type="file"
                />
                <section className="flex justify-between items-center">
                  <section>
                    <h1 className="resolution">
                      High Resolution <br /> Image
                    </h1>
                    <p className="img-type pt-4">
                      PNG &amp; JPEGS <br />
                      1200 px X 680 px
                    </p>
                  </section>
                  <section>
                    <h1 className="resolution">
                      High Resolution <br />
                      Video
                    </h1>
                    <p className="img-type pt-4">MP4, &lt; 4 Mins</p>
                  </section>
                </section>
                <section className="flex justify-center items-center pt-20">
                  <img src="/img/cloud-computing.svg" className="text-center" alt="Upload" />
                </section>
                <section className="w-full text-center">
                  <h1 className="drag-and-drop">Drag and drop a featured image</h1>
                  <p className="text-sm">
                    Or <a className="browse pt-4">browse</a> to choose a file
                  </p>
                </section>
              </section>
              <section className="flex items-center pb-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="featured"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id="featured"
                  checked={values.featured}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="featured" className="profile-label">
                  Featured
                </label>
              </section>
              <Div>
                <DraftEditor
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />

                <div className="flex justify-end">{actions}</div>
              </Div>
            </form>
          )}
        </Formik>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Editor;
