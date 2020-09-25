import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik, FieldArray } from 'formik';
import Loader from 'react-loader-spinner';

import withApollo from '../../lib/withApollo';
import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardSideBar from '../Organisms/DashboardSideBar';

import Footer from './Footer';
import CTA from '../atoms/CTA';
import useProfile from '../../hooks/useProfile';
import useAddHouseTours from '../../hooks/useAddHouseTour';
import fileToDataURI from '../../lib/fileToDataURI';

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
  .fieldset-input {
    padding: 0.7rem 1rem 1rem 1rem;
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
  .profile-label {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
  textarea::placeholder,
  input::placeholder {
    color: ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
  }
  .collection li {
    padding-right: 0.7rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .collection {
    margin-top: 0.65rem;
  }
  .resolution {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  .img-type {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .drag-and-drop {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 1.75rem;
  }
  .browse {
    color: ${({ theme }) => theme.colors.orange1};
    font-weight: 600;
  }
  .add-new {
    color: ${({ theme }) => theme.colors.orange1};
  }
`;

const Img: React.FC<{ promise: Promise<string | ArrayBuffer | null | undefined> }> = ({
  promise,
}) => {
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>();

  useEffect(() => {
    promise.then((img) => setImage(img));
  }, []);

  return (
    <img
      src={image as string}
      alt="House tour media"
      className="absolute w-full h-full inset-0 object-cover"
    />
  );
};

const AddHouseTour = () => {
  const { profile } = useProfile();
  const { createHouseTour, loading } = useAddHouseTours();
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto section-wrap mb-32">
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

          <Formik
            initialValues={{
              slides: [
                {
                  photo: null,
                  description: '',
                },
              ],
              title: '',
              summary: '',
              category: '',
              featured: false,
            }}
            onSubmit={(values) => {
              const photos = values.slides.map((slide) => slide.photo);
              const descriptions = values.slides.map((slide) => slide.description);
              const formData = new FormData();

              formData.append('title', values.title);
              formData.append('featured', String(values.featured));
              formData.append('category', values.category);
              formData.append('summary', values.summary);
              formData.append('descriptions', JSON.stringify(descriptions));
              formData.append('authorId', profile?.id as string);
              photos.forEach((photo) => {
                // @ts-ignore
                formData.append('photos', photo);
              });

              createHouseTour(formData);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
              <form className="main w-3/4" onSubmit={handleSubmit}>
                <h1 className="py-10 profile-title">Add New House Tour</h1>

                <section className="flex items-center justify-between pb-8">
                  <fieldset className="w-full">
                    <legend className="profile-label">Title</legend>
                    <input
                      className="fieldset-input profile-desc w-full focus:outline-none"
                      placeholder="Lorem ipsum dolor sit amet sed diam nonumy eirmod"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      required
                    />
                  </fieldset>
                </section>

                <section className="flex items-center justify-between pb-8">
                  <fieldset className="w-full">
                    <legend className="profile-label">Category</legend>
                    <select
                      className="fieldset-input profile-desc"
                      name="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Kitchen">Kitchen</option>
                    </select>
                  </fieldset>
                </section>

                <section className="flex items-center justify-between pb-8">
                  <fieldset className="w-full">
                    <legend className="profile-label">Summary</legend>
                    <textarea
                      name="summary"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.summary}
                      className="fieldset-input profile-desc w-full focus:outline-none"
                      placeholder="Tell us about the project…"
                    />
                  </fieldset>
                </section>

                <section className="flex items-center justify-between pb-8">
                  <div>
                    <input
                      id="featured"
                      name="featured"
                      className="fieldset-input profile-desc focus:outline-none mr-1"
                      placeholder="Lorem ipsum dolor sit amet sed diam nonumy eirmod"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.featured}
                      type="checkbox"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="featured">Featured</label>
                  </div>

                  <button
                    className="add-new"
                    type="button"
                    onClick={() => {
                      // setSlidesNum(slidesNum + 1);
                      setFieldValue('slides', [...values.slides, { photo: null, description: '' }]);
                    }}
                  >
                    Add new
                  </button>
                </section>

                <FieldArray
                  name="slides"
                  render={() => (
                    <>
                      {values.slides.map((slide, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <React.Fragment key={`slide${index}`}>
                          <section className="upload-section relative">
                            {slide.photo && <Img promise={fileToDataURI(slide.photo)} />}

                            <input
                              className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
                              name={`slides[${index}].photo`}
                              id="file"
                              required
                              type="file"
                              onChange={(e) => {
                                const photo = e.target.files?.[0];
                                setFieldValue(`slides[${index}].photo`, photo);
                              }}
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
                              <img
                                src="/img/cloud-computing.svg"
                                className="text-center"
                                alt="Upload"
                              />
                            </section>
                            <section className="w-full text-center">
                              <h1 className="drag-and-drop">Drag and drop an images</h1>
                              <p>
                                Or <a className="browse pt-4">browse</a> to choose a file
                              </p>
                            </section>
                          </section>

                          <section className="flex items-center justify-between py-8 mt-4">
                            <fieldset className="w-full">
                              <legend className="profile-label">Description</legend>
                              <textarea
                                name={`slides[${index}].description`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="fieldset-input profile-desc w-full focus:outline-none"
                                placeholder="Tell us about the project…"
                              />
                            </fieldset>
                          </section>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                />

                <section className="flex justify-end mt-12 mb-16">
                  <CTA
                    type="submit"
                    className="update-profile"
                    padding="0.8rem 2.4rem;"
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
                      'Submit'
                    )}
                  </CTA>
                </section>
              </form>
            )}
          </Formik>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(AddHouseTour);
