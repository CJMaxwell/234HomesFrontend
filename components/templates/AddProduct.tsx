import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import Img from '../atoms/Img';
import fileToDataURI from '../../lib/fileToDataURI';
import useProducts from '../../hooks/useAddProduct';
import Offering from '../Organisms/Offering';
import Navbar from '../Organisms/Navbar';
import DashboardSideBar from '../Organisms/DashboardSideBar';
import Skill from '../atoms/Skill';
import CTA from '../atoms/CTA';
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

const AddProduct = () => {
  const theme = useContext(ThemeContext);
  const [tags, setTags] = useState<Array<string>>(['Interior Design']);
  const { addProduct, addProductLoading: loading } = useProducts();
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
            onSubmit={({ color, price, ...values }) => {
              const payload = {
                ...values,
                price: Number(price),
                colors: [color],
              };

              addProduct(file, payload);
            }}
            initialValues={{
              // file: null,
              title: '',
              category: '',
              tags: [],
              color: '',
              city: '',
              price: 0,
              state: '',
              description: '',
            }}
          >
            {({ handleChange, handleSubmit, handleBlur, values, setFieldValue }) => (
              <form className="main w-3/4" onSubmit={handleSubmit}>
                <h1 className="py-10 profile-title">Add new Product</h1>
                <section className="upload-section relative">
                  {file && <Img promise={fileToDataURI(file)} />}
                  <input
                    className="file-upload absolute inset-0 w-full z-50 opacity-0 cursor-pointer"
                    name="file"
                    id="file"
                    required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setFile(event.target.files?.[0]);
                    }}
                    type="file"
                  />
                  <section className="text-center">
                    <h1 className="resolution">High Resolution Image</h1>
                    <p className="img-type">PNG &amp; JPEGS 1200 px X 680 px</p>
                  </section>
                  <section className="flex justify-center items-center pt-20">
                    <img src="/img/cloud-computing.svg" className="text-center" alt="Upload" />
                  </section>
                  <section className="w-full text-center pt-4">
                    <h1 className="drag-and-drop">Drag and drop an images</h1>
                    <p>
                      Or <a className="browse">browse</a> to choose a file
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
                      className="fieldset-input profile-desc w-full"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                    >
                      <option value="">Select category</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Bathroom">Bathroom</option>
                    </select>
                  </fieldset>
                </section>

                <section className="flex items-center justify-between pt-8">
                  <fieldset className="w-full pb-4 px-4 tags">
                    <legend className="profile-label">Tags</legend>
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
                    <legend className="profile-label">Price</legend>
                    <input
                      name="price"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      className="fieldset-input profile-desc w-full focus:outline-none"
                      placeholder="Enter amount"
                    />
                  </fieldset>
                  <fieldset className="w-1/2">
                    <legend className="profile-label">Colors</legend>
                    <select
                      className="fieldset-input profile-desc w-full"
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
                      className="fieldset-input profile-desc w-full"
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
                      className="fieldset-input profile-desc w-full"
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

export default AddProduct;
