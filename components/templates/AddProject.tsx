import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import Skill from '../atoms/Skill';
import CTA from '../atoms/CTA';

import Footer from './Footer';
import withApollo from '../../lib/withApollo';
import useProjects from '../../hooks/useProjects';

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

  .tags {
    height: 4.1245rem;
  }
`;

const AddProject = () => {
  const theme = useContext(ThemeContext);
  const [tags, setTags] = useState<Array<string>>(['Interior Design']);
  const { addProject, addProjectLoading: loading } = useProjects();
  const [file, setFile] = useState<any>();

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
          <Formik
            onSubmit={({ color, year, ...values }) => {
              const payload = {
                ...values,
                year: Number(year),
                colors: [color],
              };

              // const formData = new FormData();
              // // @ts-ignore
              // formData.append('banner', file);

              addProject(file, payload);
            }}
            initialValues={{
              // file: null,
              title: '',
              category: '',
              year: 0,
              tags: [],
              color: '',
              city: '',
              state: '',
              description: '',
            }}
          >
            {({ handleChange, handleSubmit, handleBlur, values, setFieldValue }) => (
              <form className="main w-3/4" onSubmit={handleSubmit}>
                <h1 className="py-10 profile-title">Add New project</h1>

                <section className="upload-section relative">
                  <input
                    className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
                    name="file"
                    id="file"
                    required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      // setFieldValue('file', event?.currentTarget?.files?.[0]);
                      setFile(event.target.files?.[0]);
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
                    <h1 className="drag-and-drop">Drag and drop an images</h1>
                    <p>
                      Or <a className="browse pt-4">browse</a> to choose a file
                    </p>
                  </section>
                </section>

                <section className="flex items-center justify-between pt-8">
                  <fieldset className="w-full">
                    <legend className="profile-label">Title</legend>
                    <input
                      name="title"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      className="fieldset-input profile-desc w-full focus:outline-none"
                      placeholder="Lorem ipsum dolor sit amet sed diam nonumy eirmod"
                    />
                  </fieldset>
                </section>
                <section className="flex items-center justify-between pt-8">
                  <fieldset className="w-full">
                    <legend className="profile-label">Category</legend>
                    <select
                      name="category"
                      required
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                    >
                      <option value="">Select category</option>
                      <option value="Kitchen">Kitchen</option>
                    </select>
                  </fieldset>
                </section>

                <section className="flex items-center justify-between pt-8">
                  <fieldset className="w-full pb-4 px-4 tags">
                    <legend className="profile-label">Tags</legend>
                    {/* <p className="fieldset-input profile-desc">Lorem ipsum dolor sit amet sed diam nonumy eirmod</p> */}
                    {values.tags.map((tag) => (
                      <Skill key={`selectedTag${tag}`}>
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => {
                            setFieldValue(
                              'tags',
                              values.tags.filter((t) => t !== tag),
                            );
                            setTags([...tags, tag]);
                          }}
                        >
                          {tag}
                        </button>
                      </Skill>
                    ))}
                  </fieldset>
                </section>
                <section>
                  <ul className="flex items-center collection">
                    {tags.map((tag) => (
                      <li className="cursor-pointer" key={`availableTags${tag}`}>
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => {
                            setFieldValue('tags', Array.from(new Set([...values.tags, tag])));
                            setTags(tags.filter((t) => t !== tag));
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="flex items-center justify-between mt-12">
                  <fieldset className="w-1/2 mr-6">
                    <legend className="profile-label">Year</legend>
                    <select
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                      name="year"
                      required
                    >
                      <option value={0}>Select year</option>
                      <option value={2019}>2019</option>
                    </select>
                  </fieldset>
                  <fieldset className="w-1/2">
                    <legend className="profile-label">Colors</legend>
                    <select
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.color}
                      name="color"
                      required
                    >
                      <option value="">Select color</option>
                      <option value="Royal blue">Royal blue</option>
                    </select>
                  </fieldset>
                </section>
                <section className="flex items-center justify-between mt-10">
                  <fieldset className="w-1/2 mr-6">
                    <legend className="profile-label">City</legend>
                    <select
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      name="city"
                      required
                    >
                      <option value="">Select city</option>
                      <option value="Lekki">Lekki</option>
                    </select>
                  </fieldset>
                  <fieldset className="w-1/2">
                    <legend className="profile-label">State</legend>
                    <select
                      className="fieldset-input profile-desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                      name="state"
                      required
                    >
                      <option value="">Select state</option>
                      <option value="Lagos">Lagos</option>
                    </select>
                  </fieldset>
                </section>
                <section className="flex items-center justify-between pt-8 mt-4">
                  <fieldset className="w-full">
                    <legend className="profile-label">Description</legend>
                    <textarea
                      className="fieldset-input profile-desc w-full focus:outline-none"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      name="description"
                      placeholder="Tell us about the project…"
                      required
                    />
                  </fieldset>
                </section>
                <section className="flex justify-end mt-12 mb-16">
                  <CTA
                    type="submit"
                    className="update-profile"
                    padding="0.8rem 2.4rem;"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader type="ThreeDots" color={theme.colors.orange1} height={20} width={60} />
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

export default withApollo()(AddProject);
